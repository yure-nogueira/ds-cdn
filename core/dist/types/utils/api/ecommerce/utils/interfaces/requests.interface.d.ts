import { Order, Orderby } from '../enums/requests.enum';
export interface OrderedParams {
    orderby?: `${Orderby}`;
    order?: `${Order}`;
    page?: number;
    category?: number;
}
