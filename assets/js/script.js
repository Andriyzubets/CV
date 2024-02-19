$(document).ready(function() {
	function getAge(dateString) {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
			age--;
		}
		return age;
	}
	if($('.cases_items .item').length > 0) {
		$(document).on('click', '.cases_items .item > a', function(event){
			event.preventDefault();
			let content = ($(this).siblings('.full_descr').html() != '') ? $(this).siblings('.full_descr').html() : '';
			if(content != '') {
				if($('.case_popup, .cpbg').length > 0) {
					$('.case_popup, .cpbg').remove();
				}
				let pop = $('<div class="case_popup"></div>').html(content).append('<a class="close" href=""></a>');
				let popBg = $('<div class="cpbg"></div>');
				$('body').append(pop);
				$('body').append(popBg);
				setTimeout(function(){
					pop.addClass('active');
					popBg.addClass('active');
					$('body').addClass('fixed');
				},400);
			}
		})
		$('.cases_items .item ul li').prepend($('<i class="fas fa-check" aria-hidden="true"></i>'))
		$(document).on('click','.case_popup .close, .cpbg', function(event){
			event.preventDefault();
			$('.case_popup, .cpbg').removeClass('active');
			$('body').removeClass('fixed');
			setTimeout(function(){
				$('.case_popup, .cpbg').remove();
			},400)
		})
	}
	$('.short_info .age').html(getAge('1986-10-17'));
	// circles
	const globalConfig = {
		"speed": 30,
		"animationSmooth": "1s ease-out",
		"strokeBottom": 5,
		"colorSlice": "#ffc107",
		"colorCircle": "#191923",
		"round": true
	}
	const elements = [].slice.call(document.querySelectorAll('.pie'));
	const circle = new CircularProgressBar('pie');
	if ('IntersectionObserver' in window) {
		const config = {
			root: null,
			rootMargin: '0px',
			threshold: 0.75,
		};
		const ovserver = new IntersectionObserver((entries, observer) => {
			entries.map((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
					circle.initial(entry.target);
					observer.unobserve(entry.target);
				}
			});
		}, config);
		elements.map((item) => {
			ovserver.observe(item);
		});
	} else {
		elements.map((element) => {
			circle.initial(element);
		});
	}
	const global = new CircularProgressBar('global', globalConfig);
	global.initial();
	// linear
	moveProgressBar();
	advsBar();

	$(window).resize(function() {
		// moveProgressBar();
		// advsBar();
	});
	function moveProgressBar() {
		$('.skills .item').each(function() {
			var dataPers = $(this).data('progress-percent');
			var getPercent = (dataPers / 100);
			var getProgressWrapWidth = $(this).width();
			var progressTotal = getPercent * getProgressWrapWidth;
			var animationLength = 2000;
			var label = $(this).find('.label');
			$(this).find('.progress').stop().animate({
				width: progressTotal
			}, animationLength);
			var start = new Date().getTime();
			setTimeout(function() {
				var now = (new Date().getTime()) - start;
				var progress = now / animationLength;

				var result = Math.floor((dataPers) * progress);
				label.html(progress < 1 ? result+'%' : dataPers+'%');
				if (progress < 1) setTimeout(arguments.callee, 10);
			}, 10);
		})
	}
	function advsBar() {
		$('.main .det_info .wrap .advantages .item .name').each(function() {
			var dataPers = $(this).data('progress-percent');
			// var getPercent = (dataPers / 100);
			// var getProgressWrapWidth = $(this).width();
			// var progressTotal = getPercent * getProgressWrapWidth;
			animationLength = 2000;
			if(dataPers < 10) {
				animationLength = 1000;
			} else if (dataPers < 100) {	
				animationLength = 1500;
			} else {
				animationLength = 2000;
			}
			var label = $(this).find('span');
			var start = new Date().getTime();
			setTimeout(function() {
				var now = (new Date().getTime()) - start;
				var progress = now / animationLength;

				var result = Math.floor((dataPers) * progress);
				label.html(progress < 1 ? result : dataPers);
				if (progress < 1) setTimeout(arguments.callee, 10);
			}, 10);
		})
	}

	// end linear progress
	// type words
	var typed = new Typed('.det_info .hero .code .inline', {
		strings: [
			'modern web sites.',
			'various integrations.',
			'Healthcare platforms',
			'AI integrations.',
			'analytic dashboards.',
			'Wordpress sites.',
			'Opencart sites.',
			'Codeigniter sites.',
			'self-written cms.'
			],
		stringsElement: null,
		typeSpeed: 100,
		startDelay: 0,
		backSpeed: 50,
		smartBackspace: true,
		shuffle: false,
		backDelay: 700,
		fadeOut: false,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		loop: true,
		loopCount: Infinity,
		showCursor: true,
		cursorChar: '|',
		autoInsertCss: true,
		attr: null,
		bindInputFocusEvents: false,
		contentType: 'html'
	});
	// type words end
	// works
	setTimeout(function(){
		var file = 'https://script.google.com/macros/s/AKfycbxyYGCMBcDh33VrBhLUsL6kx8nbOrT70mlsOBeN4MppTxtLpC5LUT_Jen9DwgXPhLtEug/exec';
		var xhr = new XMLHttpRequest();
		xhr.open('GET', file, false);
		xhr.send();
		if (xhr.status != 200) {
			console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
		} else {
			$('.main .det_info .wrap .works .box').css('opacity','0');
			setTimeout(function(){
				$('.main .det_info .wrap .works .box').hide();
				var data = JSON.parse(xhr.responseText);
				arr = data.result;
				arr.forEach(function(item, i, arr) {
					$('<div class="item h"><a href="'+item[1]+'" class="title" target="_blank" rel="nofollow">'+item[2]+'</a><p>'+item[0]+'</p><span>'+item[3]+'</span></div>').appendTo('.works .items');
				});
				var its = setInterval(opn, 100);
				$('.main .det_info .wrap .works .more').show();
				function opn(){
					if($('.main .det_info .wrap .works .item.h').length == 0) {
						clearInterval(its);
					} else {
						$('.main .det_info .wrap .works .item.h:eq(0)').removeClass('h');
					}
				}
			},400)
		}
	},2000)
	$('.main .det_info .wrap .works .more').click(function(event){
		event.preventDefault();
		if($('.main .det_info .wrap .works .item').length > 0) {
			$('.main .det_info .wrap .works .items').addClass('open');
			$(this).hide()
		}
	})
	// end works
	$('.m_toggle').click(function(event){
		event.preventDefault();
		$('body').toggleClass('op')
		$('.m_toggle').toggleClass('active')
		$('.short_info').toggleClass('active')
		$('.sibg').toggleClass('active')
	})
	$('.sibg').click(function(event){
		event.preventDefault();
		$('body').removeClass('op')
		$('.m_toggle').removeClass('active')
		$('.short_info').removeClass('active')
		$('.sibg').removeClass('active')
	})
});
