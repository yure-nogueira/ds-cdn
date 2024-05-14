import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const toggleCss = ".sc-tp-toggle-h{--tp-background:var(--tp-color-neutral-2);--tp-color:var(--tp-color-neutral-10);--tp-padding:24px;--tp-border-radius:0;--tp-initial-max-height:20px}.sc-tp-toggle-h{background:var(--tp-background);color:var(--tp-color);padding:var(--tp-padding);border-radius:var(--tp-border-radius);width:100%;display:flex;flex-direction:column;justify-content:center;cursor:pointer}.sc-tp-toggle-h .tp-toggle__content.sc-tp-toggle{max-height:var(--tp-initial-max-height);overflow:hidden;transition:all 0.3s}.sc-tp-toggle-h .tp-toggle__bottom.sc-tp-toggle{display:flex;align-items:center;justify-content:center;width:100%}.sc-tp-toggle-h .tp-toggle__icon.sc-tp-toggle{align-self:center;margin-top:8px;font-size:24px;color:var(--tp-color);transition:0.3s transform ease}.tp-toggle--collapsed.sc-tp-toggle-h .tp-toggle__icon.sc-tp-toggle{transform:rotate(180deg)}.tp-toggle--icon-click.sc-tp-toggle-h{cursor:unset}.tp-toggle--icon-click.sc-tp-toggle-h .tp-toggle__bottom.sc-tp-toggle{cursor:pointer}.tp-color.sc-tp-toggle-h{--tp-color:var(--tp-color-contrast);--tp-background:var(--tp-color-base)}";
const TpToggleStyle0 = toggleCss;

const TpToggle$1 = /*@__PURE__*/ proxyCustomElement(class TpToggle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.iconUp = getAssetPath('./assets/tp-chevron-up.svg');
        this.color = undefined;
        this.collapsed = true;
        this.iconClick = false;
    }
    componentDidLoad() {
        this.element = this.host.querySelector('.tp-toggle__content');
    }
    setHeight() {
        var _a;
        const elementHeight = (_a = this.element) === null || _a === void 0 ? void 0 : _a.scrollHeight;
        this.element.style.maxHeight = `${elementHeight}px`;
    }
    open() {
        this.setHeight();
        setTimeout(() => {
            this.element.style.maxHeight = '100%';
        }, 300);
    }
    close() {
        this.setHeight();
        setTimeout(() => {
            this.element.style.maxHeight =
                'var(--tp-initial-max-height)';
        }, 350);
    }
    toggle() {
        if (!this.collapsed) {
            this.open();
        }
        else {
            this.close();
        }
    }
    onClickComponent() {
        if (!this.iconClick) {
            this.collapsed = !this.collapsed;
        }
    }
    onClickIcon() {
        if (this.iconClick) {
            this.collapsed = !this.collapsed;
        }
    }
    render() {
        const { collapsed, color, iconClick, iconUp } = this;
        return (h(Host, { key: '8a522bf8100b4fe493d7675a5abef750730d39c1', class: createColorClasses(color, {
                'tp-toggle': true,
                'tp-toggle--collapsed': collapsed,
                'tp-toggle--icon-click': iconClick,
            }), onClick: () => {
                this.onClickComponent();
            } }, h("div", { key: 'b997c4d90ecde791d7281056191b23e34c39e9ca', class: "tp-toggle__content" }, h("slot", { key: '5e4dcc77bab3d81fb4181b689cd37c3b57c318d9' })), h("div", { key: 'a8721d6b46647d75d145a04fa6869b44fb1c0b93', class: "tp-toggle__bottom", onClick: () => {
                this.onClickIcon();
            } }, h("ion-icon", { key: '32f22c06d502abe35ae04d7cd562ff56e04acffb', class: "tp-toggle__icon", src: iconUp }))));
    }
    static get assetsDirs() { return ["assets"]; }
    get host() { return this; }
    static get watchers() { return {
        "collapsed": ["toggle"]
    }; }
    static get style() { return TpToggleStyle0; }
}, [6, "tp-toggle", {
        "color": [513],
        "collapsed": [1540],
        "iconClick": [1540, "icon-click"]
    }, undefined, {
        "collapsed": ["toggle"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpToggle$1);
            }
            break;
    } });
}

const TpToggle = TpToggle$1;
const defineCustomElement = defineCustomElement$1;

export { TpToggle, defineCustomElement };

//# sourceMappingURL=tp-toggle.js.map