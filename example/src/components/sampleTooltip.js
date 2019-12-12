import React, { Component } from 'react';
import RCTXTooltip from 'rctx-tooltip';

const Code = `<RCTXTooltip
    content={<div>I am a tooltip!!!</div>}
>
    <button>Click Me</button>
</RCTXTooltip>
`;

export default class SampleTooltip extends Component {

    render() {
        return (
            <div className="container">
                <div className="example_body">
                    <h3 className="section_title">Sample tooltip</h3>
                    <div className="example_container">
                        <div className="code_block">
                            <code>
                                <pre>
                                    {Code}
                                </pre>
                            </code>
                        </div>
                        <div className="example_block">
                            <RCTXTooltip
                                content={<div>I am here!!</div>}
                            >
                                <button className="example_btn">Show me the tooltip!</button>
                            </RCTXTooltip>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}