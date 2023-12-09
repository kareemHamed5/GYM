document.querySelectorAll(".container .input input").forEach((el,y) => {
  el.on = () => {
    document.querySelector(".container .input .label").classList.toggle('label-act')
  }
})