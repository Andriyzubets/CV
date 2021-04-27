
/* Portfolio */
// $(window).load(function() {
//     var $cont = $('.portfolio-group');


//     $cont.isotope({
//         itemSelector: '.portfolio-group .portfolio-item',
//         masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: -20, isFitWidth: true},
//         filter: '*',
//     });

//     $('.portfolio-filter-container a').click(function() {
//         $cont.isotope({
//             filter: this.getAttribute('data-filter')
//         });

//         return false;
//     });

//     var lastClickFilter = null;
//     $('.portfolio-filter a').click(function() {

//         //first clicked we don't know which element is selected last time
//         if (lastClickFilter === null) {
//             $('.portfolio-filter a').removeClass('portfolio-selected');
//         }
//         else {
//             $(lastClickFilter).removeClass('portfolio-selected');
//         }

//         lastClickFilter = this;
//         $(this).addClass('portfolio-selected');
//     });

// });

/* Image Hover  - Add hover class on hover */
$(document).ready(function(){
  if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".image-hover figure").click(function(e){
          if (!$(this).hasClass("hover")) {
            $(this).addClass("hover");
          }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
          e.preventDefault();
          e.stopPropagation();
          if ($(this).closest(".image-hover figure").hasClass("hover")) {
            $(this).closest(".image-hover figure").removeClass("hover");
          }
        });
      } else {
        // handle the mouseenter functionality
        $(".image-hover figure").mouseenter(function(){
          $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
          $(this).removeClass("hover");
        });
      }
      var file = 'https://script.googleusercontent.com/macros/echo?user_content_key=DLYng3sruFwlpB28n4bus2owEh9uAH5_ozObrhO5Z2PLhWrCd1jA309qrqLa2KsmKlpr6JuZslWK42JVkN1mPVsUrBghvkzJm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCMEO-ixzfTSCeTRGtABatRG29EsurGAqNTHsC3e-EhNELyjTVzPTJ3vZY5Dpwvexthfe7sUqCNEWgfUnd4Q6wNjG1Hrp5zz0tz9Jw9Md8uu&lib=Mn6D5EiQbZAFRb5ICn0s9b4Z3IBme_BlJ';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', file, false);
      xhr.send();
      if (xhr.status != 200) {
        console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
        var data = JSON.parse(xhr.responseText);
        arr = data.result;
        arr.forEach(function(item, i, arr) {
          cont = document.createElement('div');
          cont.classList.add('item');
          var td = document.createElement('div');
          tdc = td.cloneNode(true);
          tdc.innerHTML = item[0];
          cont.appendChild(tdc);
          tdn = td.cloneNode(true);
          a = document.createElement('a');
          a.setAttribute('href', item[1]);
          a.innerHTML = item[1];
          tdn.appendChild(a);
          cont.appendChild(tdn);
          
          document.querySelector('.porfolio_wrap .body').appendChild(cont)
        });
      }
    });

// thumbs animations
$('.porfolio_wrap .more').click(function(){
  $('.porfolio_wrap .more').toggleClass('open')
  $('.porfolio_wrap .body').toggleClass('open')
})
$(function () {

  $(".thumbs-gallery i").animate({
    opacity: 0
    
  }, {
    duration: 300,
    queue: false
  });

  $(".thumbs-gallery").parent().hover(
    function () {},
    function () {
      $(".thumbs-gallery i").animate({
        opacity: 0
      }, {
        duration: 300,
        queue: false
      });
    });

  $(".thumbs-gallery i").hover(
    function () {
      $(this).animate({
        opacity: 0

      }, {
        duration: 300,
        queue: false
      });

      $(".thumbs-gallery i").not( $(this) ).animate({
        opacity: 0.4         }, {
          duration: 300,
          queue: false
        });
    }, function () {
    }
    );

});

// Mobile Menu
$(function(){
  $('#hornavmenu').slicknav();
});

// Sticky Divs
// $('#header').affix({
//     offset: {
//       top:42
//     }
//   });
// $('#hornav').affix({
//   offset: {
//     top:42
//   }
// });

$(window).load(function(){
  $("#hornav").sticky({ topSpacing: 120 });
});
$(window).load(function(){
  $("#header").sticky({ topSpacing: 0 });
});