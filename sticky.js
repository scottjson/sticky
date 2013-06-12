


function initSticky() {
        $(".snap").each(function() {

            var $this = $(this);
            $this.data("top", $this.offset().top);  // set original position on load
            $this.data("height", $this.height);  // set original position on load
        });
    }

function sticky() {

    $(".snap").each(function(){


        var $this = $(this);
        var viewportHeight = window.innerHeight;

        var stopperOffset = 10;
        var stopper = $(".footerBar");  //alter this to suit
        stopper = stopper.offset().top - stopperOffset;


        

        var adjustingTop = "";
        

        if ($(window).scrollTop() > $this.data("top")) { 
            $this.addClass("fixed").height($this.data("height"));
        } 
        else {
            /*if ( $(this).hasClass("container") ) {
                adjustingTop = (($this.data("top") - $(document).scrollTop()) + "px" );
                $(".container").css({"top": adjustingTop});
            }*/
            //else{
                $this.removeClass("fixed");
                
            //}
        }


        /*if( $(window).scrollTop() > (stopper - viewportHeight) ){

            var scrollBottom = $(window).scrollTop() + viewportHeight;
            var bottom = scrollBottom  - stopper;
            $(".container").css({"bottom": bottom + "px"});
        }

        else{
            $(".container").css({"bottom": "10px"});
        }
*/



    });
}