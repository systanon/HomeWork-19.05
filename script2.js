

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

function showMarkup (html) {
  document.body.innerHTML += html
}

function showText (text) {
  document.body.innerHTML += `<h3>${text}</h3>`
}

var showGallery = function (response) {
  pictures = JSON.parse(response)
  pictures.forEach(
     picture => document.body.appendChild(document.createElement('img')).src = picture.ref
  )
}

getData("./user2.json",showGallery)
getData("hello.txt",showText)
getData("hello.html",showMarkup)
