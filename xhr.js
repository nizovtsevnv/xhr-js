var Xhr = function(context){
  var THIS = this,
      fn, url,
      method = 'GET',
      xhr = window.XMLHttpRequest	? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')

  THIS.fn = function(value){
    fn = value
    return THIS
  }
  
  THIS.method = function(value){
    method = value
    return THIS
  }
  
  THIS.send = function(data){
    var i, query = ''
    for(i in data){
      query += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
    }
    xhr.onload = function(){
      if(typeof(fn) == 'function'){
        xhr.context = context
        fn(xhr)
      }
    } 
    xhr.open(method, url + (/[?]/.test(url) ? '&' : '?') + query, true)
    xhr.send()
    return xhr
  }

  THIS.url = function(value){
    url = value
    return THIS
  }
  
  return THIS
}
