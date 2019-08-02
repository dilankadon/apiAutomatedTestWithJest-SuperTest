var utils = require('../../config/utils')

describe('@get', () => {
    //Using assert method
    test('should return a 200 OK status code for Album ID 1', done => {
        utils.httpGET('/albums/1', {}).then((resp) => {
            const response = resp.body
            expect(response).toMatchObject(
                {
                    "userId": 1,
                    "id": 1,
                    "title": "quidem molestiae enim"
                })
            expect(resp.statusCode).toBe(200)
            done()
        })
    })

    //Using expect method to GET Album ID 1
    test('should return a 200 OK status code for Album ID 1 using expect method', done => {
            utils.httpGET('/albums/1', {}).then((resp) => {
                let response = resp.body
                expect(response).toHaveProperty('userId')
                expect(response).toHaveProperty('id')
                expect(response).toHaveProperty('title')
                expect(response.id).toEqual(1)
                expect(response.userId).toEqual(1)
                expect(response.title).toEqual('quidem molestiae enim')
                expect(resp.statusCode).toBe(200)
                done()
            })
        }
    )
})