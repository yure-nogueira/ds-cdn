import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cartaoRespostaListaCss = ":host{position:relative;padding:0px;width:100%;max-width:1200px;margin:0px auto}:host .tp-cartao-resposta-lista__container{display:grid;justify-content:center;grid-template-columns:repeat(auto-fit, 10vw)}@media (max-width: 1199.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 10vw)}}@media (max-width: 991.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 13vw)}}@media (max-width: 767.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 14vw)}}@media (max-width: 575.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 17vw)}}@media (max-width: 379.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 19vw)}}:host .tp-cartao-resposta-lista__container--flex{display:flex;flex-wrap:wrap}";
const TpCartaoRespostaListaStyle0 = cartaoRespostaListaCss;

const TpCartaoRespostaLista$1 = /*@__PURE__*/ proxyCustomElement(class TpCartaoRespostaLista extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.flex = false;
    }
    render() {
        const { flex } = this;
        return (h(Host, { key: 'a726235a7242dca2c14991d54bd147414f0ca647', class: "tp-cartao-resposta-lista" }, h("div", { key: 'e18883271b70f14c6d9e40c0a648bd7ebf3f510b', class: {
                'tp-cartao-resposta-lista__container': true,
                'tp-cartao-resposta-lista__container--flex': flex,
            } }, h("slot", { key: 'b3f439ed8d9984e1ab58ebaaa08334dbc5a60d8d' }))));
    }
    static get style() { return TpCartaoRespostaListaStyle0; }
}, [1, "tp-cartao-resposta-lista", {
        "flex": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-cartao-resposta-lista"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-cartao-resposta-lista":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpCartaoRespostaLista$1);
            }
            break;
    } });
}

const TpCartaoRespostaLista = TpCartaoRespostaLista$1;
const defineCustomElement = defineCustomElement$1;

export { TpCartaoRespostaLista, defineCustomElement };

//# sourceMappingURL=tp-cartao-resposta-lista.js.map