const menuBtn=document.querySelector(".navigation__toggle"),menuNav=document.querySelector(".navigation");var menuNavLinks=document.querySelectorAll(".navigation__link");menuBtn&&menuBtn.addEventListener("click",(e=>{e.preventDefault(),menuNav.classList.toggle("navigation--opened")}));for(let e of menuNavLinks)e.onclick=function(){menuNav.classList.remove("navigation--opened")};document.querySelector(".no-js")&&document.querySelector(".no-js").classList.remove("no-js");const btnModals=document.querySelectorAll(".button-order"),modal=document.querySelector(".modal");btnModals&&btnModals.forEach((e=>{e.addEventListener("click",(function(){modal&&modal.classList.remove("modal--close")}))}));