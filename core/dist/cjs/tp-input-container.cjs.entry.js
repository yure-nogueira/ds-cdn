'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');
const color_function = require('./color.function-2f28fd83.js');

const inputContainerCss = ":host{position:relative;display:block}:host ::slotted(ion-icon){color:var(--tp-color-neutral-6) !important}.tp-input-container__wrapper{display:flex;align-items:center;margin:8px 0;background:var(--tp-color-neutral-2);border:1px solid var(--tp-color-neutral-2);border-radius:8px}.tp-input-container__wrapper:hover{background:var(--tp-color-neutral-3);border-color:var(--tp-color-neutral-3)}.tp-input-container__wrapper:focus-within{border-color:var(--tp-color-neutral-3)}.tp-input-container__icon-container{display:flex}.tp-input-container__state-container{height:24px;margin-right:16px}.tp-input-container__select-container{display:flex}.tp-input-container__select-icon{margin-right:8px;transition:transform ease-in-out 300ms}.tp-input-container__select-icon--open{transform:rotate(-180deg)}.tp-input-container__skeleton{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:8px;width:100%;height:42px;margin:0}::slotted(*[slot=feedback-error]){display:none;color:var(--tp-color-warning) !important}::slotted(*[slot=feedback-success]){display:none;color:var(--tp-color-success) !important}::slotted(ion-icon){--stroke:var(--tp-color-neutral-6) !important;min-width:24px !important;margin-right:16px}::slotted(ion-icon[slot=start]){margin-left:16px}:host(.tp-input-container--error) .tp-input-container__wrapper{border-color:var(--tp-color-warning)}:host(.tp-input-container--error) ion-select{max-width:calc(100% - 80px)}:host(.tp-input-container--error) ::slotted(*[slot=feedback-error]){display:block}:host(.tp-input-container--error) .tp-input-container__icon{color:var(--tp-color-warning)}:host(.tp-input-container--success) .tp-input-container__wrapper{border-color:var(--tp-color-success)}:host(.tp-input-container--success) ::slotted(*[slot=feedback-success]){display:block}:host(.tp-input-container--success) .tp-input-container__icon{color:var(--tp-color-success)}:host(.tp-input-container--disabled) .tp-input-container__wrapper{opacity:0.5;pointer-events:none}:host(.tp-input-container--disabled) .tp-input-container__wrapper:hover{background:var(--tp-color-neutral-2);border:1px solid var(--tp-color-neutral-2)}:host(.tp-input-container.tp-input-container--select-open) .tp-input-container__wrapper{border-radius:8px 8px 0 0 !important;transition:border-radius 400ms ease-in-out;pointer-events:none}:host(.tp-input-container.tp-input-container--inverted)::slotted(ion-icon){transform:rotate(-180deg)}:host(.tp-input-container.tp-input-container--inverted.tp-input-container--select-open):not(.tp-input-container--disabled){border-radius:0 0 8px 8px !important}:host(.tp-input-container.tp-input-container--with-select):not(.tp-input-container--disabled){cursor:pointer}:host(.tp-input-container.tp-input-container--with-select):not(.tp-input-container--disabled)::slotted(ion-icon){transition:transform 400ms linear}:host(.tp-input-container.tp-input-container--with-select.tp-input-container--select-open):not(.tp-input-container--disabled)::slotted(ion-icon){transform:rotate(-180deg)}:host(.tp-input-container.tp-input-container--with-select.tp-input-container--select-open.tp-input-container--inverted):not(.tp-input-container--disabled)::slotted(ion-icon){transform:rotate(0deg)}:host(.tp-color) .tp-input-container__wrapper{background:var(--tp-color-base);border-color:var(--tp-color-base)}:host(.tp-color) .tp-input-container__wrapper:hover{background:var(--tp-color-shade);border-color:var(--tp-color-shade)}:host(.tp-color) .tp-input-container__wrapper:focus-within{border-color:var(--tp-color-tint)}:host(.tp-color) ::slotted(ion-input.sc-ion-input-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-input[clear-input]){--tp-fill-clear-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-searchbar.sc-ion-searchbar-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important;--tp-stroke-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-textarea.sc-ion-textarea-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-datetime-button){--tp-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-icon){--ion-color-base:var(--tp-color-contrast) !important;--stroke:var(--ion-color-base) !important;color:var(--tp-color-contrast) !important}";

const TpInputContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.alertTriangleIcon = index.getAssetPath('./assets/tp-alert-triangle.svg');
        this.CheckIcon = index.getAssetPath('./assets/tp-check.svg');
        this.selectIcon = index.getAssetPath('./assets/tp-chevron-down.svg');
        this.clickTarget = undefined;
        this.selectOpen = false;
        this.hasSelect = false;
        this.color = undefined;
        this.state = undefined;
        this.disabled = false;
        this.inverted = false;
        this.loading = undefined;
    }
    setClickTarget(e) {
        if (this.disabled)
            return;
        this.clickTarget = e.target;
    }
    catchSelectIconClick(e) {
        const target = e.target;
        const ionSelect = this.host.querySelector('ion-select');
        if (!ionSelect)
            return;
        const shouldOpenOverlay = this.host.contains(target) &&
            ionSelect.hasAttribute('interface') &&
            (target.nodeName === 'ION-ICON' ||
                target.nodeName === 'TP-INPUT-CONTAINER');
        if (shouldOpenOverlay) {
            ionSelect.open(e);
        }
    }
    setPopoverWidthOnResize() {
        if (!this.selectOpen)
            return;
        const popoverElement = document.querySelector('.select-popover');
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--width', `${this.host.clientWidth}px`);
        this.setPopoverPosition();
    }
    setPopoverCharacteristics() {
        if (!this.host.contains(this.clickTarget))
            return;
        this.selectOpen = true;
        this.hostWidth = this.host.clientWidth;
        const popoverElement = document.querySelector('.select-popover');
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--width', `${this.hostWidth}px`);
        if (popoverElement.classList.contains('popover-bottom')) {
            this.inverted = true;
        }
        this.setPopoverPosition();
    }
    unsetClikedState() {
        this.selectOpen = false;
    }
    componentDidLoad() {
        const ionSelect = this.host.querySelector('ION-SELECT');
        if (ionSelect) {
            this.hasSelect = true;
            if (!ionSelect.hasAttribute('interface')) {
                ionSelect.interfaceOptions = { cssClass: 'tp-hide' };
            }
        }
    }
    setPopoverPosition() {
        const popoverElement = document.querySelector('.select-popover');
        const selectElement = this.host.querySelector('ion-select');
        const { top, bottom, left } = selectElement.getBoundingClientRect();
        const fixPositionX = 1;
        if (this.inverted) {
            popoverElement.classList.add('tp-popover--inverted');
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-x', `${Math.round(left) - fixPositionX}px`);
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-y', `${Math.round(window.innerHeight - top)}px`);
        }
        else {
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-x', `${Math.round(left) - fixPositionX}px`);
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-y', `${Math.round(bottom)}px`);
        }
    }
    render() {
        const { color, state, disabled, alertTriangleIcon, CheckIcon, hasSelect, selectIcon, selectOpen, loading, } = this;
        let content;
        let stateContent;
        let selectIconContainer;
        const icon = state === 'error' ? alertTriangleIcon : CheckIcon;
        if (loading) {
            content = (index.h("ion-skeleton-text", { class: "tp-input-container__skeleton", animated: true }));
        }
        else {
            if (this.hasSelect) {
                selectIconContainer = (index.h("div", { class: "tp-input-container__select-container" }, index.h("ion-icon", { class: {
                        'tp-input-container__select-icon': true,
                        'tp-input-container__select-icon--open': selectOpen,
                    }, src: selectIcon, "aria-hidden": "true" })));
            }
            if (state) {
                stateContent = (index.h("div", { class: "tp-input-container__state-container" }, index.h("ion-icon", { class: "tp-input-container__icon", src: icon, "aria-hidden": "true" })));
            }
            content = (index.h("div", null, index.h("slot", { name: "label" }), index.h("div", { class: "tp-input-container__wrapper" }, index.h("slot", { name: "start" }), index.h("slot", null), index.h("slot", { name: "end" }), selectIconContainer, stateContent), index.h("slot", { name: "feedback-success" }), index.h("slot", { name: "feedback-error" })));
        }
        return (index.h(index.Host, { class: color_function.createColorClasses(color, {
                'tp-input-container': true,
                'tp-input-container--error': state === 'error',
                'tp-input-container--success': state === 'success',
                'tp-input-container--disabled': disabled,
                'tp-input-container--with-select': hasSelect,
                'tp-input-container--select-open': selectOpen,
            }) }, content));
    }
    static get assetsDirs() { return ["assets"]; }
    get host() { return index.getElement(this); }
};
TpInputContainer.style = inputContainerCss;

exports.tp_input_container = TpInputContainer;

//# sourceMappingURL=tp-input-container.cjs.entry.js.map