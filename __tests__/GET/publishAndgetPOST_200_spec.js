'use strict';
var utils = require('../../config/utils')
var hooks = require('../../config/hooks.js')

describe('@post', () => {
    let post;

    describe('Creating POST....', () => {

        //Publish POST
        beforeEach(done => {
            hooks.createPost()
                .then(function (_post) {
                    post = _post
                    done()
                })
        });

        //Get POST
        describe('GET /posts/:id after Post Creation', () => {
            test('should GET /posts and return a 200 OK status code', done => {
                utils.httpGET(`/posts/${post.id}`, {}).then((resp) => {
                const response = resp.body
                    expect(response).toHaveProperty('id')
                    expect(response).toHaveProperty('title')
                    expect(response).toHaveProperty('userId')
                    expect(response.id).toBe(post.id)
                    
                    expect(resp.statusCode).toBe(200)
                    done()
                })
            })
        })
    })
})

