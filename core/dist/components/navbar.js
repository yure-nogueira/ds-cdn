import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const navbarCss = ":host{--tp-background:var(--tp-color-neutral-1);--tp-main-color:color(\"neutral\", \"1\", \"contrast\");--tp-subtitle-color:var(--tp-color-brand-4);--tp-height:48px}:host(.tp-navbar){display:block}:host(.tp-navbar) .tp-navbar__header{background:var(--tp-background)}:host(.tp-navbar) .tp-navbar__container{padding-left:16px;padding-right:16px;padding-bottom:0;position:relative;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;min-height:var(--tp-height)}:host(.tp-navbar) .tp-navbar__left,:host(.tp-navbar) .tp-navbar__right{display:flex;align-items:center}:host(.tp-navbar) .tp-navbar__left{justify-content:flex-start}:host(.tp-navbar) .tp-navbar__right{justify-content:flex-end}:host(.tp-navbar) .tp-navbar__center{padding-left:var(--padding-left);padding-right:var(--padding-right);display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;width:100%}:host(.tp-navbar) ::slotted(*){margin:0 !important;padding:0 !important}:host(.tp-navbar) ::slotted([slot=left]){color:var(--tp-main-color);margin-right:16px !important;display:flex;align-items:center;justify-content:flex-start}:host(.tp-navbar) ::slotted([slot=title]){color:var(--tp-main-color);font-size:16px;font-weight:600;line-height:16px;display:block}:host(.tp-navbar) ::slotted([slot=subtitle]){color:var(--tp-subtitle-color);font-size:12px;font-weight:400;line-height:16px;display:block}:host(.tp-navbar) ::slotted([slot=right]){color:var(--tp-main-color);margin-left:16px !important;display:flex;align-items:center;justify-content:flex-end}:host(.tp-color) ::slotted([slot=subtitle]){--tp-subtitle-color:var(--tp-color-base)}:host(.tp-navbar--transparent){--tp-background:transparent}";
const TpNavbarStyle0 = navbarCss;

const TpNavbar = /*@__PURE__*/ proxyCustomElement(class TpNavbar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
        this.name = undefined;
    }
    componentDidLoad() {
        this.setSize();
    }
    disconnectedCallback() {
        if (this.sidesResizeObserver) {
            this.sidesResizeObserver.disconnect();
        }
    }
    setSize() {
        this.sidesResizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const rightWidth = Number(this.rightEl.getBoundingClientRect().width);
                const leftWidth = Number(this.leftEl.getBoundingClientRect().width);
                const leftDiff = entry.contentRect.width - rightWidth;
                const rightDiff = entry.contentRect.width - leftWidth;
                let marginLeft = 0;
                let marginRight = 0;
                if (rightWidth !== leftWidth) {
                    if (entry.target.id === 'left') {
                        if (leftDiff > 0) {
                            marginRight = leftDiff;
                        }
                        else {
                            marginLeft = rightDiff - leftDiff;
                            if (marginLeft < 0) {
                                marginLeft *= -1;
                            }
                        }
                    }
                    else if (entry.target.id === 'right') {
                        if (rightDiff > 0) {
                            marginLeft = rightDiff;
                        }
                        else {
                            marginRight = rightDiff - leftDiff;
                            if (marginRight < 0) {
                                marginRight *= -1;
                            }
                        }
                    }
                }
                this.centerEl.style.setProperty('--padding-left', `${marginLeft}px`);
                this.centerEl.style.setProperty('--padding-right', `${marginRight}px`);
            }
        });
        this.sidesResizeObserver.observe(this.leftEl);
        this.sidesResizeObserver.observe(this.rightEl);
    }
    render() {
        const { color, name } = this;
        return (h(Host, { key: 'bb19521b13d8ff7a96f5b2f90241f1613fd5b245', "from-stencil": true, class: createColorClasses(color, {
                'tp-navbar': true,
                [`tp-navbar--${name}`]: name !== undefined,
            }) }, h("header", { key: 'ca5177a2a395d7b1b419e67b6487e245d0cc8d63', class: "tp-navbar__header" }, h("slot", { key: '7712389526fe42854bb13d69571a4bee925c5aed', name: "top" }), h("div", { key: 'e5f4d6b652448e5d4813511f8deee64443b4fa24', class: "tp-navbar__container" }, h("div", { key: 'f051fc4679301a31f2dc142f6136eaf44d279eb4', id: "left", class: "tp-navbar__left", ref: (el) => (this.leftEl = el) }, h("slot", { key: '838c62dacaba5de56a4a255ba67e8b73a1cbc927', name: "left" })), h("div", { key: 'de0fb77bf12422650a44b0903b2224f026af7a08', class: "tp-navbar__center", ref: (el) => (this.centerEl = el) }, h("slot", { key: '5cd49c6b8f95aef3f17cb390bdfb15553b023df6', name: "title" }), h("slot", { key: 'a45d67852cc2ee132147eec2ff4200442efcae6f', name: "subtitle" })), h("div", { key: '577230017b7ea4913dd02064f4cbccfc39829709', id: "right", class: "tp-navbar__right", ref: (el) => (this.rightEl = el) }, h("slot", { key: 'cadd37ae6983b9932c0a741941bb77ee915aa10f', name: "right" }))))));
    }
    get el() { return this; }
    static get style() { return TpNavbarStyle0; }
}, [1, "tp-navbar", {
        "color": [513],
        "name": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-navbar"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-navbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpNavbar);
            }
            break;
    } });
}

export { TpNavbar as T, defineCustomElement as d };

//# sourceMappingURL=navbar.js.map