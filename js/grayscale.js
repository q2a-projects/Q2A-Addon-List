// jQuery to collapse the navbar on scroll
function collapseNavbar() {
		if ($(".navbar").offset().top > 50) {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
}
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
		$('a.page-scroll').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
						scrollTop: $($anchor.attr('href')).offset().top
				}, 1000, 'easeInOutExpo');
				event.preventDefault();
		});
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
		$(".navbar-collapse").collapse('hide');
});


/*
Render Plugin List
*/

var plugin_list_options = {
	valueNames: [ 'plugin-title', 'plugin-category', 'plugin-author','plugin-cost' ],
	page: 5,
	pagination: [{
		paginationClass: "plugin-pagination",
		innerWindow: 6,
		left: 2,
		right: 2
	}],
};

var pluginList = new List('plugin-list-container', plugin_list_options);

filterCategory = 'all';
filterPrice = 'all';

function run_plugin_filter(category,price) {
	pluginList.filter(function(item) {
		val = item.values();
		category_value = val['plugin-category'];
		cost_value = val['plugin-cost'];
		accept_category = false;
		accept_price = false;
		if (category=='all' || category==category_value)
			accept_category = true;
		if (price=='all' || (price=='free' && cost_value=='Free') || (price=='paid' && cost_value!='Free'))
			accept_price = true;
		return accept_category && accept_price;
	});
	// don't show pagination if there is only one page
	if( pluginList.matchingItems.length < 5 ) // the Page value in option
		$('.plugin-pagination').hide();
	else
		$('.plugin-pagination').show();

	return false;
}


$('.plugin-filter-cost-all').click(function() {
	filterPrice = 'all';
	run_plugin_filter(filterCategory,filterPrice);
});
$('.plugin-filter-cost-free').click(function() {
	filterPrice = 'free';
	run_plugin_filter(filterCategory,filterPrice);
});
$('.plugin-filter-cost-paid').click(function() {
	filterPrice = 'paid';
	run_plugin_filter(filterCategory,filterPrice);
});

$('.filter-plugin').click(function() {
	$('.filter-plugin-list li').removeClass("filter-active");
	$(this).addClass("filter-active");

	filterCategory = $(this).html();
	run_plugin_filter(filterCategory,filterPrice);
});

$('.filter-plugin-none').click(function() {
	$('.filter-plugin-list li').removeClass("filter-active");
	$(this).addClass("filter-active");

	filterCategory = 'all';
	run_plugin_filter(filterCategory,filterPrice);
	return false;
});

/*
Render Theme List
*/

var plugin_list_options = {
	valueNames: [ 'theme-title', 'theme-category', 'theme-author','theme-cost' ],
	page: 5,
	pagination: [{
		paginationClass: "theme-pagination",
		innerWindow: 6,
		left: 2,
		right: 2
	}],
};

var themeList = new List('theme-list-container', plugin_list_options);

filterCategory = 'all';
filterPrice = 'all';

function run_theme_filter(category,price) {
	themeList.filter(function(item) {
		val = item.values();
		category_value = val['theme-category'];
		cost_value = val['theme-cost'];
		accept_category = false;
		accept_price = false;
		if (category=='all' || category==category_value)
			accept_category = true;
		if (price=='all' || (price=='free' && cost_value=='Free') || (price=='paid' && cost_value!='Free'))
			accept_price = true;
		return accept_category && accept_price;
	});
	// don't show pagination if there is only one page
	if( themeList.matchingItems.length < 5 ) // the Page value in option
		$('.theme-pagination').hide();
	else
		$('.theme-pagination').show();

	return false;
}


$('.theme-filter-cost-all').click(function() {
	filterPrice = 'all';
	run_theme_filter(filterCategory,filterPrice);
});
$('.theme-filter-cost-free').click(function() {
	filterPrice = 'free';
	run_theme_filter(filterCategory,filterPrice);
});
$('.theme-filter-cost-paid').click(function() {
	filterPrice = 'paid';
	run_theme_filter(filterCategory,filterPrice);
});

$('.filter-theme').click(function() {
	$('.filter-theme-list li').removeClass("filter-active");
	$(this).addClass("filter-active");

	filterCategory = $(this).html();
	run_theme_filter(filterCategory,filterPrice);
});

$('.filter-theme-none').click(function() {
	$('.filter-theme-list li').removeClass("filter-active");
	$(this).addClass("filter-active");

	filterCategory = 'all';
	run_theme_filter(filterCategory,filterPrice);
	return false;
});