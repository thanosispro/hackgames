let navbar=[];
var nav=[];


let nav1= document.getElementById('nav1');

 
for(let i=1;i<=4;i++){
    navbar[i]=document.getElementById(`red${i}`);
}
for(let i=1;i<=4;i++){
  navbar[i].addEventListener('mouseover',function(){
    navbar[i].style.backgroundColor="#E5E5E5";
    navbar[i].style.fontSize="20px";
    navbar[i].style.color="#888888";
    navbar[i].style.pointer="cursor";
 navbar[i].style.boxShadow=" 10px 10px 10px rgba(255, 255, 255, 2);"
})

navbar[i].addEventListener('mouseout',function(){
    
  navbar[i].style.fontSize="16px";
  navbar[i].style.color="#fff";
  navbar[i].style.backgroundColor="#333333";
})}