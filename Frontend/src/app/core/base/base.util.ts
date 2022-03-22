import { BasicSearchKey } from './base.search.model';

export class BaseUtil {

    public static getApiObj(searchModel: any): Object {
        let basicSearchKey: BasicSearchKey;
        const apiObj: any = {};
        const keys = Object.keys(searchModel);
        keys.forEach((key: string) => {
            if (typeof searchModel[key] === 'object') {
                basicSearchKey = searchModel[key];
                const apiValue = basicSearchKey.value;
                if (apiValue === null || apiValue === undefined) {
                    apiObj[basicSearchKey.apiKey] = '';
                } else {
                    apiObj[basicSearchKey.apiKey] = apiValue;
                }
            }
        });
        return apiObj;
    }

}