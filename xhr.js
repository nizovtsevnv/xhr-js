var Xhr = function(context){
  var OBJECT = 'object',
      THIS = this,
      UNDEFINED = 'undefined',
      fn, url,
      method = 'GET',
      xhr = window.XMLHttpRequest	? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),
      
      compareType = function(object, compare){
        return compare ? compareType(object) == compare : typeof(object)
      }

  THIS.encode = function(value, prefix){
    var i, result = []
    if(compareType(value, OBJECT)){
      for(i in value){
        result.push(THIS.encode(value[i], compareType(prefix, UNDEFINED) ? encodeURIComponent(i) : prefix + '[' + encodeURIComponent(i) + ']'))
        }
    }else{
      result.push((compareType(prefix, UNDEFINED) ? '' : prefix + '=') + encodeURIComponent(value))
    }
    return result.join('&')
  }
  
  THIS.fn = function(value){
    fn = value
    return THIS
  }
  
  THIS.method = function(value){
    method = value.toUpperCase()
    return THIS
  }
  
  THIS.send = function(data){
    var i, query = ''
    xhr.onload = function(){
      if(typeof(fn) == 'function'){
        xhr.context = context
        fn(xhr)
      }
    }
    if(method == 'GET'){
      xhr.open(method, url + (/[?]/.test(url) ? '&' : '?') + encode(data), true)
      xhr.send()
    }else{
      xhr.open(method, url, true)
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(encode(data))
    }

    return xhr
  }

  THIS.url = function(value){
    url = value
    return THIS
  }
  
  return THIS
}
