(()=>{window.addEventListener("DOMContentLoaded",()=>{let n=document.querySelector("iframe"),t=n.contentWindow;n.src="https://arweave.app/extension";let o=async()=>{let e=await chrome.tabs.query({active:!0,currentWindow:!0});t.postMessage({origin:new URL(e[0].url).origin},"https://arweave.app")},r=async e=>{let s=await chrome.tabs.query({active:!0,currentWindow:!0});chrome.tabs.sendMessage(s[0].id,{from:"popup",subject:e}),window.close()};top.window.addEventListener("message",e=>{e.source!==t||e.origin!=="https://arweave.app"||(e.data==="arweave-app-extension:connect"&&r("connect"),e.data==="arweave-app-extension:permissions"&&chrome.runtime.openOptionsPage(),e.data==="arweave-app-extension:state"&&o())})});})();
//# sourceMappingURL=popup.js.map
