(()=>{window.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector("iframe").contentWindow,n=async e=>{let o=await chrome.tabs.query({active:!0,currentWindow:!0});chrome.tabs.sendMessage(o[0].id,{from:"popup",subject:e}),window.close()},a=async()=>{let e=await chrome.tabs.query({active:!0,currentWindow:!0});t.postMessage({origin:new URL(e[0].url).origin})};top.window.addEventListener("message",e=>{e.source!==t||e.origin!=="https://arweave.app"||(e.data==="arweave-app-extension:connect"&&n("connect"),e.data==="arweave-app-extension:permissions"&&chrome.runtime.openOptionsPage(),e.data==="arweave-app-extension:state"&&a())})});})();
//# sourceMappingURL=popup.js.map
