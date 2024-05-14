import { Host, h } from "@stencil/core";
export class TpCartaoRespostaLista {
    constructor() {
        this.flex = false;
    }
    render() {
        const { flex } = this;
        return (h(Host, { key: 'a726235a7242dca2c14991d54bd147414f0ca647', class: "tp-cartao-resposta-lista" }, h("div", { key: 'e18883271b70f14c6d9e40c0a648bd7ebf3f510b', class: {
                'tp-cartao-resposta-lista__container': true,
                'tp-cartao-resposta-lista__container--flex': flex,
            } }, h("slot", { key: 'b3f439ed8d9984e1ab58ebaaa08334dbc5a60d8d' }))));
    }
    static get is() { return "tp-cartao-resposta-lista"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["cartao-resposta-lista.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["cartao-resposta-lista.css"]
        };
    }
    static get properties() {
        return {
            "flex": {
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
                    "text": "Altera o layout do componente de grid para flex."
                },
                "attribute": "flex",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=cartao-resposta-lista.js.map
