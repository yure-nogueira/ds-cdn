import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, APP_INITIALIZER, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '../../core/loader';

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

let DialogExample = class DialogExample {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogExample, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DialogExample, selector: "dialog-example", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
DialogExample = __decorate([
    ProxyCmp({})
], DialogExample);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'dialog-example',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let ModalExample = class ModalExample {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ModalExample, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ModalExample, selector: "modal-example", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
ModalExample = __decorate([
    ProxyCmp({})
], ModalExample);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ModalExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'modal-example',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let SheetExample = class SheetExample {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SheetExample, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SheetExample, selector: "sheet-example", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
SheetExample = __decorate([
    ProxyCmp({})
], SheetExample);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SheetExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'sheet-example',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpAlert = class TpAlert {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpAlert, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpAlert, selector: "tp-alert", inputs: { color: "color", loading: "loading" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpAlert = __decorate([
    ProxyCmp({
        inputs: ['color', 'loading']
    })
], TpAlert);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpAlert, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-alert',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'loading'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpButtonCluster = class TpButtonCluster {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['tpButtonClusterCollapsed']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpButtonCluster, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpButtonCluster, selector: "tp-button-cluster", inputs: { collapsed: "collapsed", color: "color", loading: "loading" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpButtonCluster = __decorate([
    ProxyCmp({
        inputs: ['collapsed', 'color', 'loading'],
        methods: ['toggleExternal']
    })
], TpButtonCluster);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpButtonCluster, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-button-cluster',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapsed', 'color', 'loading'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpChartBar = class TpChartBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpChartBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpChartBar, selector: "tp-chart-bar", inputs: { color: "color", height: "height", loading: "loading", noLabel: "noLabel", value: "value", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpChartBar = __decorate([
    ProxyCmp({
        inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width']
    })
], TpChartBar);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpChartBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-chart-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpChartRadial = class TpChartRadial {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpChartRadial, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpChartRadial, selector: "tp-chart-radial", inputs: { color: "color", items: "items", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpChartRadial = __decorate([
    ProxyCmp({
        inputs: ['color', 'items', 'size']
    })
], TpChartRadial);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpChartRadial, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-chart-radial',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'items', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpComparisonChartBar = class TpComparisonChartBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpComparisonChartBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpComparisonChartBar, selector: "tp-comparison-chart-bar", inputs: { barValue: "barValue", color: "color", containerHeight: "containerHeight", disabled: "disabled", hasMarker: "hasMarker", loading: "loading", markerValue: "markerValue", noLabel: "noLabel" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpComparisonChartBar = __decorate([
    ProxyCmp({
        inputs: ['barValue', 'color', 'containerHeight', 'disabled', 'hasMarker', 'loading', 'markerValue', 'noLabel']
    })
], TpComparisonChartBar);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpComparisonChartBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-comparison-chart-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['barValue', 'color', 'containerHeight', 'disabled', 'hasMarker', 'loading', 'markerValue', 'noLabel'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpExample = class TpExample {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpExample, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpExample, selector: "tp-example", inputs: { color: "color", icon: "icon" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpExample = __decorate([
    ProxyCmp({
        inputs: ['color', 'icon']
    })
], TpExample);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-example',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'icon'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpHorizontalChartBar = class TpHorizontalChartBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpHorizontalChartBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpHorizontalChartBar, selector: "tp-horizontal-chart-bar", inputs: { color: "color", loading: "loading", maxCount: "maxCount", noLabel: "noLabel", size: "size", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpHorizontalChartBar = __decorate([
    ProxyCmp({
        inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value']
    })
], TpHorizontalChartBar);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpHorizontalChartBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-horizontal-chart-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpInputContainer = class TpInputContainer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpInputContainer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpInputContainer, selector: "tp-input-container", inputs: { color: "color", disabled: "disabled", inverted: "inverted", loading: "loading", state: "state" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpInputContainer = __decorate([
    ProxyCmp({
        inputs: ['color', 'disabled', 'inverted', 'loading', 'state']
    })
], TpInputContainer);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpInputContainer, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-input-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'disabled', 'inverted', 'loading', 'state'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpLoader = class TpLoader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpLoader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpLoader, selector: "tp-loader", inputs: { color: "color", fixed: "fixed", tpName: "tpName" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpLoader = __decorate([
    ProxyCmp({
        inputs: ['color', 'fixed', 'tpName']
    })
], TpLoader);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpLoader, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-loader',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'fixed', 'tpName'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpRateLike = class TpRateLike {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['tpChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpRateLike, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpRateLike, selector: "tp-rate-like", inputs: { loading: "loading", status: "status" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpRateLike = __decorate([
    ProxyCmp({
        inputs: ['loading', 'status']
    })
], TpRateLike);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpRateLike, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-rate-like',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['loading', 'status'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpSegmentContainer = class TpSegmentContainer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpSegmentContainer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpSegmentContainer, selector: "tp-segment-container", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpSegmentContainer = __decorate([
    ProxyCmp({})
], TpSegmentContainer);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpSegmentContainer, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-segment-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TpTooltip = class TpTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpTooltip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TpTooltip, selector: "tp-tooltip", inputs: { collapsed: "collapsed", color: "color", hover: "hover", loading: "loading", placement: "placement", position: "position" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
TpTooltip = __decorate([
    ProxyCmp({
        inputs: ['collapsed', 'color', 'hover', 'loading', 'placement', 'position'],
        methods: ['toggle', 'toggleOnHover']
    })
], TpTooltip);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TpTooltip, decorators: [{
            type: Component,
            args: [{
                    selector: 'tp-tooltip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapsed', 'color', 'hover', 'loading', 'placement', 'position'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });

const DIRECTIVES = [
    DialogExample,
    ModalExample,
    SheetExample,
    TpAlert,
    TpButtonCluster,
    TpChartBar,
    TpChartRadial,
    TpComparisonChartBar,
    TpExample,
    TpHorizontalChartBar,
    TpInputContainer,
    TpLoader,
    TpRateLike,
    TpSegmentContainer,
    TpTooltip
];

class TemplariosModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplariosModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TemplariosModule, declarations: [DialogExample, ModalExample, SheetExample, TpAlert, TpButtonCluster, TpChartBar, TpChartRadial, TpComparisonChartBar, TpExample, TpHorizontalChartBar, TpInputContainer, TpLoader, TpRateLike, TpSegmentContainer, TpTooltip], exports: [DialogExample, ModalExample, SheetExample, TpAlert, TpButtonCluster, TpChartBar, TpChartRadial, TpComparisonChartBar, TpExample, TpHorizontalChartBar, TpInputContainer, TpLoader, TpRateLike, TpSegmentContainer, TpTooltip] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplariosModule, providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: () => defineCustomElements,
                multi: true,
            },
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplariosModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...DIRECTIVES],
                    imports: [],
                    exports: [...DIRECTIVES],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: () => defineCustomElements,
                            multi: true,
                        },
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DIRECTIVES, DialogExample, ModalExample, SheetExample, TemplariosModule, TpAlert, TpButtonCluster, TpChartBar, TpChartRadial, TpComparisonChartBar, TpExample, TpHorizontalChartBar, TpInputContainer, TpLoader, TpRateLike, TpSegmentContainer, TpTooltip };
//# sourceMappingURL=templarios-angular.mjs.map
