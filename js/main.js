$(document).ready(function(){	

	/*MENU*/

	$(".nav-background").hide();

	$(".menu").click(function(){
		$(".nav-background").show();
		$(".nav-background").stop();
	});

	/*SEGUNDA CAJA*/
	
	$(".continuar").hide();
	$("#volver").hide();

	$("#presionar").click(function(){
		$(".continuar").show(1000);
		$("#volver").show();
		$("#presionar").hide();
	});

	$("#volver").click(function(){
		$(".continuar").hide();
		$("#volver").hide();
		$("#presionar").show();
	});

})

/*MENU*/

var lastScrollTop = 0;
window.addEventListener("scroll", function (){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	if (currentScroll>=5){
		document.getElementById("nav-header").classList.remove("header-in");
		document.getElementById("nav-header").style.opacity = 0;
		document.getElementById("nav-header").classList.add("solid");
		document.getElementById("nav-header").style.opacity = 1;
	}else{
		document.getElementById("nav-header").classList.remove("solid");
		document.getElementById("nav-header").style.opacity = 0;
		document.getElementById("nav-header").classList.add("header-in");
		document.getElementById("nav-header").style.opacity = 1;
	}
	lastScrollTop = currentScroll;
	document.getElementById("toggle").addEventListener("click", function(event){
		event.preventDefault();
		document.getElementById("header").classList.toggle("open");
		document.getElementById("body").classList.toggle("overflow-hidden");
	});
},false);
