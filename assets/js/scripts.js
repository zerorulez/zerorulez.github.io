/*!
 * portfolio
 * Portfolio para cúrriculo
 * http://lucasribeiro.me
 * @author lucas Ribeiro
 * @version 1.0.0
 * Copyright 2019. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('.bt-menu').on('click', function(e) {
      e.preventDefault();
      $('body').toggleClass('menu-open');
    }); 
    
  });
   
})(jQuery, window, document);
