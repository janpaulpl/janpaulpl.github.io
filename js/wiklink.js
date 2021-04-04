function handleData(data) {
}

const JSONDATA = () => {
	fetch('wikilist.json', {
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
			}
	})
		.then(function(response) {
			console.log(response)
			return response.json()
		})
		.then(function(data) {
			handleData(data)
		})
}