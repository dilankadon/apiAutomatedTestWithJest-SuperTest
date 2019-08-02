var utils = require('../../config/utils')

describe('@get', () => {

    //Using assert method
    test('should return a 200 OK status code for PostID 1', done => {
        utils.httpGET('/posts/1', {}).then((resp) => {
            const response = resp.body
            expect(response).toMatchObject(
                {
                    "id": "1",
                    "title": "foo",
                    "body": "bar",
                    "userId": 1
                })
            expect(resp.statusCode).toBe(200)
            done()    
        })
    });

    //Using expect method
    test('should return a 200 OK status code for PostID 1 using expect method', done => {
            utils.httpGET('/posts/1', {}).then((resp) => {
                const response = resp.body
                expect(response).toHaveProperty('id');
                expect(response).toHaveProperty('title');
                expect(response).toHaveProperty('body');
                expect(response).toHaveProperty('userId');
                expect(response.id).toBe('1');

                expect(resp.statusCode).toBe(200)
                done()
            })
        }
    );


});