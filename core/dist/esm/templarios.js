import { p as promiseResolve, b as bootstrapLazy } from './index-7946b89c.js';
export { s as setNonce } from './index-7946b89c.js';

/*
 Stencil Client Patch Browser v4.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["dialog-example",[[2,"dialog-example"]]],["modal-example",[[2,"modal-example"]]],["sheet-example",[[2,"sheet-example"]]],["tp-alert",[[1,"tp-alert",{"color":[513],"loading":[1540]}]]],["tp-button-cluster",[[1,"tp-button-cluster",{"color":[513],"collapsed":[1540],"loading":[1540],"toggleExternal":[64]}]]],["tp-chart-bar",[[1,"tp-chart-bar",{"color":[513],"value":[514],"height":[514],"width":[514],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-chart-radial",[[1,"tp-chart-radial",{"color":[513],"size":[513],"items":[16]},null,{"items":["updateTrackColors"]}]]],["tp-comparison-chart-bar",[[1,"tp-comparison-chart-bar",{"color":[513],"containerHeight":[514,"container-height"],"barValue":[514,"bar-value"],"hasMarker":[516,"has-marker"],"markerValue":[514,"marker-value"],"disabled":[516],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-example",[[2,"tp-example",{"color":[513],"icon":[513],"defaultIcon":[32]}]]],["tp-horizontal-chart-bar",[[1,"tp-horizontal-chart-bar",{"color":[513],"size":[513],"value":[514],"maxCount":[514,"max-count"],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-input-container",[[1,"tp-input-container",{"color":[513],"state":[513],"disabled":[516],"inverted":[516],"loading":[1540],"clickTarget":[32],"selectOpen":[32],"hasSelect":[32]},[[16,"click","setClickTarget"],[0,"click","catchSelectIconClick"],[9,"resize","setPopoverWidthOnResize"],[16,"ionPopoverWillPresent","setPopoverCharacteristics"],[16,"ionPopoverWillDismiss","unsetClikedState"]]]]],["tp-loader",[[1,"tp-loader",{"color":[513],"fixed":[516],"tpName":[513,"tp-name"]}]]],["tp-rate-like",[[1,"tp-rate-like",{"status":[1537],"loading":[1540]}]]],["tp-segment-container",[[1,"tp-segment-container",null,[[9,"resize","onWindowReize"]]]]],["tp-tooltip",[[6,"tp-tooltip",{"color":[513],"hover":[4],"placement":[513],"position":[513],"collapsed":[1540],"loading":[1540],"toggle":[64],"toggleOnHover":[64]}]]]], options);
});

//# sourceMappingURL=templarios.js.map