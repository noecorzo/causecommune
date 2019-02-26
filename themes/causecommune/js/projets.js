jQuery(document).ready(function(e){
    
        jQuery('#hide-liste').hide();

    
//    change style axe 2
    jQuery('.row-2 > .views-col.col-1 > div > div:nth-of-type(2)').removeClass('col-xs-12 col-sm-12 col-md-3 col-md-offset-1 col-lg-3 col-lg-offset-1');
    jQuery('.row-2 > .views-col.col-1 > div > div:nth-of-type(2)').css('text-align', 'center');
    jQuery('.row-2 > .views-col.col-1 > div > div:nth-of-type(2) > article > h2').css('text-align', 'left');
    jQuery('field--name-field-sous-titre').css('text-align', 'left');
    jQuery('.row-2 > .views-col.col-1 > div > div:nth-of-type(2)').addClass('col-md-3 col-md-offset-0 col-lg-3 col-lg-offset-0');

      
//    hover projets
//cause solidaire
    
    jQuery('.row-1 button').mouseenter(function(e){
        
        jQuery('.row-1 .field--name-field-projets').addClass('projets-hover');         
        jQuery('row-1').css('position', 'relative'); 
        jQuery('.row-1 > .views-col.col-1 > div > div:nth-of-type(1)').css('opacity', '0.2');
        
    });
    
    jQuery('.row-1 button').mouseleave(function(e){
        
         jQuery('.row-1 .field--name-field-projets').removeClass('projets-hover'); 
        
        jQuery('.row-1 > .views-col.col-1 > div > div:nth-of-type(1)').css('opacity', '1');
    });
    
    //cause educative
    jQuery('.row-2 button').mouseenter(function(e){
        
        jQuery('.row-2 .field--name-field-projets').addClass('projets-hover-2'); 
        
        jQuery('row-2').css('position', 'relative');
        
        jQuery('.row-2 > .views-col.col-1 > div > div:nth-of-type(1)').css('opacity', '0.2');
        
    });
    
    jQuery('.row-2 button').mouseleave(function(e){
         jQuery('.row-2 .field--name-field-projets').removeClass('projets-hover-2'); 
        
        jQuery('.row-2 > .views-col.col-1 > div > div:nth-of-type(1)').css('opacity', '1');
    });
    
    //cause ecosociale
    jQuery('.row-3 button').mouseenter(function(e){
        jQuery('.row-3 .field--name-field-projets').addClass('projets-hover'); 
        
        jQuery('row-3').css('position', 'relative');
        
        jQuery('.row-3 > .views-col.col-1 > div > div:nth-of-type(1)').css('opacity', '0.2');
        
    });
    
    jQuery('.row-3 button').mouseleave(function(e){
         jQuery('.row-3 .field--name-field-projets').removeClass('projets-hover'); 
        
        jQuery('.row-3 > .views-col.col-1 > div > div:nth-of-type(1)').css('opacity', '1');
    });  
    
//    hover candidats
    jQuery('#liste .views-row').mouseenter(function(e){        
        jQuery('.' + this.classList[2] + ' .field--name-field-descriptif').addClass('visible');       
    });
    
    jQuery('#liste .views-row').mouseleave(function(e){
        jQuery('.' + this.classList[2] + ' .field--name-field-descriptif').removeClass('visible');
    });
    
    //responsive sans liste candidats

    if(jQuery(window).width() < 992){
    //    jQuery('#liste').fadeOut();

        jQuery('#display-liste').click(function(e){
    //        jQuery('#liste').addClass('visible-liste');
            jQuery('#hide-liste').show();
            jQuery('#display-liste').hide();
            jQuery('#hide-liste').css('position', 'absolute');
            jQuery('#hide-liste').css('top', '35px');
            jQuery('#hide-liste').css('z-index', '999999');
            jQuery('#block-views-block-liste-candidats-block-1').css('position', 'relative');

            jQuery('main').css('position', 'relative');
            jQuery('#liste').css('width', '50%');
                jQuery('#liste').css('display', 'block');
                jQuery('#liste').css('position', 'absolute');
                jQuery('#liste').css('background-color', 'white');
                jQuery('#liste').css('z-index', '9999');
        });

        
    }
    
    jQuery('#hide-liste').click(function(e){
        jQuery('#hide-liste').hide();
        jQuery('#display-liste').show();
        jQuery('#liste').css('display', 'none');   

    });

    if(jQuery(window).width() < 750){    
        jQuery('#display-liste').click(function(e){
            jQuery('#liste').css('width', '75%');          
        });     
    }

    if(jQuery(window).width() < 500){    
        jQuery('#display-liste').click(function(e){
            jQuery('#liste').css('width', '90%'); 
            jQuery('#liste').css('position', 'absolute');
            jQuery('#liste').css('left', '5%');
            jQuery('#hide-liste').css('position', 'absolute');
            jQuery('#hide-liste').css('left', '5px');

        });     
    }

});

