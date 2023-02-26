import {HTTP} from 'utils/http'
import config from 'utils/config'

class IndexModel extends HTTP {
    getHomeDatas (cityId) {
        return new Promise((resolve, reject) => {
            this.axiosPost({
                url: config.API.GET_HOME_DATAS,
                data: {
                    config
                },
                success (data) {
                    resolve({
                        status: 0,
                        data
                    })
                },
                error (error) {
                    resolve({
                        error,
                        status: -1
                    });
                }
            });
        });
    }
}

export {IndexModel}