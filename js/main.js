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

	//slider
	$('.carousel').carousel({
	  interval: 3000
	})

	$(".modal-a").hide();
	$("#volver-6").hide();

	$("#presionar-6").click(function(){
		$(".modal-a").show(1000);
		$("#volver-6").show();
		$("#presionar-6").hide();
	});

	$("#volver-6").click(function(){
		$(".modal-a").hide();
		$("#volver-6").hide();
		$("#presionar-6").show();
	});

	$(".modal-b").hide();
	$("#volver-7").hide();

	$("#presionar-7").click(function(){
		$(".modal-b").show(1000);
		$("#volver-7").show();
		$("#presionar-7").hide();
	});

	$("#volver-7").click(function(){
		$(".modal-b").hide();
		$("#volver-7").hide();
		$("#presionar-7").show();
	});

	$(".modal-c").hide();
	$("#volver-8").hide();

	$("#presionar-8").click(function(){
		$(".modal-c").show(1000);
		$("#volver-8").show();
		$("#presionar-8").hide();
	});

	$("#volver-8").click(function(){
		$(".modal-c").hide();
		$("#volver-8").hide();
		$("#presionar-8").show();
	});

	$(".modal-d").hide();
	$("#volver-9").hide();

	$("#presionar-9").click(function(){
		$(".modal-d").show(1000);
		$("#volver-9").show();
		$("#presionar-9").hide();
	});

	$("#volver-9").click(function(){
		$(".modal-d").hide();
		$("#volver-9").hide();
		$("#presionar-9").show();
	});

	$(".modal-e").hide();
	$("#volver-10").hide();

	$("#presionar-10").click(function(){
		$(".modal-e").show(1000);
		$("#volver-10").show();
		$("#presionar-10").hide();
	});

	$("#volver-10").click(function(){
		$(".modal-e").hide();
		$("#volver-10").hide();
		$("#presionar-10").show();
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
