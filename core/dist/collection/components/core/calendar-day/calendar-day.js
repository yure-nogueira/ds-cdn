import { h, Host } from "@stencil/core";
import { TP_CALENDAR_DAY } from "./utils/calendar-day.constant";
export class TpCalendarDay {
    constructor() {
        this.active = false;
        this.checked = false;
        this.disabled = false;
        this.outlined = false;
    }
    render() {
        const { active, checked, outlined, disabled } = this;
        return (h(Host, { key: '616205625c62dc047c90c9cf49862bfb087fbb76', class: {
                'tp-calendar-day': true,
                'tp-calendar-day--active': active,
                'tp-calendar-day--checked': checked,
                'tp-calendar-day--disabled': disabled,
                'tp-calendar-day--outlined': outlined,
            } }, h("div", { key: '3c3cc80be721384a1a8e7cb52d8480f11fdbc8ea', class: "tp-calendar-day__date" }, h("div", { key: 'f54a61381dcc4fde6b146e6de5442ad85312997f', class: "tp-calendar-day__container" }, h("ion-text", { key: 'ab0f7807a43e13a8172ef66012376221e5cba8d6', class: "tp-calendar-day__text" }, h("slot", { key: '2954aab84b1823ef6cd8d3a63276289e2bd1df0e' })), h("ion-icon", { key: '8762e4c3870538b779e561e0c188bdc245e4dedf', class: "tp-calendar-day__checked-icon", src: TP_CALENDAR_DAY.icons.check })))));
    }
    static get is() { return "tp-calendar-day"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["calendar-day.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["calendar-day.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "active": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define se o componente est\u00E1 no estado ativo."
                },
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "checked": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define se o componente est\u00E1 no estado concluido."
                },
                "attribute": "checked",
                "reflect": true,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define se o componente est\u00E1 no estado desativado."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "outlined": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define se o componente est\u00E1 no estado delineado."
                },
                "attribute": "outlined",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=calendar-day.js.map
