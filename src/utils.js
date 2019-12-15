import ReactDOM from 'react-dom';

export const tooltipPosition = (position, tooltip, tooltipContainer, appendTo) => {
    let { clientHeight:tooltipHeight, clientWidth:tooltipWidth } = tooltip;
    let { clientHeight:tooltipContainerHeight, clientWidth:tooltipContainerWidth } = tooltipContainer;
    let splitPosition = position.split(" ");
    let tipClass = {};

    const tooltipContNode = ReactDOM.findDOMNode(tooltipContainer);
    const getClientRect = tooltipContNode.getBoundingClientRect();
    const windowInnerHeight = window.innerHeight;
    const windowInnerWidth = window.innerWidth;

    const offsetTop = tooltipContNode.offsetTop;
    const offsetLeft = tooltipContNode.offsetLeft;

    let tipPosition = {
        top: -tooltipHeight,
        left: "0px"
    };

    let top = appendTo ? offsetTop - tooltipHeight : -tooltipHeight;
    let right = appendTo ? offsetLeft + (tooltipContainerWidth - tooltipWidth) : tooltipContainerWidth - tooltipWidth;
    let bottom = appendTo ? offsetTop + tooltipContainerHeight : tooltipContainerHeight;
    let left = appendTo ? offsetLeft : 0;

    let topPlus = val => appendTo ? offsetTop + (-(tooltipHeight + val)) : -(tooltipHeight + val);
    let rightPlus = val => appendTo ? offsetLeft + ((tooltipContainerWidth - tooltipWidth) - val) : (tooltipContainerWidth - tooltipWidth) - val;
    let bottomPlus = val => appendTo ? offsetTop + (tooltipContainerHeight + val) : tooltipContainerHeight + val;
    let leftPlus = val => appendTo ? offsetLeft + val : val;

    let topCenter = appendTo ? offsetLeft + (-((tooltipWidth / 2) - (tooltipContainerWidth / 2))) : -((tooltipWidth / 2) - (tooltipContainerWidth / 2));
    let rightCenter = appendTo ? offsetTop + (-((tooltipHeight / 2) - (tooltipContainerHeight / 2))) : -((tooltipHeight / 2) - (tooltipContainerHeight / 2));
    let bottomCenter = appendTo ? offsetLeft + (-((tooltipWidth / 2) - (tooltipContainerWidth / 2))) : -((tooltipWidth / 2) - (tooltipContainerWidth / 2));
    let leftCenter = appendTo ? offsetTop + (-((tooltipHeight / 2) - (tooltipContainerHeight / 2))) : -((tooltipHeight / 2) - (tooltipContainerHeight / 2));

    if(position.includes("top")) {
        tipPosition.top = top;
        tipClass[0] = "top";
        if(splitPosition.length > 0 && splitPosition[1] == "center") {
            tipPosition.left = topCenter;
            tipClass[1] = "center";
        }
        if((getClientRect.top - tooltipHeight) <= 0) {
            tipPosition.top = bottom;
            tipClass[0] = "bottom";
        }
    }
    if(position.includes("right")) {
        tipPosition.left = right;
        tipClass[1] = "right";
        if(splitPosition.length > 0 && splitPosition[1] == "center") {
            tipPosition.top = rightCenter;
            tipPosition.left = appendTo ? offsetLeft + tooltipContainerWidth : tooltipContainerWidth;
            tipClass[0] = "right";
            tipClass[1] = "center";
            if((getClientRect.right + tooltipWidth) >= windowInnerWidth) {
                tipPosition.left = appendTo ? offsetLeft + (-tooltipWidth) : -tooltipWidth;
                tipClass[0] = "left";
            }
        }
    }
    if(position.includes("bottom")) {
        tipPosition.top = bottom;
        tipClass[0] = "bottom";
        if(splitPosition.length > 0 && splitPosition[1] == "center") {
            tipPosition.left = bottomCenter;
            tipClass[0] = "bottom";
            tipClass[1] = "center";
        }
        if((getClientRect.bottom + tooltipHeight) >= windowInnerHeight) {
            tipPosition.top = top;
            tipClass[0] = "top";
        }
    }
    if(position.includes("left")) {
        tipPosition.left = left;
        tipClass[1] = "left";
        if(splitPosition.length > 0 && splitPosition[1] == "center") {
            tipPosition.top = leftCenter;
            tipPosition.left = appendTo ? offsetLeft + (-tooltipWidth) : -tooltipWidth;
            tipClass[0] = "left";
            tipClass[1] = "center";
            if(getClientRect.left <= tooltipWidth) {
                tipPosition.left = appendTo ? offsetLeft + tooltipContainerWidth : tooltipContainerWidth;
                tipClass[0] = "right";
            }
        }
    }
    if(position.includes("top+")) {
        let filterSplit = splitPosition.filter(el => el.includes("top+"));
        if(filterSplit.length > 0) {
            let splitByPlus = filterSplit[0].split("+");
            if(splitByPlus.length > 0) {
                let val = parseInt(splitByPlus[1]);
                tipPosition.top = topPlus(val);
                tipClass[0] = "top";
                if(((getClientRect.top - tooltipHeight) - val) <= 0) {
                    tipPosition.top = bottomPlus(val);
                    tipClass[0] = "bottom";
                }
            }
        }
    }
    if(position.includes("right+")) {
        let filterSplit = splitPosition.filter(el => el.includes("right+"));
        if(filterSplit.length > 0) {
            let splitByPlus = filterSplit[0].split("+");
            if(splitByPlus.length > 0) {
                let val = parseInt(splitByPlus[1]);
                tipPosition.left = rightPlus(val);
                tipClass[1] = "right";
                if(splitPosition.length > 0 && splitPosition[1] == "center") {
                    tipPosition.left = appendTo ? offsetLeft + (tooltipContainerWidth + val) : tooltipContainerWidth + val;
                    tipClass[0] = "right";
                    tipClass[1] = "center";
                    if(((getClientRect.right + tooltipWidth) + val) >= windowInnerWidth) {
                        tipPosition.left = appendTo ? offsetLeft + (-(tooltipWidth + val)) : -(tooltipWidth + val);
                        tipClass[0] = "left";
                    }
                }
            }
        }
    }
    if(position.includes("bottom+")) {
        let filterSplit = splitPosition.filter(el => el.includes("bottom+"));
        if(filterSplit.length > 0) {
            let splitByPlus = filterSplit[0].split("+");
            if(splitByPlus.length > 0) {
                let val = parseInt(splitByPlus[1]);
                tipPosition.top = bottomPlus(val);
                tipClass[0] = "bottom";
                if(((getClientRect.bottom + tooltipHeight) + val) >= windowInnerHeight) {
                    tipPosition.top = topPlus(val);
                    tipClass[0] = "top";
                }
            }
        }
    }
    if(position.includes("left+")) {
        let filterSplit = splitPosition.filter(el => el.includes("left+"));
        if(filterSplit.length > 0) {
            let splitByPlus = filterSplit[0].split("+");
            if(splitByPlus.length > 0) {
                let val = parseInt(splitByPlus[1]);
                tipPosition.left = leftPlus(val);
                tipClass[1] = "left";
                if(splitPosition.length > 0 && splitPosition[1] == "center") {
                    tipPosition.left = appendTo ? offsetLeft + (-tooltipWidth - val) : -tooltipWidth - val;
                    tipClass[0] = "left";
                    tipClass[1] = "center";
                    if((getClientRect.left - val) <= tooltipWidth) {
                        tipPosition.left = appendTo ? offsetLeft + (tooltipContainerWidth + val) : tooltipContainerWidth + val;
                        tipClass[0] = "right";
                    }
                }
            }
        }
    }

    const makeClass = () => Object.values(tipClass).join("_");

    return {
        tipPosition,
        tipArrowClass: makeClass()
    };
}