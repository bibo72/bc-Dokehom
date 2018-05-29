import PageManager from './page-manager';

export default class Home extends PageManager {
	loaded() {
		if ($("#homepage_brandCarousel").length > 0) {
			$("#homepage_brandCarousel").slick({
				"dots": false,
				"infinite": true,
				"mobileFirst": true,
				"slidesToShow": 2,
				"slidesToScroll": 2,
				"responsive": [{
					"breakpoint": 1260,
					"settings": {
						"slidesToScroll": 3,
						"slidesToShow": 4
					}
				}, {
					"breakpoint": 800,
					"settings": {
						"slidesToScroll": 3,
						"slidesToShow": 4
					}
				}, {
					"breakpoint": 550,
					"settings": {
						"slidesToScroll": 3,
						"slidesToShow": 3
					}
				}]
			});

		}
	}
}