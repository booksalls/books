	function fetchOffers() {
		jQuery('.dl_button').hide();
		jQuery('#offerlst').show('slow');
		
		const apiUrl = "https://d12zgccgt6pwjz.cloudfront.net/public/offers/feed.php?user_id=590473&api_key=96e9ead8d36c9ed0d8a5c5f08af2b408&s1=&s2=";
		$.getJSON(apiUrl, function(offers) {
			var html = '';
			var numOffers = 5; // Change to trim offers. Max is 10.
			offers = offers.splice(0, numOffers);
			$.each(offers, function(key, offer) {
				var encodedUrl = btoa(offer.url); // Encode the URL using base64
				html += '<div><a href="#" class="offer-link encoded-link" data-url="' + encodedUrl + '" title="' + offer.conversion + '">' + offer.anchor + '</a></div>';
			});
			$('#offerlst').html(html);

			// Add click event for encoded links
			$('.encoded-link').on('click', function(event) {
				event.preventDefault();
				var encodedUrl = $(this).data('url');
				var decodedUrl = atob(encodedUrl); // Decode the URL using base64
				window.open(decodedUrl, '_blank');
			});
		})
		.fail(function() {
			console.error('Error fetching offers');
		});
	}

	function Back_Ajax() {
		jQuery('#offerwait').hide();
		jQuery('#offerlst').fadeIn('slow');
	}
