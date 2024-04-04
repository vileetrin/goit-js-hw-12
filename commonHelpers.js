import{a as L,S as b,i as u}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function h(s,r){const i="https://pixabay.com/api/",e={key:"43086871-ad01a7cbad34982c2244ec443",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};try{const t=await L.get(i,{params:e});if(t.status!==200)throw new Error("Error");return t.data}catch(t){throw iziToast.error({title:"Error",message:"Error during API call",position:"topRight"}),t}}const w=new b(".gallery a",{});function m(s,r){const i=s.map(o=>`<div class="section">
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
      </div>`).join("");r.insertAdjacentHTML("beforeend",i),w.refresh()}const f=document.querySelector(".form"),p=document.querySelector(".gallery"),d=document.querySelector(".loader"),n=document.querySelector(".load-button");let c=1,a,g=0;f.addEventListener("submit",E);n.addEventListener("click",P);async function E(s){if(s.preventDefault(),p.innerHTML="",c=1,d.classList.remove("hidden"),a=f.elements.searchInput.value.trim(),a===""){d.classList.add("hidden"),u.error({title:"Error",message:"Please enter word to search!",position:"topRight"});return}try{const r=await h(a,c);if(g=Math.ceil(r.total/15),r.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.classList.add("hidden");return}m(r.hits,p),v(),y()}catch(r){console.error("Error:",r)}finally{d.classList.add("hidden")}}async function P(){const s=await h(a,c+=1);m(s.hits,p),v(),y()}function y(){c>=g?(n.classList.add("hidden"),u.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):n.classList.remove("hidden")}function v(){scrollBy({top:500,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
