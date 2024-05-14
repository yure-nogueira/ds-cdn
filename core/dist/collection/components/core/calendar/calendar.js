import { h, Host, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TP_CALENDAR } from "./utils/calendar.constant";
import { createGesture } from "./utils/gesture";
export class TpCalendar {
    constructor() {
        this.color = undefined;
        this.label = undefined;
        this.initialTimeframe = TP_CALENDAR.timeframes.week;
        this.timeframe = undefined;
    }
    /**
     * Métodos internos
     */
    onTimeframeToggle() {
        var _a;
        const currentTimeframe = (_a = this.timeframe) !== null && _a !== void 0 ? _a : this.initialTimeframe;
        this.timeframe =
            currentTimeframe === TP_CALENDAR.timeframes.week
                ? TP_CALENDAR.timeframes.month
                : TP_CALENDAR.timeframes.week;
        this.tpTimeframeToggle.emit(this.timeframe);
    }
    onCalendarChange(direction) {
        this.tpCalendarChange.emit(direction);
    }
    setupGesture() {
        let direction;
        const options = {
            el: this.container,
            gestureName: 'swipe',
            onStart: () => { },
            onMove: (event) => {
                if (event.deltaX > 0) {
                    direction = TP_CALENDAR.directions.left;
                }
                else {
                    direction = TP_CALENDAR.directions.right;
                }
            },
            onEnd: () => {
                this.tpCalendarChange.emit(direction);
            },
        };
        this.gesture = createGesture(options);
        this.gesture.enable();
    }
    disconnectGesture() {
        if (this.gesture) {
            this.gesture.destroy();
        }
    }
    /**
     * Lifecycle hooks.
     */
    componentDidLoad() {
        this.setupGesture();
    }
    disconnectedCallback() {
        this.disconnectGesture();
    }
    render() {
        const { color, label, initialTimeframe, timeframe } = this;
        return (h(Host, { key: '5e27be6090e8e459a81d48b0f2d7f6b4aa724197', class: createColorClasses(color, {
                'tp-calendar': true,
            }) }, h("div", { key: 'c711d4777e20cc34b1a31dc8a8d45a1d451a3288', class: "tp-calendar__header" }, h("div", { key: '7f7fafd6a1b16000052b55a81de82568e109b050', class: "tp-calendar__header-left" }, h("ion-button", { key: 'e446f88f7f4f6771c96711dbc49ee0b28077abae',
            // @ts-ignore
            size: "xxs", fill: "clear", onClick: () => this.onCalendarChange(TP_CALENDAR.directions.left) }, h("ion-icon", { key: '81bf9d92dfd63b80c5cf15523a5aa1ef0db0068c', slot: "icon-only", src: TP_CALENDAR.icons.chevronLeft })), h("ion-text", { key: '4f5fa81a002131d28ce36187a2b2a421fb22f42f', class: "tp-calendar__label", "tp-type": "p16b" }, label), h("ion-button", { key: '62e10458116b5c015bb5afc485d18cab71937afb',
            // @ts-ignore
            size: "xxs", fill: "clear", onClick: () => this.onCalendarChange(TP_CALENDAR.directions.right) }, h("ion-icon", { key: '4742e798e86de6606f7a1b89d73b83c6155641ff', slot: "icon-only", src: TP_CALENDAR.icons.chevronRight }))), h("div", { key: 'df057882f35d872d2e8cf298112b16abfa39d4e0', class: "tp-calendar__header-right" }, h("ion-button", { key: '8279e40e9b19f28a1ca151bd09125d050f1c69b3',
            // @ts-ignore
            size: "xxs", fill: "clear", onClick: () => this.onTimeframeToggle() }, timeframe !== null && timeframe !== void 0 ? timeframe : initialTimeframe, h("ion-icon", { key: '773ee8b5e86d099d509c18d6646a6f48570cec9c', class: "tp-calendar__icon", slot: "end", src: TP_CALENDAR.icons.chevronDown })))), h("div", { key: '529dbe6e85492b5057c0afebd42be51bc89071c1', class: "tp-calendar__content" }, h("div", { key: '313d138f8bc1a1506bacfedcc865c79edf77e49f', class: "tp-calendar__content-header" }, TP_CALENDAR.weekdays.map((day) => (h("div", { class: "tp-calendar__week-day" }, h("ion-text", { "tp-type": "p12", color: "neutral-8" }, day))))), h("div", { key: '5db0ec2f22684ec4484633291be6568e1a61cb65', class: "tp-calendar__container", ref: (el) => (this.container = el) }, h("slot", { key: '97aaf4ab173d6f2c7502eafbdb259ee6c89d3dfe' })))));
    }
    static get is() { return "tp-calendar"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["calendar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["calendar.css"]
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a etiqueta do conte\u00FAdo sendo exibido."
                },
                "attribute": "label",
                "reflect": true
            },
            "initialTimeframe": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpCalendarTimeframe",
                    "resolved": "\"M\u00EAs\" | \"Semana\"",
                    "references": {
                        "TpCalendarTimeframe": {
                            "location": "import",
                            "path": "./utils/calendar.type",
                            "id": "src/components/core/calendar/utils/calendar.type.ts::TpCalendarTimeframe"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o valor inicial do intervalo de tempo que representa\r\no conte\u00FAdo sendo exibido."
                },
                "attribute": "initial-timeframe",
                "reflect": true,
                "defaultValue": "TP_CALENDAR.timeframes.week"
            }
        };
    }
    static get states() {
        return {
            "timeframe": {}
        };
    }
    static get events() {
        return [{
                "method": "tpCalendarChange",
                "name": "tpCalendarChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento emitido quando o conte\u00FAdo deve avan\u00E7ar ou retroceder\r\npor requisi\u00E7\u00E3o do usu\u00E1rio"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "tpTimeframeToggle",
                "name": "tpTimeframeToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento emitido quando o intervalo de tempo exibido deve mudar\r\npor requisi\u00E7\u00E3o do usu\u00E1rio"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=calendar.js.map
