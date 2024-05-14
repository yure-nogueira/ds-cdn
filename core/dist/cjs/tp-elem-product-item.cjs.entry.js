'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');

const productItemCss = ".sc-tp-elem-product-item-h{display:flex}.product-item.sc-tp-elem-product-item{display:flex;flex-direction:column;width:100%;overflow:hidden;background:var(--tp-color-neutral-1);border:1px solid var(--tp-color-neutral-2);border-radius:8px}.product-item__image-container.sc-tp-elem-product-item{position:relative;display:block;width:100%;height:0;padding-top:56.7%;overflow:hidden}.product-item.sc-tp-elem-product-item:hover .product-item__image.sc-tp-elem-product-item{transform:scale(1.2)}.product-item__image.sc-tp-elem-product-item{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;transition:transform 300ms ease-in-out}.product-item__basic-info.sc-tp-elem-product-item{display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:100%;padding:0.8rem 1.2rem}.product-item__prices-container.sc-tp-elem-product-item{display:flex;flex-direction:column;gap:0.8rem;align-items:center;justify-content:center;margin-bottom:1.2rem;text-align:center}.sc-tp-elem-product-item-s>[slot=title]{margin-bottom:1.2rem}.sc-tp-elem-product-item-s>[slot=title] a{text-decoration:none}.sc-tp-elem-product-item-s>[slot=regular-price]{text-decoration:line-through}.sc-tp-elem-product-item-s>[slot=button]{width:100%;--border-radius:8px}";
const TpElemProductItemStyle0 = productItemCss;

const TpElemProductItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.product = undefined;
    }
    render() {
        const { regularPrice, onSale, images, permalink } = this.product;
        return (index.h(index.Host, { key: 'b074d51427370d0d4ecebeed65031542bd5f767e' }, index.h("div", { key: 'd0804f23518451ca25bc3d7122f1c2e523673c99', class: "product-item" }, index.h("a", { key: 'ab17077e870454b85ac69e99b87205c52e1ec68b', href: permalink, class: "product-item__image-container" }, index.h("img", { key: '7dfafe7f51b475cf5e7c27b1d52530520fe715fa', class: "product-item__image", src: images[0].src, alt: images[0].alt })), index.h("div", { key: '24483242fc94899ea6d73177b52ef907154d4594', class: "product-item__basic-info" }, index.h("slot", { key: '7274beec66f44556767614825bde35f03ba13409', name: "title" }), index.h("div", { key: 'c4aff073594f56afef2d91c440205f4b41cb8fa2', class: "product-item__prices-container" }, onSale && regularPrice && index.h("slot", { key: 'f04f7ba93244f68ed755f974914ed14dcde8b0a4', name: "regular-price" }), index.h("slot", { key: '60b65845369c89d8be0657d6c0ab98e01bf8a574', name: "price" })), index.h("slot", { key: '98b5510ba9743f008d54dfb44c048eb2cd4a2484', name: "button" })))));
    }
};
TpElemProductItem.style = TpElemProductItemStyle0;

exports.tp_elem_product_item = TpElemProductItem;

//# sourceMappingURL=tp-elem-product-item.cjs.entry.js.map