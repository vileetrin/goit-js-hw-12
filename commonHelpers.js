import{a as L,S as b,i as a}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function h(s,r){const i="https://pixabay.com/api/",e={key:"43086871-ad01a7cbad34982c2244ec443",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};try{const t=await L.get(i,{params:e});if(t.status!==200)throw new Error("Error");return t.data}catch(t){throw iziToast.error({title:"Error",message:"Error during API call",position:"topRight"}),t}}const w=new b(".gallery a",{});function m(s,r){const i=s.map(o=>`<div class="section">
        <a href="${o.largeImageURL}"
          ><img
            src="${o.webformatURL}"
            alt="${o.tags}"
            class="gallery-image"
        /></a>
        <div class="params">
          <div>
            <h3>Likes</h3>
            <p>${o.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${o.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${o.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${o.downloads}</p>
          </div>
        </div>
      </div>`).join("");r.insertAdjacentHTML("beforeend",i),w.refresh()}const f=document.querySelector(".form"),p=document.querySelector(".gallery"),u=document.querySelector(".loader"),c=document.querySelector(".load-button");let l=1,n,g=0;f.addEventListener("submit",E);c.addEventListener("click",P);async function E(s){if(s.preventDefault(),p.innerHTML="",l=1,u.classList.remove("hidden"),n=f.elements.searchInput.value.trim(),n===""){u.classList.add("hidden"),a.error({title:"Error",message:"Please enter word to search!",position:"topRight"});return}try{const r=await h(n,l);if(g=Math.ceil(r.total/15),r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.classList.add("hidden");return}m(r.hits,p),v(),y()}catch{a.error({title:"Error",message:"Error",position:"topRight"})}finally{u.classList.add("hidden")}}async function P(){const s=await h(n,l+=1);m(s.hits,p),v(),y()}function y(){l>=g?(c.classList.add("hidden"),a.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):c.classList.remove("hidden")}function v(){scrollBy({top:500,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
