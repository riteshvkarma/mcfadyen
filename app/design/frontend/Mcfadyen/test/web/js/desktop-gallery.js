require([
    'jquery',
    "jquery/ui"
], function($){
    'use strict';    

    $(document).ready(function(){
        const imgQty = $('.desktop-image-gallery img').length;
        //applies image division when needed based on Smart PDP image layout behaviour
        if(imgQty >= 5){
            $('.desktop-image-gallery div:nth-child(2)').css('width','49%');
            $('.desktop-image-gallery div:nth-child(3)').css({'width':'49%','float':'right'});
            if(imgQty % 6 == 0 || imgQty % 7 == 0 || imgQty % 8 == 0){
                $('.desktop-image-gallery div:nth-child(5)').css('width','49%');
                $('.desktop-image-gallery div:nth-child(6)').css({'width':'49%','float':'right'});
                return;
            }
            if(imgQty % 9 == 0){
                $('.desktop-image-gallery div:nth-child(5)').css('width','49%');
                $('.desktop-image-gallery div:nth-child(6)').css({'width':'49%','float':'right'});
                $('.desktop-image-gallery div:nth-child(8)').css('width','49%');
                $('.desktop-image-gallery div:nth-child(9)').css({'width':'49%','float':'right'});
                return;
            }
            if(imgQty % 10 == 0){
                $('.desktop-image-gallery div:nth-child(5)').css('width','49%');
                $('.desktop-image-gallery div:nth-child(6)').css({'width':'49%','float':'right'});
                $('.desktop-image-gallery div:nth-child(8)').css('width','49%');
                $('.desktop-image-gallery div:nth-child(9)').css({'width':'49%','float':'right'});
                return;
            }
        }
    })
});