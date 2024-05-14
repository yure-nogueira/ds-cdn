import { r as registerInstance, h, H as Host } from './index-e49e9bf4.js';

const cartaoRespostaListaCss = ":host{position:relative;padding:0px;width:100%;max-width:1200px;margin:0px auto}:host .tp-cartao-resposta-lista__container{display:grid;justify-content:center;grid-template-columns:repeat(auto-fit, 10vw)}@media (max-width: 1199.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 10vw)}}@media (max-width: 991.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 13vw)}}@media (max-width: 767.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 14vw)}}@media (max-width: 575.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 17vw)}}@media (max-width: 379.98px){:host .tp-cartao-resposta-lista__container{grid-template-columns:repeat(auto-fit, 19vw)}}:host .tp-cartao-resposta-lista__container--flex{display:flex;flex-wrap:wrap}";
const TpCartaoRespostaListaStyle0 = cartaoRespostaListaCss;

const TpCartaoRespostaLista = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.flex = false;
    }
    render() {
        const { flex } = this;
        return (h(Host, { key: 'a726235a7242dca2c14991d54bd147414f0ca647', class: "tp-cartao-resposta-lista" }, h("div", { key: 'e18883271b70f14c6d9e40c0a648bd7ebf3f510b', class: {
                'tp-cartao-resposta-lista__container': true,
                'tp-cartao-resposta-lista__container--flex': flex,
            } }, h("slot", { key: 'b3f439ed8d9984e1ab58ebaaa08334dbc5a60d8d' }))));
    }
};
TpCartaoRespostaLista.style = TpCartaoRespostaListaStyle0;

export { TpCartaoRespostaLista as tp_cartao_resposta_lista };

//# sourceMappingURL=tp-cartao-resposta-lista.entry.js.map