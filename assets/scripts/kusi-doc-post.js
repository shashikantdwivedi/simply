/*!
 * simply v0.3.6
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */!function n(o,i,c){function s(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return s(o[t][1][e]||e)},r,r.exports,n,o,i,c)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,r){"use strict";document.addEventListener("DOMContentLoaded",function(){var e,i,t=document.querySelector(".js-kusi-doc");!t||(e=t.querySelectorAll(["h2","h3"].join(","))).length&&(i=document.querySelector(".js-table-content"),(t=document.querySelector(".js-sidebar-right"))&&t.classList.add("lg:block"),e.forEach(function(e){e.classList="hover-title";var t,r,n,o=document.createElement("a");o.href="#".concat(e.getAttribute("id")),t=o.cloneNode(!0),r=e,i&&(t.textContent=r.textContent,n=document.createElement("li"),r.closest("h3")?t.classList="py-2 px-3 docstoc block hover:text-primary":t.classList="py-2 px-3 block hover:text-primary",n.appendChild(t),i.appendChild(n)),e=e,(o=o).setAttribute("aria-hidden","true"),o.innerHTML='<svg class="icon is-stroke" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>',o.classList="anchor px-3 inline-block invisible opacity-0 -ml-12 text-gray-500",e.insertBefore(o,e.childNodes[0])}))})},{}]},{},[1]);