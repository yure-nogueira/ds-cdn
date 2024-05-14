import { r as registerInstance, c as createEvent, h, H as Host } from './index-e49e9bf4.js';

const themesCss = ".sc-tp-themes-h{--tp-background-left:var(--tp-color-brand-1);--tp-background-right:var(--tp-color-neutral-1);--tp-background-circle:var(--tp-color-brand-3);--tp-border-color:var(--tp-color-brand-4);--tp-color-text:var(--tp-color-neutral-10);cursor:pointer}.sc-tp-themes-h ion-radio-group.sc-tp-themes{width:100%}.tp-theme.sc-tp-themes{display:flex}.tp-theme.sc-tp-themes:not(:last-child){margin-bottom:16px}.tp-theme.sc-tp-themes .tp-theme__left.sc-tp-themes{padding:16px 8px;width:54px;display:flex;align-items:center;justify-content:center;background:var(--tp-background-left);border:2px solid var(--tp-border-color);border-top-left-radius:8px;border-bottom-left-radius:8px}.tp-theme.sc-tp-themes .tp-theme__circle.sc-tp-themes{display:block;width:32px;height:32px;border-radius:50%;background:var(--tp-background-circle)}.tp-theme.sc-tp-themes .tp-theme__right.sc-tp-themes{display:flex;width:100%;flex-direction:column;padding:16px;background:var(--tp-background-right);border-top-right-radius:8px;border-bottom-right-radius:8px;border-top:2px solid var(--tp-border-color);border-right:2px solid var(--tp-border-color);border-bottom:2px solid var(--tp-border-color)}.tp-theme.sc-tp-themes .tp-theme__bar.sc-tp-themes{display:block;width:100%;height:8px;border-radius:4px;background:var(--tp-color-neutral-6);margin:4px 0}.tp-theme.sc-tp-themes .tp-theme__bar--small.sc-tp-themes{width:80%}.tp-theme.sc-tp-themes .tp-theme__wrapper.sc-tp-themes{margin-top:8px;display:flex;align-items:center}.tp-theme.sc-tp-themes .tp-theme__name.sc-tp-themes{font-size:16px;line-height:100%;font-weight:400;margin-left:16px;color:var(--tp-color-text)}";
const TpThemesStyle0 = themesCss;

const TpThemes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tpChange = createEvent(this, "tpChange", 7);
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
};
TpThemes.style = TpThemesStyle0;

export { TpThemes as tp_themes };

//# sourceMappingURL=tp-themes.entry.js.map