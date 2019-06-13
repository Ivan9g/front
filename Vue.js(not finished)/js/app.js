const description = (img, title, value) => ({ img, title, value })

const contact = {
	mail: "mail@mailtest.com",
	number: "+30-6977664062",
	copyright: "Copyright © 2019 Test All Rights Reserved"
}

const info = [
	description('img/Object1.png', 'Who we are', [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.1", 
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.1",  
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.1",
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.1"
	]),
	description('img/Object2.png', 'What we do', [ 
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.2", 
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.2", 
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.2"
	]),
	description('img/Object3.png', 'Technology', [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.3", 
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.3",  
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.3",
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.3"
		]),
]

new Vue({
	el: '#app',
	data: {
		info: info,
		contact: contact
	}
})