import React, { Component } from 'react';
import RCTXTooltip from 'rctx-tooltip';

const Code = `<RCTXTooltip
    content={<div>I am here!!</div>}
    event="click"
    ref={tooltipInstance => { this.tooltipElem = tooltipInstance; }}
>
    <button className="example_btn">Show me the tooltip!</button>
</RCTXTooltip>

<br />

<button onClick={() => { this.tooltipElem.showTooltip(); }}>Show</button>
<button onClick={() => { this.tooltipElem.hideTooltip(); }}>Hide</button>
`;

export default class ShowHideManually extends Component {

    render() {
        return (
            <div className="container">
                <div className="example_body">
                    <h3 className="section_title">Show hide tooltip manually</h3>
                    <div className="example_container">
                        <div className="code_block">
                            <code>
                                <pre>
                                    {Code}
                                </pre>
                            </code>
                        </div>
                        <div className="example_block">
                            <div style={{textAlign: "center"}}>
                                <RCTXTooltip
                                    content={<div>I am here!!</div>}
                                    ref={tooltipInstance => { this.tooltipElem = tooltipInstance; }}
                                    event="click"
                                >
                                    <button className="example_btn">Show me the tooltip!</button>
                                </RCTXTooltip>
                                <br />
                                <button className="small_btn success mr-5 mt-10" onClick={() => { this.tooltipElem.showTooltip(); }}>Show</button>
                                <button className="small_btn alert ml-5 mt-10" onClick={() => { this.tooltipElem.hideTooltip(); }}>Hide</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}