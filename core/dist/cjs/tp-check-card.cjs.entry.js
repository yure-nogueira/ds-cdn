'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const checkCardCss = ".sc-tp-check-card-h{--tp-background:var(--tp-color-neutral-2);display:flex;align-items:center;max-width:366px;border-radius:8px;justify-content:space-between;border:1px solid transparent;background:var(--tp-background)}.sc-tp-check-card-h [slot=tooltip].sc-tp-check-card{padding:12px 12px 12px 0}.tp-check-card__title.sc-tp-check-card{margin-right:16px}.tp-check-card__title-wrap.sc-tp-check-card{display:flex;margin-top:4px}.tp-check-card__base.sc-tp-check-card{--background:transparent;display:flex;align-items:center}.tp-check-card__base.sc-tp-check-card [slot=start].sc-tp-check-card{margin-inline-end:0}.tp-check-card__base.sc-tp-check-card:hover{--background-hover:transparent}.tp-check-card__container.sc-tp-check-card{padding:12px 0 12px 0;display:flex;align-items:center;cursor:pointer;flex:1}.tp-check-card__input-container.sc-tp-check-card{padding:12px 0 12px 16px}.tp-check-card__text-container.sc-tp-check-card{padding:0 18px;flex:1;display:flex;flex-wrap:wrap;flex-direction:column}.tp-check-card__info-container.sc-tp-check-card{display:flex;align-items:center;flex-wrap:wrap}.tp-check-card__icon.sc-tp-check-card{color:var(--tp-color-neutral-8);width:16px;height:16px}.tp-check-card__container-fix.sc-tp-check-card{display:flex;align-items:center}.tp-check-card__subtitulo.sc-tp-check-card{color:var(--tp-color-neutral-8);margin:0 8px}.tp-check-card__hora.sc-tp-check-card{color:var(--tp-color-neutral-8)}.tp-check-card__data.sc-tp-check-card{color:var(--tp-color-neutral-8)}.tp-check-card__data-hora.sc-tp-check-card{margin-top:8px;color:var(--tp-color-neutral-8)}.tp-check-card__tooltip-container.sc-tp-check-card{display:none}.tp-check-card__tooltip-container.sc-tp-check-card-s>tp-tooltip ion-button,.tp-check-card__tooltip-container .sc-tp-check-card-s>tp-tooltip ion-button{color:var(--tp-color-warning)}.tp-check-card--alert.sc-tp-check-card-h{border:1px solid var(--tp-color-warning)}.tp-check-card--alert.sc-tp-check-card-h .tp-check-card__tooltip-container.sc-tp-check-card{display:block;padding:12px 16px 12px 0}.tp-color.sc-tp-check-card-h{--tp-background:var(--tp-color-base)}.sc-tp-check-card-h.tp-color.sc-tp-check-card-s>ion-checkbox,.sc-tp-check-card-h.tp-color .sc-tp-check-card-s>ion-checkbox{--border-color:var(--tp-color-contrast);--border-color-checked:var(--tp-color-contrast);--checkbox-background-checked:var(--tp-color-contrast);--checkmark-color:var(--tp-color-base)}.sc-tp-check-card-h.tp-color.sc-tp-check-card-s>ion-checkbox,.sc-tp-check-card-h.tp-color.sc-tp-check-card-s>ion-checkbox:hover,.sc-tp-check-card-h.tp-color .sc-tp-check-card-s>ion-checkbox:hover{--border-color-checked:var(--tp-color-contrast);--checkbox-background-checked:var(--tp-color-contrast)}.tp-color.sc-tp-check-card-h .tp-check-card__title.sc-tp-check-card{color:var(--tp-color-contrast)}.tp-color.sc-tp-check-card-h .tp-check-card__icon.sc-tp-check-card{color:var(--tp-color-contrast)}.tp-color.sc-tp-check-card-h .tp-check-card__subtitulo.sc-tp-check-card{color:var(--tp-color-contrast)}.tp-color.sc-tp-check-card-h .tp-check-card__hora.sc-tp-check-card{color:var(--tp-color-contrast)}.tp-color.sc-tp-check-card-h .tp-check-card__data.sc-tp-check-card{color:var(--tp-color-contrast)}.tp-color.sc-tp-check-card-h .tp-check-card__data-hora.sc-tp-check-card{color:var(--tp-color-contrast)}";
const TpCheckCardStyle0 = checkCardCss;

const TpCheckCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tpClick = index.createEvent(this, "tpClick", 7);
        this.tpTooltipClose = index.createEvent(this, "tpTooltipClose", 7);
        this.color = undefined;
        this.alert = false;
        this.titulo = undefined;
        this.categoria = undefined;
        this.horaInicial = undefined;
        this.horaFinal = undefined;
        this.dataInicial = undefined;
        this.dataFinal = undefined;
        this.finalizada = undefined;
        this.iconName = undefined;
    }
    onClick() {
        this.tpClick.emit();
    }
    onTooltipCloseClick() {
        this.tpTooltipClose.emit();
    }
    render() {
        const { color, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal, iconName, } = this;
        return (index.h(index.Host, { key: '38ae66a2a6248af80babac6fbd50bcfba512b9c6', "from-stencil": true, class: color_function.createColorClasses(color, {
                'tp-check-card': true,
                'tp-check-card--alert': alert,
            }) }, index.h("ion-item", { key: 'c0a9573d9d9f14355a517abf41daccad39eec8f9', "tp-spacingx": "s00", "tp-spacingy": "s00", class: "tp-check-card__base" }, index.h("div", { key: 'e00c1146b6b10908b5e4b38250a7810758d3f9e7', slot: "start", class: "tp-check-card__input-container" }, index.h("slot", { key: '4f4d668ec265261895f089868c639195f3029513', name: "input" })), index.h("div", { key: '70e4f317528d472087ae2d7443a293cddb21b438', class: "tp-check-card__container", onClick: () => this.onClick() }, index.h("div", { key: '39544ad519580f422131cb181753f536567162c1', class: "tp-check-card__text-container" }, index.h("ion-text", { key: 'f7978fe34524057477fcbb89fd261c6afefa2a34', class: "tp-check-card__title", "tp-type": "p16xb" }, index.h("h1", { key: 'ea7017be7e72ff1af46e815d1303b9aa8fbf5a29' }, titulo)), index.h("div", { key: '30415f5431685b0518a974aa02296efae81b5bf2', class: "tp-check-card__title-wrap" }, index.h("div", { key: '60943454928fb0542aacb7b009bcdd6be12a8fe1', class: "tp-check-card__info-container" }, index.h("div", { key: 'e2d5edad61e58ff857985c30e40f65b33c7b6285', class: "tp-check-card__container-fix" }, index.h("ion-icon", { key: '56101a4e8e07cf1b0295948bd496fd8eb11c75f5', class: "tp-check-card__icon", src: iconName }), index.h("ion-text", { key: 'bd736e5f6af3f2e5c023d6298f938755dbb89c09', class: "tp-check-card__subtitulo", "tp-type": "p12xb" }, index.h("span", { key: '552c96e463bc02ce798382cabaf1a34ab1a27052' }, categoria))), !dataInicial && !dataFinal && horaInicial && horaFinal && (index.h("ion-text", { key: '707ab00e6d43165cafa2e8a1a4de56eea87a3905', class: "tp-check-card__hora", "tp-type": "p12x" }, index.h("span", { key: 'c0ceb46912d16897918bc150ab5cf961d4bc0740' }, horaInicial, " \u2013 ", horaFinal))), dataInicial && dataFinal && !horaInicial && !horaFinal && (index.h("ion-text", { key: '05798a448cd1bfe55af3bccd80c47405b3d1c9c2', class: "tp-check-card__data", "tp-type": "p12x" }, index.h("span", { key: '5a97d8242b254f3ca8331b92effe5d407ca04309' }, dataInicial, " at\u00E9 ", dataFinal))))), dataInicial && dataFinal && horaInicial && horaFinal && (index.h("ion-text", { key: '0c43652aec5622b973e034d166da694ed2708c01', class: "tp-check-card__data-hora", "tp-type": "p12x" }, index.h("span", { key: '71123a83893f2a891ed0f6a78a9eb0f028a7d4fc' }, dataInicial, " - ", horaInicial, " at\u00E9 ", dataFinal, " - ", horaFinal)))))), index.h("div", { key: '6c3ecf52b2c08b22bc6e498c5c2a35be5e216775', class: "tp-check-card__tooltip-container" }, index.h("slot", { key: '88aa85abfb6edad578d2ee78db0cfa766ae3f262', name: "tooltip" }))));
    }
};
TpCheckCard.style = TpCheckCardStyle0;

exports.tp_check_card = TpCheckCard;

//# sourceMappingURL=tp-check-card.cjs.entry.js.map