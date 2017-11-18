// fancybox - всплывающие окна
$(document).ready(function() {
            $("a[rel ^= ex]").fancybox({
                'transitionIn'      : 'none',
                'transitionOut'     : 'none',
                'titlePosition'     : 'over',
                'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
                    return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
                }
            });
            $("a[rel ^= var]").fancybox({
                'titlePosition'     : 'outside',
                'transitionIn'      : 'none',
                'transitionOut'     : 'none'
            });
        });