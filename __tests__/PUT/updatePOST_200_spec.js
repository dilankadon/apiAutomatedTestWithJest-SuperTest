'use strict'
var utils = require('../../config/utils')
var hooks = require('../../config/hooks.js')

describe('@put', () => {

let post

    //Publish POST
    beforeEach(done => {
        hooks.createPost()
        .then(function (_post) {
            post = _post
            done()
        })
    })

    //Update POST
    test('should return a 200 code after updating post', done => {
        utils.httpPUT(`/posts/${post.id}`, {})
            .send(
                {
                    id: `${post.id}`,
                    title: 'candy crush',
                    body: 'sodalicious juicy',
                    userId: 1
                }
            )
            .then((resp) => {
                const response = resp.body
                expect(response.title).toBe('candy crush');
                expect(response.body).toBe('sodalicious juicy');
                expect(response.userId).toBe(1)

                expect(resp.statusCode).toBe(200)
                done()
            })
    })
})