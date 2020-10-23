t=0 
draw=_=>{
createCanvas(w=720,w)
noStroke(fill('#Processing'))
rect(0,0,w,w)
for(k=30;k--;){
  for(j=10;j--;){
    for(i=10;i-->2;)
      fill(i%2?'#7bd':'#fff'),
      circle(j*86-(k%2)*43+16, 740-k*20+sin(k*TAU/30-t)*8, 10*i)
  }
  t+=.003
  }
}
