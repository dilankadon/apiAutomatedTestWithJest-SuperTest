var utils = require('../../config/utils')

describe('@get', () => {

    //Using assert method
    test('should return a 200 OK status code for User ID 1', done => {
        utils.httpGET('/users/1', {}).then((resp) => {
            const response = resp.body
            expect(response).toMatchObject(
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                })
            expect(resp.statusCode).toBe(200)
            done()
        })
    })

    //Using expect method to GET user ID 1
    test('should return a 200 OK status code for userId 1 using expect method', done => {
        utils.httpGET('/users/1', {}).then((resp) => {
            const response = resp.body
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('username')
            expect(response).toHaveProperty('email')
            expect(response.id).toBe(1)
            expect(response.email).toBe('Sincere@april.biz')
            expect(response.address.city).toBe('Gwenborough')

            expect(resp.statusCode).toBe(200)
            done()
        })
    })
})