jQuery Geofetch
===============

Geofetch is a jQuery plugin to facilitate interacting with Geo APIs while
creating a standardized data structure compatible with the GeoJSON spec and
additionally standardizing the data source features for ease of use. Long term
I want to use this as a data provider for
[geojquery](http://geojquery.org/wiki/doku.php?id=start).

This is a very early prototype and also my first foray into jQuery plugins,
so any suggestions or comments are welcome. Right now this supports flickr
because as of tonight I am using flickr. Although I would like to wrap as
many Geo data sources as possible.

Getting Started
---------------

You can look in examples/demo.html for a simple example. The basic code
is quite simple:

	var geofetch = $.geofetch({flickr_api_key: '<YOUR FLICKR API KEY HERE>'});
	geofetch.flickr({
		lng: -122.3122, lat: 47.642289,
		callback: function(data) {
			var list = $('ul#results');
			$.each(data, function(i, item) {
				list.append('<li>'+item.imageSrc+item.title+'</li>');
			});
		}
	});

Links
-------
* [geofetch](http://github.com/chewbranca/geofetch)
* [jquery.geofetch.js](http://github.com/chewbranca/geofetch/raw/master/jquery.geofetch.js)

-------------------------

License
-------

(The MIT License)

Copyright (c) 2010 Russell Branca

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
