//NAV .navScroll
jQuery(document).ready(function(e){

    if(jQuery(window).width() > 700){
        jQuery(window).scroll(function(e){
            if (jQuery(this).scrollTop() > 190) {

                jQuery('#navigation nav').addClass('navScroll');
                jQuery('#navigation nav > div').addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');


            }else{
                jQuery('#navigation nav').removeClass('navScroll');
                jQuery('#navigation nav > div').removeClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');
                jQuery('#navigation nav > div').addClass('col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1');
            }
        });
    }else{
        jQuery('#navigation nav').css('display', 'none');
    }


        
});


