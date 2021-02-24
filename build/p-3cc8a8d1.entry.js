import{r as s,c as i,h as t,g as e}from"./p-ba441ad3.js";const o=class{constructor(t){s(this,t),this.bdsChange=i(this,"bdsChange",7),this.bdsCancel=i(this,"bdsCancel",7),this.bdsFocus=i(this,"bdsFocus",7),this.bdsBlur=i(this,"bdsBlur",7),this.isOpen=!1,this.options=[],this.chips=[],this.newPrefix="",this.value="",this.danger=!1,this.errorMessage="",this.disabled=!1,this.label="",this.icon="",this.duplicated=!1,this.onFocus=()=>{this.bdsFocus.emit()},this.onBlur=()=>{this.bdsBlur.emit()},this.toggle=()=>{this.disabled||(this.isOpen=!this.isOpen)},this.handler=async s=>{const{detail:{value:i}}=s,t=this.getText(i);await this.addChip(t)},this.getText=s=>this.childOptions.find((i=>i.value===s)).textContent,this.handlerNewOption=async s=>{await this.addChip(s)},this.setFocusWrapper=()=>{this.nativeInput&&this.nativeInput.setFocus()},this.removeFocusWrapper=s=>{this.nativeInput&&"bds-input-chips"!==s.relatedTarget.localName&&this.nativeInput.removeFocus()},this.keyPressWrapper=s=>{const i="bds-select"===s.target.localName,t="bds-input-chips"===s.target.localName;switch(s.key){case"Enter":this.nativeInput.add(1===this.childOptionsEnabled.length?this.childOptionsEnabled[0].textContent:this.nativeInput.value),this.nativeInput.value="",this.isOpen||!i&&!t||this.toggle()}},this.changedInputValue=async()=>{this.value=this.nativeInput.value,this.nativeInput.value?await this.filterOptions(this.nativeInput.value):await this.resetFilterOptions(),this.value&&!1===this.isOpen&&(this.isOpen=!0)},this.handleChangeChipsValue=async()=>{this.nativeInput.value="",await this.resetFilterOptions()}}handleWindow(s){this.el.contains(s.target)||(this.isOpen=!1)}async isValid(){return this.nativeInput.isValid()}async connectedCallback(){for(const s of this.childOptions)s.addEventListener("optionSelected",this.handler)}async componentDidLoad(){await this.resetFilterOptions()}get childOptions(){return Array.from(this.el.querySelectorAll("bds-select-option:not(#option-add)"))}get childOptionsEnabled(){return Array.from(this.el.querySelectorAll("bds-select-option:not([invisible]):not(#option-add)"))}enableCreateOption(){return!(0!==this.childOptionsEnabled.length||!this.nativeInput||!this.nativeInput.value)}async addChip(s){await this.nativeInput.add(s),this.nativeInput.value="",this.toggle()}async filterOptions(s){if(s)for(const i of this.childOptions){const t=this.existsChip(i.textContent,await this.nativeInput.get()),e=i.textContent.toLowerCase(),o=s.toLowerCase();t&&i.setAttribute("invisible","invisible"),s&&e.includes(o)&&!t&&i.removeAttribute("invisible"),!s||e.includes(o)||t||i.setAttribute("invisible","invisible")}else await this.resetFilterOptions()}async resetFilterOptions(){for(const s of this.childOptions){const i=s.querySelector("bds-typo").textContent;this.existsChip(i,await this.nativeInput.get())?s.setAttribute("invisible","invisible"):s.removeAttribute("invisible")}}existsChip(s,i){return i.some((i=>s===i))}generateKey(s){return s.toLowerCase().replace(/ /g,"-")}render(){return t("div",{class:"select",tabindex:"0",onFocus:this.setFocusWrapper,onBlur:this.removeFocusWrapper,onKeyPress:this.keyPressWrapper},t("bds-input-chips",{ref:s=>this.nativeInput=s,onBdsChangeChips:this.handleChangeChipsValue,onBdsChange:this.changedInputValue,icon:this.icon,label:this.label,onFocus:this.onFocus,onBlur:this.onBlur,maxlength:this.maxlength,onClick:this.toggle,danger:this.danger,"error-message":this.errorMessage,chips:this.chips,"disable-submit":!0,duplicated:this.duplicated},t("div",{slot:"input-right",class:"select__icon"},t("bds-icon",{size:"small",name:this.isOpen?"arrow-up":"arrow-down",color:"inherit"}))),t("div",{class:{select__options:!0,"select__options--open":this.isOpen}},this.options.map((s=>t("bds-select-option",{key:this.generateKey(s.value),onOptionSelected:this.handler,value:s.value},s.label))),t("slot",null),this.enableCreateOption()&&t("bds-select-option",{id:"option-add",value:"add",onClick:()=>this.handlerNewOption(this.nativeInput.value)},this.newPrefix,this.nativeInput.value)))}get el(){return e(this)}};o.style=".sc-bds-select-chips-h{display:block}.select.sc-bds-select-chips{position:relative;outline:none}.select__icon.sc-bds-select-chips{color:#8ca0b3;display:-ms-flexbox;display:flex}.select__options.sc-bds-select-chips{background:#f8fbfb;width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options.sc-bds-select-chips::-webkit-scrollbar{width:16px;background-color:transparent}.select__options.sc-bds-select-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open.sc-bds-select-chips{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}";export{o as bds_select_chips}