var catsGithub
var request = Object.assign(
  new XMLHttpRequest, {
    onreadystatechange :function (event) {
      this.readyState === 4 ? this.status === 200 ?
       console.log(this.responseText) :
          console.warn('error') : null
    }
  }
)
request.open("GET","./user2.json")
request.send()
