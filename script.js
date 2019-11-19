var request = new XMLHttpRequest
request.onreadystatechange = function (event) {
	this.readyState === 4 ? this.status === 200 ? 
		console.log(this.responseText) :
			console.warn('request error') :
				null
}
request.open('GET','./user2.json')
request.send()
