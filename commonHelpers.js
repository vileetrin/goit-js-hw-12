import{a as L,S as b,i as d}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function m(s,r){const a="https://pixabay.com/api/",e={key:"43086871-ad01a7cbad34982c2244ec443",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};try{const t=await L.get(a,{params:e});if(t.status!==200)throw new Error("Error");return t.data}catch(t){throw console.error("Error:",t),t}}const w=new b(".gallery a",{});function f(s,r){const a=s.map(o=>`<div class="section">
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
      </div>`).join("");r.insertAdjacentHTML("beforeend",a),w.refresh()}const h=document.querySelector(".form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader"),p=document.querySelector(".load-button");let n=1,i,g=0;h.addEventListener("submit",E);p.addEventListener("click",S);async function E(s){if(s.preventDefault(),u.innerHTML="",n=1,l.classList.remove("hidden"),i=h.elements.searchInput.value.trim(),i===""){l.classList.add("hidden"),d.error({title:"Error",message:"Please enter word to search!",position:"topRight"});return}try{const r=await m(i,n);if(g=Math.ceil(r.total/15),r.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(r.hits,u),v(),y()}catch(r){console.error("Error:",r)}finally{l.classList.add("hidden")}}async function S(){const s=await m(i,n+=1);f(s.hits,u),v(),y()}function y(){n>=g?(p.classList.add("hidden"),d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):p.classList.remove("hidden")}function v(){scrollBy({top:500,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
