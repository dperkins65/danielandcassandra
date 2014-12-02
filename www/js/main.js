//  Set the height of the header to the height of the video player 
function setIntroVideoSize() {
	var videoHeight = $('#intro-video').height();
    var tabsHeight = 59;
    var windowHeight = window.innerHeight;
	
    $('.header').css('max-height', (windowHeight - tabsHeight) + 'px'); 
    $('.header').css('height', videoHeight + 'px');
    $('.overlay').css('height', videoHeight + 'px');
    $('article').css('min-height', windowHeight + 'px'); 
}

//  Adjust the header when the browser width is changed
function adjustHeaderOnResize() {
    "use strict";
    
	$(window).resize(function () {
		setIntroVideoSize();
	});
}



function tabEventHandler() {
    "use strict";
	$('nav li').click(function (evt) {
        
        "use strict";
		evt.stopImmediatePropagation();


	});
}

function linkEventHandler() {
    $('.splash-letter span').click(function (evt) {
        evt.stopImmediatePropagation();
        

    });
}

function stickyNav() {  
    var stickyNavTop = $('nav').offset().top;

    var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  
        
        
        if (scrollTop > stickyNavTop) {   
            $('nav').addClass('sticky');  
        } else {  
            $('nav').removeClass('sticky');   
        }  
    };  
  
    stickyNav();  

    $(window).scroll(function() {  
        stickyNav();  
    });  
}


$(function initilize() {
    "use strict";
	window.setTimeout(function() {setIntroVideoSize();}, 300); 
    window.setTimeout(function() {stickyNav();}, 500); 
	adjustHeaderOnResize();
	tabEventHandler();
    linkEventHandler();
});



