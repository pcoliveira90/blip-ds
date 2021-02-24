import{r as e,h as t,g as s}from"./p-ba441ad3.js";const i=class{constructor(t){e(this,t)}connectedCallback(){this.childOptions.forEach(((e,t)=>{e.index=t,t===this.childOptions.length-1&&(e.last=!0)}))}componentDidLoad(){this.renderLine()}async setActiveStep(e){this.resetActiveSteps(),this.childOptions[e].active=!0}async setCompletedStep(e){this.childOptions[e].completed=!0}async getActiveStep(){return this.childOptions.find((e=>!0===e.active)).index}async resetActiveSteps(){for(const e of this.childOptions)e.active=!1}async resetCompletedSteps(){for(const e of this.childOptions)e.completed=!1}get childOptions(){return Array.from(this.el.querySelectorAll("bds-step"))}renderLine(){const e=document.createElement("div");e.classList.add("stepper__container__divisor"),Array.from(this.childOptions).forEach(((t,s)=>{this.childOptions.length-1!=s&&t.insertAdjacentHTML("afterend",e.outerHTML)}))}render(){return t("div",{class:"stepper__container"},t("slot",null))}get el(){return s(this)}};i.style=".stepper__container{width:100%;background:#ffffff;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-webkit-box-shadow:0px 2px 8px rgba(7, 71, 166, 0.15);box-shadow:0px 2px 8px rgba(7, 71, 166, 0.15);-ms-flex-pack:justify;justify-content:space-between}.stepper__container ::slotted(bds-step:last-child){-ms-flex:inherit;flex:inherit}.stepper__container__divisor{-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:#d2dfe6;margin:0px 8px;min-width:24px}.stepper__container__divisor--completed{border-top:2px solid #3f7de8}@media (max-width: 780px){.stepper__container__divisor{display:none}}";export{i as bds_stepper}