//javascript for main page
$( document ).ready(function() {
    var curr = 0;
    jQuery.easing.def = 'easeInOutCubic';

    $("#next").click(function(event) {
        event.preventDefault();
        //hide the current titles
        if(curr < 3) {
            $("#slide"+curr).find("h1").each(function(i) {
                $animationOutType = $(this).data("animationOut");
                //alert($animationType);
                $(this).addClass($animationOutType).delay(1000).queue(function() {
                    $(this).addClass("out").dequeue();
                    $(this).removeClass($animationOutType).dequeue();
                });
            });
            //scroll the background image
            scrollTopOffset("slide"+ (++curr), 800);
            
            //show the next current title
            setTimeout(function() {
                $("#slide"+curr).find("h1").each(function(i) {
                    $(this).removeClass("out");
                    $(this).addClass("fadeInUp").delay(1000).queue(function() {
                        $(this).removeClass("fadeInUp").dequeue();
                    });        
                });
            }, 1000);
        }//end if(curr < 3)
        
        //updating indicator
        $("ul.indicator li").each(function(i) {
            $this = $(this);
            $id = $this.data("id");
            if($id === curr) $this.addClass("active");
            else $this.removeClass("active");
        });

    }); //end next click event
    
    $("#prev").click(function(event) {
        event.preventDefault();
        //hide the current titles
        if(curr > 0) {
            $("#slide"+curr).find("h1").each(function(i) {
                $(this).addClass("fadeOutDown").delay(1000).queue(function() {
                    $(this).addClass("out").dequeue();
                    $(this).removeClass("fadeOutDown").dequeue();
                });
            });        
            //scroll the background image
            scrollTopOffset("slide"+(--curr), 800);

            //show the next current title
            setTimeout(function() {
                $("#slide"+curr).find("h1").each(function(i) {
                    $(this).removeClass("out");
                    $(this).addClass("fadeInDown").delay(1000).queue(function() {
                        $(this).removeClass("fadeInDown").dequeue();
                    });

                });
            }, 1000);
        }
        
        
           //updating indicator
        $("ul.indicator li").each(function(i) {
            $this = $(this);
            $id = $this.data("id");
            if($id === curr) $this.addClass("active");
            else $this.removeClass("active");
        });
    }); //end next click event
    
 

    
}); //end document ready

//function for scrolling page
function scrollTopOffset(element, duration) {
	$('html, body').stop().delay(100).animate({
		scrollTop: $("#"+element).offset().top
	}, duration, 'swing');
}

