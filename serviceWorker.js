// prob not needed



function connect () {
	// window.dispatchEvent(new Event('arweave-wallet-connector:connect'));
};

async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 	chrome.scripting.executeScript({
// 		target: { tabId: tabs[0].id, allFrames: true },
// 		function: connect
// 	});
// });


chrome.action.setBadgeText({text: 'Link'});
chrome.action.setBadgeBackgroundColor({color: '#4688F1'});