import{r as t,h as o}from"./p-ba441ad3.js";const i=class{constructor(o){t(this,o),this.isMouseOver=!1,this.tooltipText="Tooltip",this.position="left-center"}setVisibility(t){this.isMouseOver=t}render(){return o("div",{class:"tooltip__wrapper"},o("div",{onMouseOver:()=>this.setVisibility(!0),onMouseLeave:()=>this.setVisibility(!1)},o("slot",null)),o("div",{class:{tooltip__tip:!0,[`tooltip__tip--${this.position}`]:!0,"tooltip__tip--visible":this.isMouseOver}},o("bds-typo",{variant:"fs-12"},this.tooltipText)))}};i.style='.tooltip__wrapper.sc-bds-tooltip{display:inline-block;position:relative}.tooltip__tip.sc-bds-tooltip{position:absolute;left:50%;border-radius:8px;padding:8px;color:#ffffff;background:#0a0f1a;z-index:70000;white-space:normal;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:32px;max-width:320px;-webkit-filter:drop-shadow(0 2px 8px rgba(96, 123, 153, 0.4));filter:drop-shadow(0 2px 8px rgba(96, 123, 153, 0.4));opacity:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default}.tooltip__tip--visible.sc-bds-tooltip{opacity:1}.tooltip__tip.sc-bds-tooltip::before{content:"";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:-6px;border-width:6px}.tooltip__tip--top-center.sc-bds-tooltip,.tooltip__tip--top-left.sc-bds-tooltip,.tooltip__tip--top-right.sc-bds-tooltip{bottom:calc(100% + 10px)}.tooltip__tip--top-center.sc-bds-tooltip::before,.tooltip__tip--top-left.sc-bds-tooltip::before,.tooltip__tip--top-right.sc-bds-tooltip::before{top:100%;border-top-color:#0a0f1a}.tooltip__tip--top-left.sc-bds-tooltip{left:0}.tooltip__tip--top-left.sc-bds-tooltip::before{left:calc(15% + 6px)}.tooltip__tip--top-right.sc-bds-tooltip{left:initial;right:0}.tooltip__tip--top-right.sc-bds-tooltip::before{left:calc(85% - 6px)}.tooltip__tip--bottom-center.sc-bds-tooltip,.tooltip__tip--top-center.sc-bds-tooltip{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center.sc-bds-tooltip,.tooltip__tip--right-center.sc-bds-tooltip{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center.sc-bds-tooltip,.tooltip__tip--right-top.sc-bds-tooltip,.tooltip__tip--right-bottom.sc-bds-tooltip{left:calc(100% + 10px);top:50%}.tooltip__tip--right-center.sc-bds-tooltip::before,.tooltip__tip--right-top.sc-bds-tooltip::before,.tooltip__tip--right-bottom.sc-bds-tooltip::before{left:-6px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:#0a0f1a}.tooltip__tip--right-top.sc-bds-tooltip{top:0}.tooltip__tip--right-top.sc-bds-tooltip::before{top:40%}.tooltip__tip--right-bottom.sc-bds-tooltip{top:initial;bottom:0}.tooltip__tip--right-bottom.sc-bds-tooltip::before{top:60%}.tooltip__tip--bottom-center.sc-bds-tooltip,.tooltip__tip--bottom-right.sc-bds-tooltip,.tooltip__tip--bottom-left.sc-bds-tooltip{top:calc(100% + 10px)}.tooltip__tip--bottom-center.sc-bds-tooltip::before,.tooltip__tip--bottom-right.sc-bds-tooltip::before,.tooltip__tip--bottom-left.sc-bds-tooltip::before{bottom:100%;border-bottom-color:#0a0f1a}.tooltip__tip--bottom-right.sc-bds-tooltip{left:initial;right:0}.tooltip__tip--bottom-right.sc-bds-tooltip::before{left:calc(85% - 6px)}.tooltip__tip--bottom-left.sc-bds-tooltip{left:0}.tooltip__tip--bottom-left.sc-bds-tooltip::before{left:calc(15% + 6px)}.tooltip__tip--left-center.sc-bds-tooltip,.tooltip__tip--left-top.sc-bds-tooltip,.tooltip__tip--left-bottom.sc-bds-tooltip{left:auto;right:calc(100% + 10px);top:50%}.tooltip__tip--left-center.sc-bds-tooltip::before,.tooltip__tip--left-top.sc-bds-tooltip::before,.tooltip__tip--left-bottom.sc-bds-tooltip::before{left:auto;right:-12px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:#0a0f1a}.tooltip__tip--left-top.sc-bds-tooltip{top:0}.tooltip__tip--left-top.sc-bds-tooltip::before{top:40%}.tooltip__tip--left-bottom.sc-bds-tooltip{top:initial;bottom:0}.tooltip__tip--left-bottom.sc-bds-tooltip::before{top:60%}';export{i as bds_tooltip}