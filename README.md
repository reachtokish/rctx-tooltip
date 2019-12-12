# rctx-tooltip

Tooltip package extensively for react library

## Installation
```bash
npm install --save rctx-tooltip
```

## Usage

```jsx
import React, { Component } from 'react';
import RCTXTooltip from 'rctx-tooltip';

class Example extends Component {
  render () {
    return (
      <RCTXTooltip>
        <button>Hover over me</button>
      </RCTXTooltip>
    )
  }
}
```

## Options
Checkout the example <a href="https://reachtokish.github.io/rctx-tooltip/" target="_blank">demo</a>
<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 60px;">Name</th>
    <th style="width: 50px;">Type</th>
    <th style="width: 10px;">Options</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>content</td>
      <td>String or Html</td>
      <td>default String</td>
      <td>Any kind of string or options</td>
    </tr>
    <tr>
      <td>isVisible</td>
      <td>Boolean</td>
      <td>true / false<br />Default: false</td>
      <td>Show hide tooltip based on value</td>
    </tr>
    <tr>
      <td>position</td>
      <td>String</td>
      <td>"top left" / "top right" / "bottom left" / "bottom right" / "top center" / "right center" / "bottom center" / "left center" (+ is also applicable after top/right bottom/left like "top+10 left")<br />Default: "top left"</td>
      <td>Set tooltip position</td>
    </tr>
    <tr>
      <td>animation</td>
      <td>String</td>
      <td>"fade" / "zoom"<br />Default: "fade"</td>
      <td>Set animations for tooltip</td>
    </tr>
    <tr>
      <td>event</td>
      <td>String</td>
      <td>"hover" / "click" / "focus"<br />Default: "hover"</td>
      <td>Show tooltip on hover</td>
    </tr>
    <tr>
      <td>delayHide</td>
      <td>Number</td>
      <td>Any number</td>
      <td>Hides tooltip in delay time mentioned</td>
    </tr>
    <tr>
      <td>delayShow</td>
      <td>Number</td>
      <td>Any number</td>
      <td>Show tooltip in delay time mentioned</td>
    </tr>
    <tr>
      <td>tooltipClass</td>
      <td>String</td>
      <td>Any string</td>
      <td>Add class in the tooltip popup</td>
    </tr>
    <tr>
      <td>tooltipContainerClass</td>
      <td>String</td>
      <td>Any string</td>
      <td>Add class in the tooltip container popup</td>
    </tr>
    <tr>
      <td>eventOff</td>
      <td>String</td>
      <td>"dblclick"</td>
      <td>On double click only close the tooltip</td>
    </tr>
    <tr>
      <td>scrollToHide</td>
      <td>Boolean</td>
      <td>true / false<br />Default: true</td>
      <td>On window scroll hides the tooltip</td>
    </tr>
    <tr>
      <td>resizeToHide</td>
      <td>Boolean</td>
      <td>true / false<br />Default: true</td>
      <td>On window resize hides the tooltip</td>
    </tr>
    <tr>
      <td>onHidden</td>
      <td>Function</td>
      <td>onHidden={() => console.log("I am hidden!!")}</td>
      <td>Invokes after tooltip gets hidden</td>
    </tr>
    <tr>
      <td>onShown</td>
      <td>Function</td>
      <td>onShown={() => console.log("I am visible!!")}</td>
      <td>Invokes after tooltip gets visible</td>
    </tr>
  </tbody>
</table>

## Contributing 🙏
We will welcome any kind of contribution, small to big, suggestion to bug fixing or even collaborating. You can fork the repo and then make some changes and make a pull request. We will review your code and merge it 👏.

## License
MIT © [reachtokish](https://github.com/reachtokish)