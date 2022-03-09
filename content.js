const el = document.createElement('script');
el.src = chrome.runtime.getURL('build/build.js');
el.onload = () => el.remove();
(document.head || document.documentElement).appendChild(el);

// document.querySelector('#connect')?.addEventListener('click', () =>  {
//     chrome.runtime.sendMessage({ message: 'login' }, (response) =>  {
//         alert('ok');
//         if (response.message === 'success'){ 
//             console.log(response.profile);            
//         }
//     });
// });