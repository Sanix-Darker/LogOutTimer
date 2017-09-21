// LogOutTimer By Sanix Darker

var stop = false;
var initial_timer = (60000*15);
var timer = initial_timer;
var logoutUrl = 'unlock.html?last_page_visited='+window.location.pathname ; // URL to logout page.

function logOut(){
	window.location = logoutUrl;
}

if(!stop){
	setInterval(function(){
		timer-=1000;
		console.log("Timer:"+timer);
		if(timer==0 || timer<0){
			logOut()
			stop = true;
		}
	}, 1000);
}

$('body').bind('click dblclick mousedown mouseenter mouseleave keyup mouseover',
function(e){
	timer = initial_timer;
});