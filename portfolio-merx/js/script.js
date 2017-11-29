
$(document).ready(function($) {
  var si = $('#gallery-1').royalSlider({
    addActiveClass: true,
    arrowsNav: true,
    controlNavigation: 'none',
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 340,
    // loop: true,
    imageScaleMode: 'fit-if-smaller',
    fadeinLoadedSlide: true,
    // globalCaption: true,
    keyboardNavEnabled: true,
    navigateByClick:	false,
    // globalCaptionInside: false,
    thumbs: {
      appendSpan: true,
      firstMargin: true,
      paddingBottom: 4
    },

    fullscreen: {
      enabled: false,
      nativeFS: true
    },
    controlNavigation: 'thumbnails',

    visibleNearby: {
      enabled: true,
      centerArea: 0.5,
      center: true,
      breakpoint: 650,
      breakpointCenterArea: 0.64,
      // navigateByCenterClick: true
    }
  }).data('royalSlider');

  // link to fifth slide from slider description.
  $('.slide4link').click(function(e) {
    si.goTo(4);
    return false;
  });
});

jQuery(document).ready(function($) {
    $('#simple-slider').royalSlider({
      imageScaleMode: 'fill',
      video: {
        autoHideControlNav: true
      }
    });
  });

$(document).ready(function($) {

  // Please note that if you use mutliple sliders, you need to call RoyalSlider destroy() method when box
  // closes to destroy it's data.
  // Also if autoPlay is used, you need to pause slider on close

  var win = $(window),
      w,
      cContent = $('#cboxLoadedContent'),
      currRs;
  $('#colorbox-items').on('click', '.colorboxSlider', function(e) {
      e.preventDefault();
      $.colorbox({
          preloading: true,
          modal: true,
          transition: 'none',
          speed: 0,
          onComplete: function(e) {
            currRs = $('#cboxLoadedContent').find('.royalSlider').royalSlider({
              imageScaleMode: 'fill',
              keyboardNavEnabled: true,
              video: {
                autoHideControlNav: true
              }
            }).data('royalSlider');
            updateLightboxSize();
          },
          href:$(this).attr('href')
      });
      return false;
  });

  // win.resize( function() {
  //    updateLightboxSize();
  // });

  // dynamic lightbox resizing
  // function updateLightboxSize() {
  //     // define sze of lightbox
  //     // w = win.width();
  //     // if(w > 1200) {
  //     //   w = '700px';
  //     // } else if(w < 800) {
  //     //   w = '90%';
  //     // } else {
  //     //   w = '60%';
  //     // }
  //      // $.colorbox.resize({
  //      //     width: w
  //      // });
  //     // if(currRs) {
  //     //   currRs.updateSliderSize();
  //     // }
  //     // fix scrolbar space
  //     // setTimeout(function() {
  //     //   $.colorbox.resize({
  //     //      width: w
  //     //   });
  //     // },1);

  // }
});

