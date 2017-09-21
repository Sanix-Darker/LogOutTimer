	var stop = false;
	var initial_timer = 6000*15;
	var timer = initial_timer;
	var logoutUrl = 'unlock.html'; // URL to logout page.

	function logOut(){
		console.log("Aucune action...")
		window.location = logoutUrl;
	}

	if(!stop){
		setInterval(function(){
			timer-=1000;
			console.log("Timer:"+timer);
			if(timer==0 || timer<0){
				console.log("Deconnexion....");
				logOut();
				stop = true;
			}
		}, 1000);
	}

	document.body.bind('click dblclick mousedown mouseenter mouseleave keyup mouseover',
	function(e){
		timer = initial_timer;
		 console.log("Timer:"+timer);
		 console.log("EventName:"+e.type);
	});