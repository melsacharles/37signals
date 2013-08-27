
$(document).ready(function(){
	$(".basecamp").mouseover(function(){
	$(" .header,h3").hide();
	$(".bcpopup ").show();
});

	$(".basecamp").mouseout(function(){
	$(" .header ,h3").show();
	$(" .bcpopup").hide();	
});

	$(".highrise").mouseover(function(){
	$(".header,h3").hide();
	$(".hrpopup").show();
});
	$(".highrise").mouseout(function(){
	$(".header,h3").show();
	$(".hrpopup").hide();
});	

	$(".campfire").mouseover(function(){
	$(".header,h3").hide();
	$(".cfpopup").show();
});
	$(".campfire").mouseout(function(){
	$(".header,h3").show();
	$(".cfpopup").hide();
});	

});
