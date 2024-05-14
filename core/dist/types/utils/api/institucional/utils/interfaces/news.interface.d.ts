export interface GetNewsRespose {
    news: NewsItem[];
    totalPages: number;
}
export interface GetNewsParams {
    page: number;
    perPage: number;
    search?: string;
    category?: string;
}
export interface NewsItem {
    title: string;
    category: string;
    thumb: string;
    titleText: string;
    altText: string;
    permalink: string;
    date: string;
    time: string;
}
