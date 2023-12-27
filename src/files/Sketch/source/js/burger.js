// // adaptive functions
// $(window).resize(function(event) {
// 	adaptive_function();
// });
// function adaptive_header(w,h) {
// 	var headerMenu=$('.header-menu');
// 	var headerLang=$('.header-top-lang');
// 	if(w<767){
// 		if(!headerLang.hasClass('done')){
// 			headerLang.addClass('done').appendTo(headerMenu);
// 		}
// 	}else {
// 		if(headerLang.hasClass('done')){
// 			headerLang.removeClass('done').prependTo($('.header-top'));

// 		}
// 	}

// 	if(w<767){
// 		if(!$('.header-bottom-menu').hasClass('done')){
// 			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
// 		}
// 	}else {
// 		if($('.header-bottom-menu').hasClass('done')){
// 			$('.header-bottom-menu').removeClass('done').prependTo($('.header-top'));

// 		}
// 	}
// }
// function adaptive_function() {
// 	var w=$(window).outerWidth();
// 	var h=$(window).outerHeight();
// 	adaptive_header(w,h);
// }
// adaptive_function();


