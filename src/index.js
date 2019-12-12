import React, { Component } from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import { tooltipPosition } from './utils';
import { CSSTransition } from 'react-transition-group';
import fade from './fade.module.css';
import zoom from './zoom.module.css';

export default class RCTXTooltip extends Component {

	static propTypes = {
		content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
		isVisible: PropTypes.bool,
		position: PropTypes.string,
		animation: PropTypes.any,
		event: PropTypes.string,
		delayShow: PropTypes.number,
		delayShow: PropTypes.number,
		onHidden: PropTypes.func,
		eventOff: PropTypes.string,
		tooltipClass: PropTypes.string,
		tooltipContainerClass: PropTypes.string
	}

	static defaultProps = {
		content: "Hey I'm a tooltip!!",
		isVisible: false,
		position: "top left",
		animation: fade,
		event: "hover"
	}

	constructor(props) {
		super(props);
		this.state = {
			isVisible: props.isVisible,
			position: {
				top: "0px",
				left: "0px"
			},
			tooltipClass: "",
			animationTimeout: 200
		};
		
		this.showTooltip = this.showTooltip.bind(this);
		this.hideTooltip = this.hideTooltip.bind(this);
		
		this.tooltipRef = React.createRef();
		this.tooltipContainerRef = React.createRef();

	}

	showTooltip() {
		const { delayShow, onShown } = this.props;
		const { isVisible, animationTimeout } = this.state;
		if(delayShow && !isNaN(delayShow)) {
			setTimeout(() => {
				this.setState({
					isVisible: true
				}, () => {
					this.setTooltipPosition();
					onShown ? setTimeout(() => onShown(), animationTimeout) : null;
				})
			}, delayShow)
			return;
		}
		if(!isVisible) {
			this.setState({
				isVisible: true
			}, () => {
				this.setTooltipPosition();
				onShown ? setTimeout(() => onShown(), animationTimeout) : null;
			})
		}
	}

	hideTooltip() {
		const { delayHide, onHidden } = this.props;
		const { isVisible, animationTimeout } = this.state;
		if(delayHide && !isNaN(delayHide)) {
			setTimeout(() => {
				this.setState({
					isVisible: false
				}, () => onHidden ? setTimeout(() => onHidden(), animationTimeout) : null)
			}, delayHide)
			return;
		}
		if(isVisible) {
			this.setState({
				isVisible: false
			}, () => onHidden ? setTimeout(() => onHidden(), animationTimeout) : null)
		}
	}

	setTooltipPosition() {
		const { position } = this.props;
		const { current: tooltipCurrent } = this.tooltipRef;
		const { current: tooltipContainerCurrent } = this.tooltipContainerRef;
		const { tipPosition, tipArrowClass } = tooltipPosition(position, tooltipCurrent, tooltipContainerCurrent);
		this.setState({
			position: tipPosition,
			tooltipClass: tipArrowClass
		})
	}

	setAnimation() {
		const { animation } = this.props;
		let animationType = null;
		switch(animation) {
			case "fade":
				animationType = fade;
				break;
			case "zoom":
				animationType = zoom;
				break;
			default:
				animationType = zoom;
		}
		this.setState({
			animation: animationType
		})
	}

	getAlert() {
		alert('clicked');
	}

	componentDidMount() {
		const { isVisible, eventOff, hideTooltip } = this.props;
		if(isVisible) {
			this.setTooltipPosition();
		}
		this.setAnimation();
		
		window.addEventListener("wheel", this.hideTooltip);

		if(eventOff) {
			if(eventOff === "click") {
				this.tooltipContainerRef.current.addEventListener("click", (e) => {
					this.hideTooltip();
				})
			}
			if(eventOff === "dblclick") {
				this.tooltipContainerRef.current.addEventListener("dblclick", () => {
					this.hideTooltip();
				})
			}
		}

		if(hideTooltip) {
			hideTooltip(this.hideTooltip);
		}

	}

	componentWillUnmount() {
		window.removeEventListener("wheel", this.hideTooltip);
	}

  	render() {
		const { content, event, tooltipClass: tooltipBoxClass, tooltipContainerClass } = this.props;
		const { isVisible, position: {top, left}, animation, tooltipClass, animationTimeout } = this.state;
		const eventList = event.split(" ");
		return (
			<div
			  	className={
					styles.tooltip_container + 
					(tooltipContainerClass ? " " + tooltipContainerClass : "")
				}
				onMouseEnter={eventList.includes("hover") ? this.showTooltip : null}
				onMouseLeave={eventList.includes("hover") ? this.hideTooltip : null}
				onFocus={eventList.includes("focus") ? this.showTooltip : null}
				onBlur={eventList.includes("focus") ? this.hideTooltip : null}
				onClick={eventList.includes("click") ? this.showTooltip : null}
				ref={this.tooltipContainerRef}
			>
				<CSSTransition
					in={isVisible}
					classNames={animation}
					timeout={animationTimeout}
					unmountOnExit
					appear
				>
					<div 
						className={
							styles.tooltip_box + " " + 
							styles[tooltipClass] + 
							(tooltipBoxClass ? " " + tooltipBoxClass : "")
						}
						style={{
							top,
							left
						}}
						ref={this.tooltipRef}
					>
						{content}
					</div>
				</CSSTransition>
        		{this.props.children}
      		</div>
		)
  	}
}