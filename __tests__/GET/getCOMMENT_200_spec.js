var utils = require('../../config/utils')

describe('@get', () => {

    test('should return a 200 OK status code for Comment ID 1', done => {
        utils.httpGET('/comments/1', {}).then((resp) => {
            const response = resp.body
            expect(response).toMatchObject(
                {
                    "postId":1,
                    "id":1,
                    "name":"id labore ex et quam laborum",
                    "email":"Eliseo@gardner.biz",
                    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                })
            expect(resp.statusCode).toBe(200)
            done()
        }) 
    })

    //Using expect method to GET comment ID 1
    test('should return a 200 OK status code for comment ID 1 using expect method', done => {
            utils.httpGET('/comments/1', {}).then((resp) => {
                const response = resp.body;
                expect(response).toHaveProperty('postId')
                expect(response).toHaveProperty('id')
                expect(response).toHaveProperty('name')
                expect(response).toHaveProperty('email')
                expect(response).toHaveProperty('body')
                expect(response.id).toBe(1)
                expect(response.email).toBe('Eliseo@gardner.biz')
                expect(response.name).toBe('id labore ex et quam laborum')

                expect(resp.statusCode).toBe(200)
                done()
            })
        }
    )
})