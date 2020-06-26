var stars=document.querySelector('.stars')

window.onload=function(){
  for(var i=0;i<800;i++){
    var star= document.createElement('p')
    stars.appendChild(star)
  }
let starArr = document.querySelectorAll('p')
starArr.forEach(item => {
let speed = 0.2 + (Math.random() * 1);
let thisDistance = 800 + (Math.random() * 300);
item.style.transformOrigin = `0 0 ${thisDistance}px`;
item.style.transform = `
translate3d(0,0,-${thisDistance}px)
rotateY(${Math.random() * 360}deg)
rotateX(${Math.random() * -50}deg)
scale(${speed},${speed})`;
})
}
