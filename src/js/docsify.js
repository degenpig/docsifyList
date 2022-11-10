
window.$docsify = {

	loadSidebar: true,
	// loadNavbar: true,

	basePath: '/docs/',

	// homepage: "email2at/text-replacement/README.md",

	search: "auto",

	auto2top: true,
	name: `<div class="logo"><img src="assets/mspintegrations-logo.png"/></div>`,

	// How many page-level headers to include in sidebar when the page is active
	// subMaxLevel: 2,

	// Add a header to each page that matches the name of the page from the sidebar
	autoHeader: true,

	maxLevel: 1,
	subMaxLevel: 0,

	notFoundPage: true,

	coverpage: false,

	noEmoji: true,

	toc: {
		title: 'On this page',
	},

	'page-toc': {
		// tocMaxLevel: 3,
		// target: 'h1, h2, h3'
	},

	markdown: {

		renderer: {
			code: function (code, lang) {
				if (lang === "mermaid") {
					return (
						'<div class="mermaid">' + mermaid.render('mermaid-svg-' + Date.now(), code) + "</div>"
					);
				}
				return this.origin.code.apply(this, arguments);
			}
		},
	},

	// Local Plugins
	// ---------------------------------------------------------------------------
	plugins: [

		// Init mermaid
		function (hook) {
			hook.init(function() {
				mermaid.initialize({ startOnLoad: false });
			});
		},

		// Ensure that feather icons are drawn at each page load
		function(hook, vm) {
			hook.doneEach(feather.replace);
		},

		// Add copyright footer
		function(hook) {
			var footer = [
				'<footer style="text-align: center;margin-top: 50px;">',
				`<span>Copyright © 2009-${new Date().getFullYear()} MSPintegrations.com</span>`,
				'</footer>'
			].join('');

			hook.afterEach(function(html) {
				return html + footer;
			});
		},

		// Replace tokens like [btn]...[/btn] with css like <span class="ui-button"></span>
		function(hook) {
			let replacements = {
				'[kbd]': `<kbd class="kbc-button kbc-button-xxs">`,
				'[/kbd]': `</kbd>`,

				'[btn]': `<kbd class="kbc-button kbc-button-xxs">`,
				'[/btn]': `</kbd>`,

				'[type]': `<span class="ui-type" title="Click to copy to clipboard">`,
				'[/type]': `</span> <i data-feather="clipboard"></i>`,

				'[field]': `<span class="ui-field">`,
				'[/field]': `</span>`,

				'[menu]': `<span class="ui-menu-item">`,
				'[/menu]': `</span>`,

				'[ui-element]': `<span class="ui-element">`,
				'[/ui-element]': `</span>`,

				'[entity]': `<span class="ui-entity">`,
				'[/entity]': `</span>`,
			};

			hook.afterEach(function(html) {
				for (const tag in replacements) {
					html = html.replaceAll(tag, replacements[tag]);
				}
				return html;
			});

			hook.doneEach(function(html) {
				$('.ui-type').click(function() {
					var $temp = $("<input>");
					$("body").append($temp);
					$temp.val($(this).text()).select();
					document.execCommand("copy");
					$temp.remove();
					$('.ui-tooltip-content').text("Copied");
				});

				$(document).ready(function () {
					$('.sidebar-nav>ul>li ul').show();
					$('li.folder > a').click(function (e) {
						$(this).next('ul').slideToggle();
					})
					$('li.folder > strong').click(function (e) {
						$(this).next('ul').slideToggle();
					})
				});

				$('.docsify-copy-code-button').click(function(){
					$(this)[0].innerText = "Copied";
					console.log($(this)[0].innerText);
				});

				$('.ui-type').tooltip();

				// console.log($('.ui-type').tooltip());
				return html;
			});
		},

		// Rename table of contents title
		function(hook) {
			hook.doneEach(function() {
				const nav = window.Docsify.dom.find(".nav");
				if (nav) {
					// override the toc title
					const title = window.$docsify["toc"].title;
					const titleEl = window.Docsify.dom.find(".page_toc p.title");
					if (titleEl && title) {
						titleEl.innerHTML = title;
					}
				}
			});
		},

	],

	// Plugin: @imyelo/docsify.js-pagination
	// ---------------------------------------------------------------------------
	pagination: {
		crossChapter: true,
		crossChapterText: false,
	},

}
