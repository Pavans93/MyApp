import { environment } from '../../../../environments/environment';

export class GlobalConstants {

    public static APP_SERVER_URL = environment.SERVER_URL;

    public static API_BASE_URL = GlobalConstants.APP_SERVER_URL + '/api/';

    public static REGISTER_URL = GlobalConstants.API_BASE_URL + 'user/register';

}