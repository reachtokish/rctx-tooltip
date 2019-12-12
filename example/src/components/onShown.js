import React, { Component } from 'react';
import RCTXTooltip from 'rctx-tooltip';

const Code = `<RCTXTooltip
    content={<div>I am here!!</div>}
    position="bottom+8 left"
    onShown={() => console.log("I am visible!!")}
>
    <button className="example_btn">Show me the tooltip!</button>
</RCTXTooltip>
`;

export default class OnShown extends Component {

    render() {
        return (
            <div className="container">
                <div className="example_body">
                    <h3 className="section_title">Do something on shown</h3>
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
                                position="bottom+8 left"
                                onShown={() => console.log("I am visible!!")}
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