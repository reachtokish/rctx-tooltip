import React, { Component } from 'react'
import RCTXTooltip from 'rctx-tooltip';
import img from './image.jpeg';

const firstExample = `<RCTXTooltip
	content={<div>I am a tooltip!!!</div>}
>
	<button>Click Me</button>
</RCTXTooltip>
`;

const secondExample = `<RCTXTooltip
	content={<div>I am a tooltip!!!</div>}
	position="top+10 center"
>
	<button>Click Me</button>
</RCTXTooltip>
`;

export default class App extends Component {
	render () {
		return (
			<div
				style={{
					// float: "right",
					margin: "0 2000px"
				}}
			>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<RCTXTooltip
					content={<div><img src={img} alt="" /></div>}
					position="bottom+10 center"
					animation="fade"
					event="click"
					eventOff="dblclick"
					hideTooltip={hide => this.hideTooltip = hide}
					tooltipClass="my-tooltip"
					tooltipContainerClass="my-tooltip-container"
				>
					<button>Hey</button>
				</RCTXTooltip>
				{/* <button onClick={() => this.hideTooltip()}>Click</button> */}
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
				<p>Space</p>
			</div>
		)
	}
}
