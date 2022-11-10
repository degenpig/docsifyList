
if (window.location.hostname == 'localhost') {
	console.log('running on localhost; no analytics');
} else {
	var _mtm = _mtm || [];
	_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
	var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	g.type='text/javascript'; g.async=true; g.defer=true; g.src='https://analytics-zq9gpxkk.ja7z.net/js/container_LIZ8P94j.js'; s.parentNode.insertBefore(g,s);
}

var currentUrl = location.href;
window.addEventListener('hashchange', function() {
	if (typeof _paq !== 'undefined') {
		_paq.push(['setReferrerUrl', currentUrl]);
		currentUrl = '/' + window.location.hash.substr(1);
		_paq.push(['setCustomUrl', currentUrl]);
		_paq.push(['setDocumentTitle', document.title]);

		// remove all previously assigned custom variables, requires Matomo (formerly Piwik) 3.0.2
		_paq.push(['deleteCustomVariables', 'page']);
		_paq.push(['trackPageView']);

		// make Matomo aware of newly added content
		var content = document.getElementById('content');
		_paq.push(['MediaAnalytics::scanForMedia', content]);
		_paq.push(['FormAnalytics::scanForForms', content]);
		_paq.push(['trackContentImpressionsWithinNode', content]);
		_paq.push(['enableLinkTracking']);
	}
});
