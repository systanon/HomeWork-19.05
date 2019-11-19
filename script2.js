

function getData (url,callback) {
  var request = Object.assign(
    new XMLHttpRequest, {
      onreadystatechange :function (event) {
        this.readyState === 4 ? this.status === 200 ?
          callback(this.responseText) :
             console.warn('error') : null
      }
    }
  )
  request.open("GET",url)
  request.send()
}
var func = function (response) {
  console.log('success')
  console.log(response)
}

getData("./user2.json",func)
