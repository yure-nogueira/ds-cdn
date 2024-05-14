import { TransformKeys } from '../../../../types/utils.type';
export type Product = TransformKeys<RawProduct>;
export type RawProduct = {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    type: 'simple' | 'group' | 'external' | 'variable';
    status: 'draft' | 'pending' | 'private' | 'publish';
    featured: boolean;
    catalog_visibility: 'visible' | 'catalog' | 'search' | 'hidden';
    description: string;
    short_description: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: string;
    date_on_sale_from_gmt: string;
    date_on_sale_to: string;
    date_on_sale_to_gmt: string;
    price_html: string;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: any[];
    download_limit: number;
    download_expiry: number;
    external_url: string;
    button_text: string;
    tax_status: 'taxable' | 'shipping' | 'none';
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number;
    low_stock_amount: number;
    stock_status: 'instock' | 'outofstock' | 'onbackorder';
    backorders: 'no' | 'notify' | 'yes';
    backorders_allowed: boolean;
    backordered: boolean;
    sold_individually: boolean;
    weight: string;
    dimensions: ProductDimesions;
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    average_rating: string;
    rating_count: number;
    related_ids: number[];
    upsell_ids: number[];
    cross_sell_ids: number[];
    parent_id: number;
    purchase_note: string;
    categories: ProductCategory[];
    tags: ProductTag[];
    images: ProductImage[];
    attributes: ProductAttribute[];
    default_attributes: ProductDefaultAttribute[];
    variations: number[];
    grouped_products: number[];
    menu_order: number;
    meta_data: ProductMetaData[];
};
interface ProductDimesions {
    length: string;
    width: string;
    height: string;
}
export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
}
interface ProductTag {
    id: number;
    name: string;
    slug: string;
}
type ProductImage = TransformKeys<{
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
}>;
interface ProductAttribute {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
}
interface ProductDefaultAttribute {
    id: number;
    name: string;
    option: string;
}
interface ProductMetaData {
    id: number;
    key: string;
    value: string;
}
export interface ProductCategoryWithUrl extends ProductCategory {
    url: string;
}
export {};
