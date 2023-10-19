let navbar=[];
var nav=[];


let nav1= document.getElementById('nav1');
document.getElementById('imageslides');
 
for(let i=1;i<=4;i++){
    navbar[i]=document.getElementById(`red${i}`);
}
for(let i=1;i<=4;i++){
function scrol(){
    console.log(window.scrollY);
     if(window.scrollY>290){
         document.getElementById('imageslide').style.border="3px solid #333"
document.getElementById('imageslide').style.backgroundImage="url('https://www.legitreviews.com/?attachment_id=208334')"
         console.log('hello');
         document.getElementById('text3').style.animation="fadeIn 4s forwards";
         document.getElementById('imageslide').style.animation="slide2 0.8s ease-in-out";
     }

     if(window.scrollY>700){
         console.log('helloworld');
        document.getElementById('lasttxt1').style.animation="fadeIn1 3s forwards";
        document.getElementById('lasttxt').style.animation="fadeIn1 3s forwards";
     }
     if(window.scrollY>720){
        document.getElementById('ends').style.opacity="1";
       
        document.getElementById('ends').style.animation="slide-in 3s ease";
     }
if(window.scrollY>2){
    nav1.style.position="fixed";
    nav1.style.backgroundColor="#CCC2C0";
    navbar[i].style.backgroundColor="#CCC2C0"
}
if(window.scrollY<=2){
    nav1.style.position="relative";
    nav1.style.backgroundColor="#333333";
    navbar[i].style.backgroundColor="#333333"
}
}

navbar[i].addEventListener('mouseover',function(){
    navbar[i].style.backgroundColor="#E5E5E5";
    navbar[i].style.fontSize="20px";
    navbar[i].style.color="#888888";
    navbar[i].style.pointer="cursor";
 navbar[i].style.boxShadow=" 10px 10px 10px rgba(255, 255, 255, 2);"
})

navbar[i].addEventListener('mouseout',function(){
    
    navbar[i].style.fontSize="16px";
    navbar[i].style.color="#fff"
    if(window.scrollY>2){
        navbar[i].style.backgroundColor="#CCC2C0";
    }
    else{
        navbar[i].style.backgroundColor="#333333";
    }
})
document.addEventListener('scroll', scrol);
}




    

