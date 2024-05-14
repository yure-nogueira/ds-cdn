import{r as t,c as i,h as e,H as n}from"./p-5c36ed66.js";import{c as o}from"./p-9655f2f1.js";var s;(function(t){t["GOTO"]="goto";t["HIDDEN"]="hidden";t["PREVIOUS"]="previous";t["NEXT"]="next"})(s||(s={}));var r;(function(t){t["XS"]="xs";t["SM"]="sm"})(r||(r={}));var a;(function(t){t["FORWARD"]="forward";t["BACKWARD"]="backward"})(a||(a={}));const c={ROLE:Object.fromEntries(Object.entries(s)),DIRECTION:Object.fromEntries(Object.entries(a)),SIZES:Object.values(r),BUTTON_LIMIT:5,HIDDEN_BUTTON_LABEL:"...",DEFAULT_COLOR:"neutral-2",DEFAULT_SIZE:"xs"};const l=".sc-tp-pagination-h{display:flex;width:100%;justify-content:center}.tp-pagination__item.sc-tp-pagination{--border-radius:4px;--padding-start:16px;--padding-end:16px}.tp-pagination__item.sc-tp-pagination:not(:first-child){margin-left:0.8rem}";const d=l;const p=class{constructor(e){t(this,e);this.tpNavigate=i(this,"tpNavigate",7);this.tpPrevious=i(this,"tpPrevious",7);this.tpNext=i(this,"tpNext",7);this.tpPageJump=i(this,"tpPageJump",7);this.color=c.DEFAULT_COLOR;this.size=c.DEFAULT_SIZE;this.pageCount=undefined;this.currentPage=undefined}onPaginationButtonClick(t){const{label:i,role:e,direction:n}=t;if(e===c.ROLE.GOTO)return this.tpNavigate.emit(+i);if(e===c.ROLE.HIDDEN)return this.tpPageJump.emit(n);if(e===c.ROLE.PREVIOUS)return this.tpPrevious.emit();if(e===c.ROLE.NEXT)return this.tpNext.emit()}getPaginationButtons(){const{color:t,size:i,pageCount:n,currentPage:o}=this;return Array.from({length:n}).map(((t,i)=>{const e=i+1;if(n<=c.BUTTON_LIMIT){return{label:e,role:c.ROLE.GOTO,direction:null}}if([1,n].includes(o)&&Math.abs(e-o)<=2){return{label:e,role:c.ROLE.GOTO,direction:null}}if(e>1&&e<o-1){return{label:c.HIDDEN_BUTTON_LABEL,role:e-1===1?c.ROLE.HIDDEN:null,direction:c.DIRECTION.BACKWARD}}if(e<n&&e>o+1){return{label:c.HIDDEN_BUTTON_LABEL,role:e===n-1?c.ROLE.HIDDEN:null,direction:c.DIRECTION.FORWARD}}return{label:e,role:c.ROLE.GOTO,direction:null}})).filter((({role:t})=>t)).map((n=>e("ion-button",{onClick:()=>this.onPaginationButtonClick(n),class:"tp-pagination__item",color:t,size:i,disabled:+n.label===o},n.label)))}render(){const{color:t,size:i,pageCount:s,currentPage:r}=this;const a=this.getPaginationButtons();return e(n,{key:"8e2660c99e821310f1c118a28778b35d51fa261d",class:o(t,{["tp-pagination"]:true})},s>1&&e("ion-button",{key:"012ab35a89606f1eb37fa40d4a96b546192024c3",onClick:()=>this.onPaginationButtonClick({role:c.ROLE.PREVIOUS}),class:"tp-pagination__item",color:t,size:i,fill:"clear",disabled:r===1},e("ion-icon",{key:"0bf80fdee98ed4c9c52791db3918a629b23e48ed",slot:"start",src:"./assets/tp-chevron-left.svg"})),a,s>1&&e("ion-button",{key:"44a38f656c3c7ffd430f74251379083b42808afc",onClick:()=>this.onPaginationButtonClick({role:c.ROLE.NEXT}),class:"tp-pagination__item",color:t,size:i,fill:"clear",disabled:r===s},e("ion-icon",{key:"3a38b5d913a91e441896a022b4e79d6db89de21c",slot:"start",src:"./assets/tp-chevron-right.svg"})))}};p.style=d;export{p as tp_pagination};
//# sourceMappingURL=p-dab22835.entry.js.map