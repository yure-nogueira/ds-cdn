import { h, Host } from "@stencil/core";
export class TpThemes {
    constructor() {
        this.ativo = undefined;
        this.temas = undefined;
    }
    temaSelecionado(temaAtivo) {
        this.ativo = temaAtivo;
        this.tpChange.emit(this.ativo);
    }
    render() {
        const { temas } = this;
        return (h(Host, { key: '2885ad1ef2ea2b85e191b3d3841306c632bef2c6', "from-stencil": true }, h("ion-radio-group", { key: '297464b91e161ce6b27c537082d32eb9c5e89731', onIonChange: (ev) => this.temaSelecionado(ev.detail.value), value: this.ativo }, temas === null || temas === void 0 ? void 0 : temas.map((tema) => (h("div", { class: `tp-theme tp-theme--${tema.value}`, onClick: () => (this.ativo = tema.value) }, h("div", { class: "tp-theme__left" }, h("div", { class: "tp-theme__circle" })), h("div", { class: "tp-theme__right" }, h("div", { class: "tp-theme__bar" }), h("div", { class: "tp-theme__bar tp-theme__bar--small" }), h("div", { class: "tp-theme__wrapper" }, h("ion-radio", { value: tema.value, class: "tp-theme__radio" }), h("span", { class: "tp-theme__name" }, tema.label)))))))));
    }
    static get is() { return "tp-themes"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["themes.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["themes.css"]
        };
    }
    static get properties() {
        return {
            "ativo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'theme-gold' | 'theme-recursos' | string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "ativo",
                "reflect": true
            },
            "temas": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TpTema[]",
                    "resolved": "TpTema[]",
                    "references": {
                        "TpTema": {
                            "location": "import",
                            "path": "./utils/themes.interface",
                            "id": "src/components/core/tp-themes/utils/themes.interface.ts::TpTema"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                }
            }
        };
    }
    static get events() {
        return [{
                "method": "tpChange",
                "name": "tpChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=themes.js.map
