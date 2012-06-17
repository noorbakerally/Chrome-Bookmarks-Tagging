'use strict';

var module = angular.module('BookmarksManager', []);

/* Controllers */
module.controller('BookmarksManagerController', function ($scope) {
	//Localization
	$scope.JSbookmarksManagerTitle = chrome.i18n.getMessage('JSbookmarksManagerTitle');
	$scope.JSsearch = chrome.i18n.getMessage("JSsearch");

	//Listeners
	$scope.click = function() {
		switch (this.child.command) {
			case "import": chrome.bookmarks.import();
							break;
			case "export": chrome.bookmarks.export();
							break; 
		}
	}

	//Menu
	$scope.menuItems = [
		{
			value: chrome.i18n.getMessage("JSadd"),
			children: [
				{
					value: chrome.i18n.getMessage("JSaddPage")
				},
				{
					value: chrome.i18n.getMessage("JSaddFolder")
				}
			]
		},
		{
			value: chrome.i18n.getMessage("JSedit"),
			children: [
				{
					value: chrome.i18n.getMessage("JScut")
				},
				{
					value: chrome.i18n.getMessage("JScopy")
				},
				{
					value: chrome.i18n.getMessage("JSpaste")
				},
				{
					value: chrome.i18n.getMessage("JSrename")
				},
				{
					value: chrome.i18n.getMessage("JSdelete")
				}
			]
		},
		{
			value: chrome.i18n.getMessage("JSimport_export"),
			children: [
				{
					value: chrome.i18n.getMessage("JSimport"),
					command: "import"
				},
				{
					value: chrome.i18n.getMessage("JSexport"),
					command: "export"
				}
			]
		}
	];
});
