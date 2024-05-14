'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const tilesCss = ":host{--tp-padding:16px;--tp-background:var(--tp-color-neutral-2);--tp-border-radius:8px;--tp-border-background:var(--tp-color-neutral-5);--tp-border-background-selected:var(--tp-color-brand-3);--tp-font-size-title:24px;--tp-color-title:var(--tp-color-neutral-10);--tp-font-size-label:12px;--tp-color-label:var(--tp-color-neutral-10);--tp-text-transform:uppercase}:host(.tp-tiles){display:flex;background:var(--tp-background);border-radius:var(--tp-border-radius)}:host(.tp-tiles) .tp-tiles__content{padding:var(--tp-padding);display:flex;flex-direction:column;text-align:left;width:100%}:host(.tp-tiles) .tp-tiles__border{border-top-left-radius:var(--tp-border-radius);border-bottom-left-radius:var(--tp-border-radius);width:8px;min-height:100%;background:var(--tp-border-background)}:host(.tp-tiles) .tp-tiles__title{font-size:var(--tp-font-size-title);font-weight:600;line-height:24px;color:var(--tp-color-title);padding-bottom:4px}:host(.tp-tiles) .tp-tiles__label{font-size:var(--tp-font-size-label);font-weight:400;line-height:12px;color:var(--tp-color-label);padding-bottom:16px;text-transform:var(--tp-text-transform)}::slotted(*){margin-left:auto}:host(.tp-tiles--selected) .tp-tiles__border{background:var(--tp-border-background-selected)}:host(.tp-color){--tp-border-background-selected:var(--tp-color-base)}";
const TpTilesStyle0 = tilesCss;

const TpTiles = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.titulo = undefined;
        this.label = undefined;
        this.solid = false;
        this.selected = false;
    }
    render() {
        const { color, titulo, label, selected, solid } = this;
        return (index.h(index.Host, { key: 'be8fd62b7396b6ba717770a659597ef9cbac882d', class: color_function.createColorClasses(color, {
                'tp-tiles': true,
                'tp-tiles--solid': solid,
                'tp-tiles--selected': selected,
            }) }, index.h("div", { key: '4bd7b27f31eee8c42f681ac4920f1787c7c1498c', class: "tp-tiles__border" }), index.h("div", { key: '22af9cbb49cc5d917a10c73426d3718259783d78', class: "tp-tiles__content" }, index.h("ion-text", { key: '48021d962b71fdf6da532c3778320ebea931c83c', class: "tp-tiles__title", innerHTML: titulo }), index.h("ion-text", { key: '3a306c426766aea259ea10ba1ed7619656a7c30f', class: "tp-tiles__label", innerHTML: label }), index.h("slot", { key: '491e904848c63480f2287a4491c64a9df636d444' }))));
    }
};
TpTiles.style = TpTilesStyle0;

exports.tp_tiles = TpTiles;

//# sourceMappingURL=tp-tiles.cjs.entry.js.map