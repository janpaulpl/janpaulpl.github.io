class WikiEntry {
	constructor(link, ...topics) {
		this.link = link
		this.topics = topics
		this.title = link.split('/').pop().replace(/_/g, ' ')
	}
	forceTitle(customTitle) {
		this.title = customTitle
	}
}

function handleData(data) {
	let outHTML = []
	for (datum of data.list) {
		let buildString = []
		buildString.push(datum.title)
		buildString.unshift(`<a href="${datum.link}">`)
		buildString.push('</a>')
		for (topic of datum.topics) {
			buildString.push(`<div>${topic}</div>`)
		}
		buildString.unshift('<div>')
		buildString.push('</div>')
		outHTML.push(buildString.join(''))
	}
	console.log(outHTML.join(''))
}

const JSONDATA = () => {
	fetch('js/json/wikilist.json', {
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