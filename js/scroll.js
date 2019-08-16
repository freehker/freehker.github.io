//* Nav Scroll Effect *//
$(window).on('scroll', function(){
	if ($(window).width()>768){
		if ($(window).scrollTop()){
			$('nav').addClass('black');
		}
		else {
			$('nav').removeClass('black');
		}
	}
});
//* Nav M-Menu Control *//
$(document).ready(function(){
	$(".ti-menu img").click(function(){
		$("nav ul").toggleClass("active1")
	})
});
//* Menu Click rotat *//
$(document).ready(function(){
	var value = 0
		$(".ti-menu img").rotate({
		  bind:
		  {
		    click: function(){
		      value +=180;
		      $(this).rotate({ animateTo:value})
		    }
		  }
		})
});
