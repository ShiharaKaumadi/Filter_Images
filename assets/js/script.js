
$(document).ready(function(){

    $('.buttonsP').click(function(){

        $(this).addClass('act').siblings().removeClass('act');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.imageP').show(400);
        }else{
            $('.imageP').not('.'+filter).hide(200);
            $('.imageP').filter('.'+filter).show(400);
        }

    });

    $('.projects-section').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

});