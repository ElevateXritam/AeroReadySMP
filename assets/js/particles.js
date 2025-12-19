const canvas=document.createElement("canvas");
document.body.appendChild(canvas);
const c=canvas.getContext("2d");

function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
resize();window.onresize=resize;

const particles=[];
for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    v:Math.random()*0.5+0.2
  });
}

function animate(){
  c.clearRect(0,0,canvas.width,canvas.height);
  c.fillStyle="rgba(34,197,94,0.6)";
  particles.forEach(p=>{
    p.y+=p.v;
    if(p.y>canvas.height)p.y=0;
    c.beginPath();
    c.arc(p.x,p.y,p.r,0,Math.PI*2);
    c.fill();
  });
  requestAnimationFrame(animate);
}
animate();
