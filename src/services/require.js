import HTTP from '@/libs/http.js'
class Service extends HTTP {

    getImgLazyList (data) {
        return new Promise((resolve, reject) => {
            this.ajax({
                url: 'http://map.huangdeqin.com/imglazyload.php',
                type: 'POST',
                dataType: 'JSON',
                data,
                success (data) {
                    resolve(JSON.parse(data.pageData));
                },
                error (err) {
                    reject(err);
                }
            })
        })
    }
}


export default new Service()