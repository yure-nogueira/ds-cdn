import { NewsListModeEnum } from './news-list.enum';
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
export interface NewsListConfig {
    icons: {
        searchX: string;
        plus: string;
        wifiOff: string;
    };
    modeKeys: {
        search: string;
        category: string;
    };
    defaultMode: NewsListMode;
    defaultPerPage: number;
}
export type NewsListMode = `${NewsListModeEnum}`;
