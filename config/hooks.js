var utils = require('../config/utils.js')
module.exports = {

    createPost: function () {
        return new Promise(function (resolve, reject) {

            // var randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 9);
            // var randomString2 = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

            const url = '/posts';
            utils.httpPOST(url, {})
                .send({
                    id: null,
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                })
                .expect('content-type', 'application/json; charset=utf-8')
                .expect(201)
                .end((err, resp) => {
                    if (err) {
                        console.log(err)
                    }
                    resolve(resp.body)
                })
        })
    }
}
