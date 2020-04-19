/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/
AOS.init({duration: 1000, mirror: true, ease: "ease-in-out-quart"});
$(document).ready(function() {
	var app = document.getElementById("typewriter");
	var typewriter = new Typewriter(app, {
		loop: true,
		strings: [
			"Graphics Programmer",
			"Software Developer",
			"Simulation Researcher",
			"Data Science"
		],
		autoStart: true
	});
	setTimeout(function() {
		$("#mobile-menu-open").addClass("fixed");
	}, 1000);
	$("#mobile-menu-open").css("position", "fixed");
});

(function($) {
	// Remove no-js class
	$("html").removeClass("no-js");

	// Animate to section when nav is clicked
	$("header a").click(function(e) {
		// Treat as normal link if no-scroll class
		if ($(this).hasClass("no-scroll")) return;

		e.preventDefault();
		var heading = $(this).attr("href");
		var scrollDistance = $(heading).offset().top;

		$("html, body").animate(
			{
				scrollTop: scrollDistance + "px"
			},
			Math.abs(window.pageYOffset - $(heading).offset().top) / 1
		);

		// Hide the menu once clicked if mobile
		if ($("header").hasClass("active")) {
			$("header, body").removeClass("active");
		}
	});

	// Scroll to top
	$("#to-top").click(function() {
		$("html, body").animate(
			{
				scrollTop: 0
			},
			500
		);
	});

	// Scroll to first element
	$("#lead-down span").click(function() {
		var scrollDistance = $("#lead")
			.next()
			.offset().top;
		$("html, body").animate(
			{
				scrollTop: "scrollDistance" + "px"
			},
			500
		);
	});

	// Open mobile menu
	$("#mobile-menu-open").click(function() {
		$("header, body").addClass("active");
	});

	// Close mobile menu
	$("#mobile-menu-close").click(function() {
		$("header, body").removeClass("active");
	});

	// Load additional projects
	$("#view-more-projects").click(function(e) {
		e.preventDefault();
		$(this).fadeOut(300, function() {
			$("#more-projects").fadeIn(300);
		});
	});

	$(document).ready(function() {
		var baseData = {
			datasets: [
				{
					data: [100, 50, 200, 150, 40],
					backgroundColor: ["#60BD68", "#5DA5DA", "#FAA43A", "#F15854", "#a6d746"]
				}
			],
			labels: [
				"Web Development",
				"Data Science",
				"Programming",
				"Graphics",
				"Others"
			],
			hoverBorderWidth: 8
		};
		var baseoptions = {
			rotation: 0 * Math.PI,
			circumference: 2 * Math.PI,
			elements: {
				arc: {
					borderWidth: 3
				}
			},
			tooltips: {
				displayColors: false,
				enabled: true,
				mode: "single",
				callbacks: {
					label: function(tooltipItems, data) {
						return data.labels[tooltipItems.index];
					},
					afterLabel: function(tooltipItems, data) {
						return "Click Me!";
					}
				}
			},
			legend: {
				position: "right",
				onClick: function(event, legendItem) {},
				labels: {
					fontSize: 20,
					fontColor: "#ffffff"
				}
			},
			segmentShowStroke: false
		};
		var canvas = document.getElementById("mySkills");
		var ctx = canvas.getContext("2d");
		var myNewChart = new Chart(ctx, {
			type: "doughnut",
			data: baseData,
			options: baseoptions
		});
		canvas.onclick = function(evt) {
			var activePoints = myNewChart.getElementsAtEvent(evt);
			if (activePoints[0]) {
				var chartData = activePoints[0]["_chart"].config.data;
				var idx = activePoints[0]["_index"];

				var label = chartData.labels[idx];
				var data = baseData;
				var options = baseoptions;
				options.circumference = 2 * Math.PI;
				if (label == baseData.labels[0]) {
					var data = {
						datasets: [
							{
								data: [150, 150, 100, 100],
								backgroundColor: ["#208326", "#8DD692", "#BDEAC0", "#3A9F41", "#60BD66"]
							}
						],
						labels: ["Django", "Symfony-PHP", "Perl"]
					};
				} else if (label == baseData.labels[1]) {
					var data = {
						datasets: [
							{
								data: [35, 20, 20],
								backgroundColor: ["#85C0E9", "#3C8EC8", "#1D74B2", "#B9DDF6", "#5DA6DA"]
							}
						],
						labels: ["R", "Mathlab", "Pytorch"]
					};
				} else if (label == baseData.labels[2]) {
					var data = {
						datasets: [
							{
								data: [50, 30, 10, 10],
								backgroundColor: ["#E5840D", "#FFB75F", "#fbcd94", "#fad9b0"]
							}
						],
						labels: ["C/C++", "Python", "Haskell", "Prolog"]
					};
				} else if (label == baseData.labels[3]) {
					var data = {
						datasets: [
							{
								data: [30, 50, 40],
								backgroundColor: ["#AF1915", "#DB322E", "#FF7F7C", "#FFA9A7", "#F15854"]
							}
						],
						labels: ["Qt", "OpenGL", "SFML"]
					};
				} else if (label == baseData.labels[4]) {
					var data = {
						datasets: [
							{
								data: [30, 50, 40, 20],
								backgroundColor: ["#91d016", "#a6d746", "#b3d96a", "#b6cd87"]
							}
						],
						labels: ["Docker", "Git", "CI-CD", "Atom"]
					};
				} else {
					options.rotation = 0;
					options.circumference = 2 * Math.PI;
				}
				myNewChart.destroy();
				myNewChart = new Chart(ctx, {
					type: "doughnut",
					data: data,
					options: options
				});
			}
		};
	});
})(jQuery);
