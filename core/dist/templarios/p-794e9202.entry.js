import{r as t,h as o,H as r}from"./p-5c36ed66.js";import{A as e}from"./p-228049e3.js";import{A as s,c}from"./p-e5dad5d1.js";import"./p-e5cf9adb.js";const l=".related-products.sc-tp-elem-related-products{display:flex;overflow-x:auto;gap:16px;padding-bottom:16px;--tp-scroll-color-content:var(--tp-color-neutral-3);--tp-scroll-color-track:var(--tp-color-neutral-1);--tp-scroll-width:8px;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}.related-products.sc-tp-elem-related-products::-webkit-scrollbar{width:var(--tp-scroll-width);height:8px}@media (max-width: 576px){.related-products.sc-tp-elem-related-products::-webkit-scrollbar{width:0}}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-track{background:var(--tp-scroll-color-track)}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-thumb{color:transparent;background:var(--tp-scroll-color-content)}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-thumb{background-clip:content-box;border:2px solid transparent;border-radius:16px;box-shadow:inset 0 0 0 10px}.related-products.sc-tp-elem-related-products::-webkit-scrollbar-button{display:none;width:0;height:0}.related-products__item.sc-tp-elem-related-products{min-width:295px}";const a=l;const n=class{constructor(o){t(this,o);this.productId=undefined;this.cart=[];this.loadingProducts=undefined;this.products=undefined}async componentWillLoad(){this.getRelatedProducts();this.getCurrentCart()}async getRelatedProducts(){this.loadingProducts=true;const{relatedIds:t}=await s.getProductById(this.productId);const o=[];t.forEach((t=>{const r=s.getProductById(t);o.push(r)}));const r=await Promise.all(o);this.products=r;this.loadingProducts=false}async getCurrentCart(){try{const{cart:t}=await e.getCart();this.cart=t}catch(t){console.log("Não foi possível ter acesso ao carrinho.")}}async onAddToCart(t){try{const{success:o,cart:r}=await e.addToCart(t,1);if(o)this.cart=r}catch(t){console.log("Não foi possível adicionar item ao carrinho.")}}async onRemoveFromCart(t){try{const{success:o,cart:r}=await e.removeFromCart(t);if(o)this.cart=r}catch(t){console.log("Não foi possível remover o item do carrinho.")}}render(){const{cart:t,loadingProducts:e,products:s}=this;let l;if(e){l=o("ion-text",{color:"neutral-8"},o("p",null,"Carregando..."))}else{l=s&&s.length>0?s.map((r=>{const{permalink:e,id:s,name:l,regularPrice:a,price:n,stockQuantity:d,manageStock:i,stockStatus:p}=r;const u=t.some((t=>t.id===s));const h=i&&d>=1||!i&&p==="instock";return o("tp-elem-product-item",{class:"related-products__item",product:r},o("ion-text",{slot:"title","tp-type":"p18xb",color:"neutral-10"},o("h3",null,o("a",{href:e},l))),o("ion-text",{slot:"regular-price",color:"neutral-6","tp-type":"p14"},o("p",null,c(a,"pt-br"))),o("ion-text",{slot:"price",color:"neutral-8"},o("p",null,c(n,"pt-br"))),h&&!u&&o("ion-button",{slot:"button",color:"neutral-2",expand:"block",onClick:()=>this.onAddToCart(s)},"Adicionar ao Carrinho"),h&&u&&o("ion-button",{slot:"button",color:"warning",expand:"block",onClick:()=>this.onRemoveFromCart(s)},"Remover do Carrinho"))})):o("ion-text",{color:"neutral-8"},o("p",null,"Não há produtos relacionados."))}return o(r,null,o("div",{class:"related-products"},l))}};n.style=a;export{n as tp_elem_related_products};
//# sourceMappingURL=p-794e9202.entry.js.map