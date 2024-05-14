import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '../../../core/dist/types';
import * as i0 from "@angular/core";
export declare class DialogExample {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogExample, "dialog-example", never, {}, {}, never, ["*"], false, never>;
}
export declare interface DialogExample extends Components.DialogExample {
}
export declare class ModalExample {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalExample, "modal-example", never, {}, {}, never, ["*"], false, never>;
}
export declare interface ModalExample extends Components.ModalExample {
}
export declare class SheetExample {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<SheetExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SheetExample, "sheet-example", never, {}, {}, never, ["*"], false, never>;
}
export declare interface SheetExample extends Components.SheetExample {
}
export declare class TpAlert {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpAlert, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpAlert, "tp-alert", never, { "color": { "alias": "color"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpAlert extends Components.TpAlert {
}
export declare class TpButtonCluster {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpButtonCluster, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpButtonCluster, "tp-button-cluster", never, { "collapsed": { "alias": "collapsed"; "required": false; }; "color": { "alias": "color"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpButtonCluster extends Components.TpButtonCluster {
    /**
     * Emitido quando a propriedade collapsed é alterada.
     */
    tpButtonClusterCollapsed: EventEmitter<CustomEvent<boolean>>;
}
export declare class TpChartBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpChartBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpChartBar, "tp-chart-bar", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "noLabel": { "alias": "noLabel"; "required": false; }; "value": { "alias": "value"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpChartBar extends Components.TpChartBar {
}
export declare class TpChartRadial {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpChartRadial, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpChartRadial, "tp-chart-radial", never, { "color": { "alias": "color"; "required": false; }; "items": { "alias": "items"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpChartRadial extends Components.TpChartRadial {
}
export declare class TpComparisonChartBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpComparisonChartBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpComparisonChartBar, "tp-comparison-chart-bar", never, { "barValue": { "alias": "barValue"; "required": false; }; "color": { "alias": "color"; "required": false; }; "containerHeight": { "alias": "containerHeight"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hasMarker": { "alias": "hasMarker"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "markerValue": { "alias": "markerValue"; "required": false; }; "noLabel": { "alias": "noLabel"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpComparisonChartBar extends Components.TpComparisonChartBar {
}
export declare class TpExample {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpExample, "tp-example", never, { "color": { "alias": "color"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpExample extends Components.TpExample {
}
export declare class TpHorizontalChartBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpHorizontalChartBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpHorizontalChartBar, "tp-horizontal-chart-bar", never, { "color": { "alias": "color"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "maxCount": { "alias": "maxCount"; "required": false; }; "noLabel": { "alias": "noLabel"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpHorizontalChartBar extends Components.TpHorizontalChartBar {
}
export declare class TpInputContainer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpInputContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpInputContainer, "tp-input-container", never, { "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "inverted": { "alias": "inverted"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "state": { "alias": "state"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpInputContainer extends Components.TpInputContainer {
}
export declare class TpLoader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpLoader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpLoader, "tp-loader", never, { "color": { "alias": "color"; "required": false; }; "fixed": { "alias": "fixed"; "required": false; }; "tpName": { "alias": "tpName"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpLoader extends Components.TpLoader {
}
export declare class TpRateLike {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpRateLike, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpRateLike, "tp-rate-like", never, { "loading": { "alias": "loading"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpRateLike extends Components.TpRateLike {
    /**
     * Emitido quando a propriedade status é alterada.
     */
    tpChange: EventEmitter<CustomEvent<'like' | 'dislike'>>;
}
export declare class TpSegmentContainer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpSegmentContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpSegmentContainer, "tp-segment-container", never, {}, {}, never, ["*"], false, never>;
}
export declare interface TpSegmentContainer extends Components.TpSegmentContainer {
}
export declare class TpTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TpTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TpTooltip, "tp-tooltip", never, { "collapsed": { "alias": "collapsed"; "required": false; }; "color": { "alias": "color"; "required": false; }; "hover": { "alias": "hover"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface TpTooltip extends Components.TpTooltip {
}
