import { h, Host, getAssetPath, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpToggle {
    constructor() {
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
    static get is() { return "tp-toggle"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["toggle.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toggle.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpColor",
                    "resolved": "\"orange\" | \"orange-1\" | \"orange-2\" | \"orange-3\" | \"orange-4\" | \"orange-5\" | TpColors | TpColorsMedgrupo | (string & Record<never, never>)",
                    "references": {
                        "TpColor": {
                            "location": "import",
                            "path": "../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "color",
                "reflect": true
            },
            "collapsed": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "collapsed",
                "reflect": true,
                "defaultValue": "true"
            },
            "iconClick": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "icon-click",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "collapsed",
                "methodName": "toggle"
            }];
    }
}
//# sourceMappingURL=toggle.js.map
