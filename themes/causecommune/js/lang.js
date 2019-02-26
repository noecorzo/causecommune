jQuery(document).ready(function(e){ 
    
    jQuery('.menu > .menu-item:nth-of-type(3) > a').attr('target', '_blank');  
    console.log("hello");
    
    jQuery('.fr').mouseenter(function(e){
          jQuery('#logo-causecommune').addClass('rotateFr');
    })
    
    jQuery('.fr').mouseleave(function(e){
          jQuery('#logo-causecommune').removeClass('rotateFr'); 
    })
    
    jQuery('.nl').mouseenter(function(e){
          jQuery('#logo-causecommune').addClass('rotateNl');
    })
    
    jQuery('.nl').mouseleave(function(e){
          jQuery('#logo-causecommune').removeClass('rotateNl'); 
    })

    
    if(jQuery('#block-languageswitcher li').is('.fr.is-active')){
            
            jQuery('#edit-submit').val("Envoyer message");
            
            
        }

        
    if(jQuery('#block-languageswitcher li').is('.nl.is-active')){

        jQuery('#logo-causecommune').css('transform', 'rotate(90deg)');
        jQuery('#commune #display-liste p').text("Kandidaten");
        jQuery('#projets .view-projets .row-1 h2').toggleClass('changed');
        jQuery('#projets .view-projets .row-2 h2').toggleClass('changed');
        jQuery('#projets .view-projets .row-3 h2').toggleClass('changed');
        jQuery('#edit-message-wrapper > div > label').text("Uw bericht");
        jQuery('#edit-submit').val("Versturen");
        jQuery('#bouton-decrouvrir-plus').val("Ontdek hier");
        jQuery('#bouton-decrouvrir-plus').text("Ontdek hier");
        
        jQuery('footer > #restons-en-contact > p').text("Blijf in contact met ons");
        
        jQuery('footer > div:nth-of-type(2)').html("Deze site is gemaakt door <a href='http://anniekolemen.com/' target='_blank'>AK</a> et <a href='http://www.corzocrespo.com/' target='_blank'>NC</a>");


    }
        

    
    
    
        
    
});





