import { OrderedParams } from './utils/interfaces/requests.interface';
import { ProductCategoryWithUrl } from './utils/interfaces/product.interface';
export declare class ApiProduct {
    static getFeaturedProducts(): Promise<{
        products: import("../../types/utils.type").TransformKeys<import("./utils/interfaces/product.interface").RawProduct>[];
        totalPages: number;
    }>;
    static getOrderedProducts(params?: OrderedParams): Promise<{
        products: import("../../types/utils.type").TransformKeys<import("./utils/interfaces/product.interface").RawProduct>[];
        totalPages: number;
    }>;
    static getSearchedProducts(searchTerm: string, optionalParams?: any): Promise<{
        products: import("../../types/utils.type").TransformKeys<import("./utils/interfaces/product.interface").RawProduct>[];
        totalPages: number;
    }>;
    static getProductById(id: number): Promise<import("../../types/utils.type").TransformKeys<import("./utils/interfaces/product.interface").RawProduct>>;
    static getCategories(): Promise<ProductCategoryWithUrl[]>;
}
