/*
Author: Vincent Anthony Gonzaga
Description: A simple image preloader with transition.
Version: 1.1
*/

(function($){

  $.fn.preloadImage = function(options){

      $(this).each(function(){
        var thisElement = $(this),
            dataVagLarge = $(this).attr('data-large');

        newImage = new Image();
        newImage.src = dataVagLarge;

        //check if this element has a background image, else it will consider it as an img element
        if(thisElement.css('background-image') !== 'none'){
          newImage.onload = function(){
            thisElement.css('background-image', 'url(' + dataVagLarge + ')').removeAttr('data-large');
            console.log('loaded background-image!');
          }
        }else{
          newImage.onload = function(){
            thisElement.attr('src', dataVagLarge).removeClass('blurry').removeAttr('data-large');
            console.log('loaded!');
          }
        }


      });

      //default options
      var settings = $.extend({

      },options);

      //settings variable
      return this.each(function(){

        $(this).css({
          border: settings.border,
          filter: settings.filter,
        });
      });

	};

}(jQuery));
