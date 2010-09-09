(function($) {
	$.geofetch = function(user_options) {
		var defaults = {
			flickr_api_key: false
		};

		var options = $.extend(defaults, user_options);

		function flickrImg(img) {
			var url = "http://farm"+img.farm+".static.flickr.com/"+img.server+"/"+img.id+"_"+img.secret+"_t.jpg";
			return '<img src="'+url+'" title="'+img.title+'" />';
		}

		return {
			flickr: function(flickr_options) {
				var default_flickr_options = {
					callback: function(data) {}
				};
				var foptions = $.extend(default_flickr_options, flickr_options);
				// TODO:: add support for bbox queries
				var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+options.flickr_api_key+"&lat="+foptions.lat+"&lon="+foptions.lng+"&accuracy=16&format=json&extras=geo&jsoncallback=?";
				$.getJSON(url, function(data) {
					var results = [];
					$.each(data.photos.photo, function(i, photo) {
						results.push({
							geometry: {
								type: "Point",
								coordinates: [photo.longitude, photo.latitude]
							},
							title: photo.title,
							woeid: photo.woeid,
							imageSrc: flickrImg(photo),
							raw: photo
						});
					});
					foptions.callback(results);
				});
			}
		};
	};
})(jQuery);
