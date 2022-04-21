(()=>{var e=document.createElement("script");e.src=chrome.runtime.getURL("build/wrapper.js");e.onload=()=>e.remove();(document.head||document.documentElement).appendChild(e);chrome.runtime.onMessage.addListener((n,c,t)=>{if(n.from!=="popup")return t();n.subject==="connect"&&window.dispatchEvent(new Event("arweave-app-extension:connect")),t()});})();
//# sourceMappingURL=content.js.map
