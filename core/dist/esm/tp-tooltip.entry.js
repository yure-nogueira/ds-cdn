import { r as registerInstance, h, H as Host } from './index-7946b89c.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const tooltipCss = ".sc-tp-tooltip-h{--background:var(--tp-color-neutral-3);--arrow-distance:12px;--arrow-size:9px;--arrow-size-2:12px;--tp-skeleton-width:285px;--tp-skeleton-height:144px}.sc-tp-tooltip-h{position:relative;display:inline-block}.sc-tp-tooltip-h .tp-tooltip__content.sc-tp-tooltip{position:absolute;top:calc(100% + var(--arrow-distance));left:-20px;z-index:1;width:100%;min-width:285px;max-width:285px;padding:16px;background:var(--background);border-radius:8px;visibility:visible;opacity:1;transition:opacity 300ms ease-in-out}.sc-tp-tooltip-h .tp-tooltip__trigger-container.sc-tp-tooltip{position:relative;cursor:pointer}.sc-tp-tooltip-h .tp-tooltip__trigger-container.sc-tp-tooltip::after{position:absolute;top:100%;left:13px;clear:both;width:0;height:0;border-right:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size-2) solid var(--background);border-left:var(--arrow-size) solid transparent;transform:translateX(-50%);visibility:visible;opacity:1;transition:opacity 300ms ease-in-out;content:\"\"}.sc-tp-tooltip-h .tp-tooltip__content-skeleton.sc-tp-tooltip{position:absolute;top:calc(100% + var(--arrow-distance));left:-20px;z-index:1;width:100%;min-width:var(--tp-skeleton-width);max-width:var(--tp-skeleton-width);height:var(--tp-skeleton-height);visibility:visible;opacity:1;transition:opacity 300ms ease-in-out}.sc-tp-tooltip-h .tp-tooltip__skeleton.sc-tp-tooltip{--border-radius:8px;height:100%}.tp-tooltip--loading.sc-tp-tooltip-h{--background:var(--tp-color-neutral-15)}.tp-tooltip--loading.sc-tp-tooltip-h .tp-tooltip__content.sc-tp-tooltip{visibility:hidden;opacity:0}.tp-color.sc-tp-tooltip-h{--background:var(--tp-color-base)}.sc-tp-tooltip-h.tp-color.sc-tp-tooltip-s>*:not(ion-button),.sc-tp-tooltip-h.tp-color .sc-tp-tooltip-s>*:not(ion-button){color:var(--tp-color-contrast)}.sc-tp-tooltip-h.tp-color.sc-tp-tooltip-s>ion-button:hover,.sc-tp-tooltip-h.tp-color .sc-tp-tooltip-s>ion-button:hover{color:var(--tp-color-base)}.tp-tooltip--collapsed.sc-tp-tooltip-h .tp-tooltip__content.sc-tp-tooltip,.tp-tooltip--collapsed.sc-tp-tooltip-h .tp-tooltip__trigger-container.sc-tp-tooltip::after,.tp-tooltip--collapsed.sc-tp-tooltip-h .tp-tooltip__content-skeleton.sc-tp-tooltip{visibility:hidden;opacity:0;transition:opacity 300ms ease-in-out}.tp-tooltip--bottom.sc-tp-tooltip-h .tp-tooltip__trigger-container.sc-tp-tooltip::after{border-right:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size-2) solid var(--background);border-left:var(--arrow-size) solid transparent}.tp-tooltip--bottom.sc-tp-tooltip-h .tp-tooltip__content.sc-tp-tooltip,.tp-tooltip--bottom.sc-tp-tooltip-h .tp-tooltip__conten-skeleton.sc-tp-tooltip{top:calc(100% + var(--arrow-distance))}.tp-tooltip--top.sc-tp-tooltip-h .tp-tooltip__trigger-container.sc-tp-tooltip::after{top:auto;bottom:100%;border-top:var(--arrow-size-2) solid var(--background);border-right:var(--arrow-size) solid transparent;border-bottom:0;border-left:var(--arrow-size) solid transparent}.tp-tooltip--top.sc-tp-tooltip-h .tp-tooltip__content.sc-tp-tooltip,.tp-tooltip--top.sc-tp-tooltip-h .tp-tooltip__content-skeleton.sc-tp-tooltip{top:auto;bottom:calc(100% + var(--arrow-distance))}.tp-tooltip--left.sc-tp-tooltip-h .tp-tooltip__trigger-container.sc-tp-tooltip::after{top:50%;right:100%;left:auto;border-top:var(--arrow-size) solid transparent;border-right:0;border-bottom:var(--arrow-size) solid transparent;border-left:var(--arrow-size-2) solid var(--background);transform:translateY(-50%)}.tp-tooltip--left.sc-tp-tooltip-h .tp-tooltip__content.sc-tp-tooltip,.tp-tooltip--left.sc-tp-tooltip-h .tp-tooltip__content-skeleton.sc-tp-tooltip{top:50%;right:calc(100% + var(--arrow-distance));left:auto;transform:translateY(-50%)}.tp-tooltip--right.sc-tp-tooltip-h .tp-tooltip__trigger-container.sc-tp-tooltip::after{top:50%;right:auto;left:100%;border-top:var(--arrow-size) solid transparent;border-right:var(--arrow-size-2) solid var(--background);border-bottom:var(--arrow-size) solid transparent;border-left:0;transform:translateY(-50%)}.tp-tooltip--right.sc-tp-tooltip-h .tp-tooltip__content.sc-tp-tooltip,.tp-tooltip--right.sc-tp-tooltip-h .tp-tooltip__content-skeleton.sc-tp-tooltip{top:50%;left:calc(100% + var(--arrow-distance));transform:translateY(-50%)}.tp-tooltip--center.sc-tp-tooltip-h:not(.tp-tooltip--right):not(.tp-tooltip--left) .tp-tooltip__content.sc-tp-tooltip,.tp-tooltip--center.sc-tp-tooltip-h:not(.tp-tooltip--right):not(.tp-tooltip--left) .tp-tooltip__content-skeleton.sc-tp-tooltip{left:50%;transform:translateX(-50%)}.tp-tooltip--center.sc-tp-tooltip-h:not(.tp-tooltip--right):not(.tp-tooltip--left) .tp-tooltip__trigger-container.sc-tp-tooltip::after{left:50%}.tp-tooltip--end.sc-tp-tooltip-h:not(.tp-tooltip--right):not(.tp-tooltip--left) .tp-tooltip__content.sc-tp-tooltip,.tp-tooltip--end.sc-tp-tooltip-h:not(.tp-tooltip--right):not(.tp-tooltip--left) .tp-tooltip__content-skeleton.sc-tp-tooltip{right:-20px;left:unset}.tp-tooltip--end.sc-tp-tooltip-h:not(.tp-tooltip--right):not(.tp-tooltip--left) .tp-tooltip__trigger-container.sc-tp-tooltip::after{right:-6px;left:unset}@media (max-width: 575.98px){.tp-tooltip--end.sc-tp-tooltip-h:not(.tp-tooltip--right):not(.tp-tooltip--left) .tp-tooltip__trigger-container.sc-tp-tooltip::after{right:-10px}}";

const TpTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
        this.hover = undefined;
        this.placement = undefined;
        this.position = undefined;
        this.collapsed = true;
        this.loading = undefined;
    }
    /**
     * todo
     */
    async toggle(event) {
        if (!this.hover) {
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            this.collapsed = !this.collapsed;
        }
    }
    /**
     * todo
     */
    async toggleOnHover(event) {
        if (this.hover) {
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            this.collapsed = !this.collapsed;
        }
    }
    render() {
        const { color, placement, position, collapsed, loading } = this;
        let skeleton;
        if (loading) {
            skeleton = (h("div", { class: "tp-tooltip__content-skeleton" }, h("ion-skeleton-text", { class: "tp-tooltip__skeleton", animated: true })));
        }
        return (h(Host, { onMouseenter: (event) => {
                this.toggleOnHover(event);
            }, onMouseleave: (event) => {
                this.toggleOnHover(event);
            }, class: createColorClasses(color, {
                'tp-tooltip': true,
                [`tp-tooltip--${placement}`]: placement !== undefined,
                [`tp-tooltip--${position}`]: position !== undefined,
                'tp-tooltip--collapsed': collapsed,
                'tp-tooltip--loading': loading,
            }) }, h("div", { class: "tp-tooltip__trigger-container", onClick: (event) => {
                this.toggle(event);
            } }, h("slot", { name: "trigger" })), h("div", { class: "tp-tooltip__content" }, h("slot", null)), skeleton));
    }
};
TpTooltip.style = tooltipCss;

export { TpTooltip as tp_tooltip };

//# sourceMappingURL=tp-tooltip.entry.js.map