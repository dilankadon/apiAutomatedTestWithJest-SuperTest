'use strict'
var utils = require('../../config/utils')
var hooks = require('../../config/hooks.js')

describe('@delete', () => {

    let post;

    //Publish POST
    beforeEach(done => {
        hooks.createPost()
            .then(function (_post) {
                post = _post;
                done()
            })
    })

    //Delete POST
    test('should return a 200 code after deleting Post Created', done => {
         utils.httpDELETE(`/posts/${post.id}`, {})
             .send(
                {
                    id: post.id,
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                }
            ).then((resp) => {
                const response = resp.body;
                expect(response).toMatchObject(
                    {} //return empty response
                )
                expect(resp.statusCode).toBe(200)
                done()
            })
     })
})