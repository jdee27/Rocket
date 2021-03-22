var sayMyName = function (name){
	alert('My name is '+ name);
}

var house = {
		rooms: 4,
		cr: 2,
		siblings: [
		'Trisha', 
		'Diether', 
		'Joezel'
		],
		doorOpen: false,
		father: 'Joel',
		mother: 'Marisel',
		openDoor: function() {
		this.doorOpen = true;
		},
		manageDoor: function(manage) {
		console.log('The doorOpen'+ ' ' +manage);
		if (manage == true){
			this.doorOpen = true;
		} else 
			this.doorOpen = true;
		},

		congrats: function() {
			alert('Congratulations!!!');
		}      	
	};                                      
	console.log('Hello there');