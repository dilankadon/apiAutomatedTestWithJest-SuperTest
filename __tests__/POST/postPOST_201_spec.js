var utils = require('../../config/utils')

describe('@post', () => {

    test('should return a 201 code after posting', done => {
        utils.httpPOST('/posts', {})
        .send({title: 'foo', body: 'bar', userId: 1})
        .then((resp) => {
            const response = resp.body;
            expect(response.title).toBe('foo')
            expect(response.body).toBe('bar')
            expect(response.userId).toBe(1)

            expect(resp.statusCode).toBe(201)
            done()
        })
    })
})