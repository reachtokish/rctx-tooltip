import React, { Component } from 'react';
import SampleTooltip from './components/sampleTooltip';
import Position from './components/position';
import PositionOffset from './components/positionOffset';
import RightCenter from './components/rightCenter';
import FadeAnimation from './components/animationFade';
import FocusEvent from './components/focusEvent';
import ClickEvent from './components/clickEvent';
import AddClass from './components/addClass';
import OnHidden from './components/onHidden';
import OnShown from './components/onShown';
import EventOff from './components/eventOff';
import VisibleByDefault from './components/visibleByDefault';
import DelayHide from './components/delayHide';
import DelayShow from './components/delayShow';
import ShowHideManually from './components/showHideManually';

import github_ribbon from './github-ribbon.png';

export default class App extends Component {
	render () {
		return (
			<main>
				<header>
					<div className="container">
						<h2 className="logo">RCTXTooltip <span className="full_doc">(<a href="https://github.com/reachtokish/rctx-tooltip" target="_blank" rel="noopener noreferrer">Full documentation</a>)</span></h2>
					</div>
				</header>
				<SampleTooltip />
				<Position />
				<VisibleByDefault />
				<PositionOffset />
				<RightCenter />
				<DelayHide />
				<DelayShow />
				<FadeAnimation />
				<FocusEvent />
				<ClickEvent />
				<ShowHideManually />
				<AddClass />
				<OnHidden />
				<OnShown />
				<EventOff />
				<a href="https://github.com/reachtokish/rctx-tooltip" className="github_ribbon">
					<img src={github_ribbon} alt="ribbon" />
				</a>
			</main>
		)
	}
}
