xhr.js
======

Simple library to make XHR.

It's lightweight:
* minified ~0.8K
* gzipped ~0.4K

It can:
* send HTTP requests and execute a callback function with a context specified in params
* use chain syntax like Xhr().method('post').url('http://my.srv/url').send({some: 'data'})

Syntax
------

    new Xhr([context]).[chainable methods].[send method]

Chainable methods:
* fn(on_load_function)
* method(get | post)
* url(url_string)

Send method:
* send([data_object])

Encode data to URL encoded string:
* encode(some_data)

Samples
-------

    xhr = new Xhr({abc: 123}).url('http://my.srv/url').fn(function(params){
      console.log(params.context)
    })
    
    xhr.send()
