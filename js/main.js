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

	/*TERCERA CAJA*/
	
	$(".continuar-2").hide();
	$("#volver-2").hide();

	$("#presionar-2").click(function(){
		$(".continuar-2").show(1000);
		$("#volver-2").show();
		$("#presionar-2").hide();
	});

	$("#volver-2").click(function(){
		$(".continuar-2").hide();
		$("#volver-2").hide();
		$("#presionar-2").show();
	});

	$(".continuar-3").hide();
	$("#volver-3").hide();

	$("#presionar-3").click(function(){
		$(".continuar-3").show(1000);
		$("#volver-3").show();
		$("#presionar-3").hide();
	});

	$("#volver-3").click(function(){
		$(".continuar-3").hide();
		$("#volver-3").hide();
		$("#presionar-3").show();
	});

	$(".continuar-4").hide();
	$("#volver-4").hide();

	$("#presionar-4").click(function(){
		$(".continuar-4").show(1000);
		$("#volver-4").show();
		$("#presionar-4").hide();
	});

	$("#volver-4").click(function(){
		$(".continuar-4").hide();
		$("#volver-4").hide();
		$("#presionar-4").show();
	});

	$(".continuar-5").hide();
	$("#volver-5").hide();

	$("#presionar-5").click(function(){
		$(".continuar-5").show(1000);
		$("#volver-5").show();
		$("#presionar-5").hide();
	});

	$("#volver-5").click(function(){
		$(".continuar-5").hide();
		$("#volver-5").hide();
		$("#presionar-5").show();
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
