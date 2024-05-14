import camelcaseKeys from "camelcase-keys";
import { API_NEWS_ACTIONS } from "./utils/constants/requests.constant";
export class ApiNews {
    static async getNews(extraParams) {
        const rawResponse = await fetch(`${process.env.AJAX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(Object.assign(Object.assign({ action: API_NEWS_ACTIONS.getNews }, extraParams))),
        });
        const response = await rawResponse.json();
        const { data: rawData } = response;
        const data = camelcaseKeys(rawData, { deep: true });
        return data;
    }
}
//# sourceMappingURL=news.api.js.map
