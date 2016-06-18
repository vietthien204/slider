$(window).load(function() {
	$('.loader').fadeOut(200, function() {
    	$('.banner').addClass('fadeIn');
    	
    	//javascript for main page
		$( document ).ready(function() {
			$('.navbar-nav').find('li').each(function(i) {	
				$(this).delay(i*100+1000).queue(function(){$(this).addClass('animated fadeInRight')});
		    });
			
			//toggle the menu button
			$('#toggle').on('click',function(event) {
				event.preventDefault();
				$('#toggle').toggleClass('active');
		   		$('#overlay').toggleClass('open');
		  	});

			jQuery.easing.def = 'easeInOutCubic';
			$('#scroll-btn').click(function(event) {
			event.preventDefault();
			scrollTopOffset("slide1", 1000);

			});
			$('.totop').click(function(event) {
			event.preventDefault();
			scrollTopOffset("slide0", 1000);

			});
            
            $(".contact-button").click(function(e) {
                e.preventDefault();
                $('.overlay').delay(1000).removeClass('open');
                setTimeout(scrollTopOffset("slide3", 1000), 1000);
            });
            
			$("#search-toggle").click(function(e) {
				e.preventDefault();
				$("#search-box-container").fadeIn();
			});
			$('#search-close-btn').click(function(){
				$("#search-box-container").fadeOut();
			});	
			
			//scrolling 
			$('#page-indicator').find('a').each(function(i) {
		        $(this).click(function(event) {
					event.preventDefault();
					scrollTopOffset("slide" + $(this).attr('id'), 1000);
				});
			});

			$(".section-slide").each(function(i) {
				$(this.element).find('.animated').removeClass('.animated');
				$(this).waypoint(function(direction) {
					//track current slide
					$('#page-indicator li').find('a').removeClass('active');
					curr = $(this.element).attr('id');
					curr = curr.substring(curr.length - 1 , curr.length);
					prev = curr;
					if(prev == '1' && direction == 'up') {
						$('#page-indicator li').find('#0').addClass('active');
					}
					else {
						switch(curr) {
							case '0':
								follow = 300;
								break;
							case '1':
								follow = 500;
								break;
							case '2':
								follow = 100;
								break;
							case '3':
								follow = 200;
								break;
							default:
								follow = 100;
						}
						var item = $(this.element);
						item.find(".animated").each(function(i){
							//alert($(this).data("animate-order"));
							$(this).delay($(this).data("animate-order")*follow+500).queue(function(){	
								$(this).addClass($(this).data("animate-name"));
							});
						});

						$('#page-indicator li').find( "#" + curr).addClass('active');
					} //end else
			}, {offset: "50%"});
		});
		//end scrolling page
		}); //end document ready
	    });
	
});

//function for scrolling page
function scrollTopOffset(element, duration) {
	$('html, body').animate({
		scrollTop: $("#"+element).offset().top
	}, duration, 'swing');
}

//particle background
document.addEventListener('DOMContentLoaded', function () {
  /*particleground(document.getElementById('particles'), {
    dotColor: '#bbb',
    lineColor: '#ddd'
  });*/
  var intro = document.getElementById('intro');
}, false);


$(window).scroll(function(){
	$(".fadeoutonscroll").css("opacity", 1 - $(window).scrollTop() / 500);
});

