(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});window.addEventListener("DOMContentLoaded",function(){var o=document.querySelector(".video");o.addEventListener("click",function(){o.classList.contains("ready")||(o.classList.add("ready"),o.insertAdjacentHTML("afterbegin",'  <iframe class="youtube-video" src="https://www.youtube.com/embed/DISjdfkSjc8?autoplay=1" width="100%" autoplaytitle="YouTube video player"frameborder="15px"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>'))})});(()=>{const o={openModalBtn:document.querySelector("[data-modal-subscribe-open]"),closeModalBtn:document.querySelector("[data-modal-subscribe-close]"),submitModalBtn:document.querySelector("[data-modal-subscribe-submit]"),modal:document.querySelector("[data-modal-subscribe]")};o.openModalBtn.addEventListener("click",r),o.closeModalBtn.addEventListener("click",r),o.submitModalBtn.addEventListener("click",r);function r(){o.modal.classList.toggle("is-hidden")}})();
