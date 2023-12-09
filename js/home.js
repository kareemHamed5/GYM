document.querySelectorAll(".header .container ul li a").forEach((el) => {
  el.onclick =()=> {
    document.querySelector(".header .container ul li .active").classList.remove("active");
    el.classList.add("active");
  }
})

let bars =document.querySelector('.fa-bars')
bars.onclick = (e) => {
  document.querySelector(".header .container ul").classList.toggle("ul-res");
}

let arr_scl = document.querySelector(".arr-scl")

window.onscroll = () => { 
  if (window.scrollY >= 400) {
    arr_scl.classList.add("arr-scl-act")
    document.querySelector(".header").classList.add("header-scl")
  } else {
    document.querySelector(".header").classList.remove("header-scl")
    arr_scl.classList.remove("arr-scl-act")
  }
}

arr_scl.addEventListener("click", () => { 
  window.scrollTo({
    top:0
  })
})


let height= document.documentElement.scrollHeight - document.documentElement.clientHeight
window.addEventListener("scroll", () => { 
  let line = document.querySelector('.line-scl')
  let scrolltop = document.documentElement.scrollTop
  let width = `${(scrolltop / height ) * 100}% ` 
  line.style.width = width 
})

document.querySelector(".fa-x").onclick = () => { 
  document.querySelector(".header .container ul").classList.remove("ul-res");
}

document.querySelectorAll(".inform .box #count").forEach((el) => {
  let set=setInterval(() => {
    el.innerHTML++ 
    if ( el.innerHTML == el.getAttribute("data-num")) {
      clearInterval(set)
}
}, 50);


})