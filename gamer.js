let navbar=[];
var nav=[];


let nav1= document.getElementById('nav1');

 
for(let i=1;i<=4;i++){
    navbar[i]=document.getElementById(`red${i}`);
}

for(let i=1;i<=4;i++){
    function scrol(){

        if(window.scrollY>780){
            document.getElementById('ends').style.opacity="1";
           
            document.getElementById('ends').style.animation="slide-in 3s ease";
         }
    if(window.scrollY>2){
        nav1.style.border="1px solid rgba(255, 255, 255, 0.5)";
        nav1.style.position="fixed";
        nav1.style.backgroundColor="rgba(0, 0, 0, 0.5)";
        navbar[i].style.backgroundColor="rgba(0, 0, 0, 0.00000000001)";
    }
    if(window.scrollY<=2){
        nav1.style.border="none";
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
            navbar[i].style.backgroundColor="none";
            navbar[i].style.backgroundColor="rgba(0, 0, 0, 0.0000000001)";
        }
        else{
            navbar[i].style.backgroundColor="#333333";
        }
    })
    document.addEventListener('scroll', scrol);
}