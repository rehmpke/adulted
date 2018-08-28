// Custom JS to animate and show the shop Amazon Smile widget
// ===================================================================
//$(document).ready(function() {
$(document).ready(function () {
  function showShopSmile() {
    setTimeout(function(){
      animationDelay();
    }, 2000);
    function animationDelay() {
      var deferShowShopSmile = $.Deferred();
      $.when(deferShowShopSmile).done(function() {
        $('#shopSmileWrapper').addClass('shop-smile__wrapper--show');
      });
      function animateShopSmile() {
        $('#shopSmileWrapper').addClass('shop-smile__wrapper--slide-in');
        $('#greyOut').addClass('shop-smile__grey-out--animate')
          .addClass('shop-smile__grey-out--show');
        deferShowShopSmile.resolve();
      }
      animateShopSmile();
    }
  }
  if( localStorage.getItem('visted') != 'true' ){
    showShopSmile();
    localStorage.setItem('visted', 'true');
  }
  function closeSmileWidget() {
    var deferDisplayNone = $.Deferred();
    $.when(deferDisplayNone).done(function() {
      setTimeout(function() {
        $('#greyOut').removeClass('shop-smile__grey-out--animate-out');
      }, 1000);
    });
    $('#exitButton').click(function() {
      $('#shopSmileWrapper').removeClass('shop-smile__wrapper--slide-in');
      $('#shopSmileWrapper').removeClass('shop-smile__wrapper--show');
      $('#shopSmileWrapper').addClass('shop-smile__wrapper--slide-out');
      $('#greyOut').removeClass('shop-smile__grey-out--animate')
        .addClass('shop-smile__grey-out--animate-out')
        .removeClass('shop-smile__grey-out--show');
      deferDisplayNone.resolve();
    });
  }
  closeSmileWidget();

});
//});
