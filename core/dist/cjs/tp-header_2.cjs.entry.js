'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const headerCss = ":host{--tp-background:var(--tp-color-neutral-1)}:host{background:var(--tp-background);display:block;padding-top:var(--ion-safe-area-top)}";
const TpHeaderStyle0 = headerCss;

const TpHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerResize = index.createEvent(this, "headerResize", 7);
        this.hostHeight = 0;
    }
    componentDidLoad() {
        this.setSize();
    }
    disconnectedCallback() {
        if (this.hostResizeObserver) {
            this.hostResizeObserver.disconnect();
        }
    }
    setSize() {
        this.hostResizeObserver = new ResizeObserver(() => {
            let newHostHeight = Number(this.el.getBoundingClientRect().height);
            if (newHostHeight !== this.hostHeight) {
                this.headerResize.emit({ height: newHostHeight });
                this.hostHeight = newHostHeight;
            }
        });
        this.hostResizeObserver.observe(this.el);
    }
    render() {
        return (index.h(index.Host, { key: 'f3a46012ab19867b70cf2f902f27cf8edefc147a', "from-stencil": true }, index.h("slot", { key: '2968c7bacf1b8dcdce299be958df729c81a8b27b', name: "navbar" }), index.h("slot", { key: '425c5e28d4141a9d7a38e634a791b2ef05b5e58f', name: "toolbar" }), index.h("slot", { key: '720e7e8e5df4487e63479c42ad49736247657a91', name: "progress" }), index.h("slot", { key: 'ba4097d11173e9c54d3cb8c2c2f853347e46bcc2', name: "auxiliar" })));
    }
    get el() { return index.getElement(this); }
};
TpHeader.style = TpHeaderStyle0;

const navbarCss = ":host{--tp-background:var(--tp-color-neutral-1);--tp-main-color:color(\"neutral\", \"1\", \"contrast\");--tp-subtitle-color:var(--tp-color-brand-4);--tp-height:48px}:host(.tp-navbar){display:block}:host(.tp-navbar) .tp-navbar__header{background:var(--tp-background)}:host(.tp-navbar) .tp-navbar__container{padding-left:16px;padding-right:16px;padding-bottom:0;position:relative;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;min-height:var(--tp-height)}:host(.tp-navbar) .tp-navbar__left,:host(.tp-navbar) .tp-navbar__right{display:flex;align-items:center}:host(.tp-navbar) .tp-navbar__left{justify-content:flex-start}:host(.tp-navbar) .tp-navbar__right{justify-content:flex-end}:host(.tp-navbar) .tp-navbar__center{padding-left:var(--padding-left);padding-right:var(--padding-right);display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;width:100%}:host(.tp-navbar) ::slotted(*){margin:0 !important;padding:0 !important}:host(.tp-navbar) ::slotted([slot=left]){color:var(--tp-main-color);margin-right:16px !important;display:flex;align-items:center;justify-content:flex-start}:host(.tp-navbar) ::slotted([slot=title]){color:var(--tp-main-color);font-size:16px;font-weight:600;line-height:16px;display:block}:host(.tp-navbar) ::slotted([slot=subtitle]){color:var(--tp-subtitle-color);font-size:12px;font-weight:400;line-height:16px;display:block}:host(.tp-navbar) ::slotted([slot=right]){color:var(--tp-main-color);margin-left:16px !important;display:flex;align-items:center;justify-content:flex-end}:host(.tp-color) ::slotted([slot=subtitle]){--tp-subtitle-color:var(--tp-color-base)}:host(.tp-navbar--transparent){--tp-background:transparent}";
const TpNavbarStyle0 = navbarCss;

const TpNavbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'bb19521b13d8ff7a96f5b2f90241f1613fd5b245', "from-stencil": true, class: color_function.createColorClasses(color, {
                'tp-navbar': true,
                [`tp-navbar--${name}`]: name !== undefined,
            }) }, index.h("header", { key: 'ca5177a2a395d7b1b419e67b6487e245d0cc8d63', class: "tp-navbar__header" }, index.h("slot", { key: '7712389526fe42854bb13d69571a4bee925c5aed', name: "top" }), index.h("div", { key: 'e5f4d6b652448e5d4813511f8deee64443b4fa24', class: "tp-navbar__container" }, index.h("div", { key: 'f051fc4679301a31f2dc142f6136eaf44d279eb4', id: "left", class: "tp-navbar__left", ref: (el) => (this.leftEl = el) }, index.h("slot", { key: '838c62dacaba5de56a4a255ba67e8b73a1cbc927', name: "left" })), index.h("div", { key: 'de0fb77bf12422650a44b0903b2224f026af7a08', class: "tp-navbar__center", ref: (el) => (this.centerEl = el) }, index.h("slot", { key: '5cd49c6b8f95aef3f17cb390bdfb15553b023df6', name: "title" }), index.h("slot", { key: 'a45d67852cc2ee132147eec2ff4200442efcae6f', name: "subtitle" })), index.h("div", { key: '577230017b7ea4913dd02064f4cbccfc39829709', id: "right", class: "tp-navbar__right", ref: (el) => (this.rightEl = el) }, index.h("slot", { key: 'cadd37ae6983b9932c0a741941bb77ee915aa10f', name: "right" }))))));
    }
    get el() { return index.getElement(this); }
};
TpNavbar.style = TpNavbarStyle0;

exports.tp_header = TpHeader;
exports.tp_navbar = TpNavbar;

//# sourceMappingURL=tp-header_2.cjs.entry.js.map