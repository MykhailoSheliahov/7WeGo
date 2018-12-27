(function(){
    document.addEventListener("DOMContentLoaded",function(){
        console.log("It Work");
        var slider=[
              "http://strg2.nm.kz/neofiles/serve-image/59ad1fbda3abd64db05593aa",
                './img/slider1.jpg','./img/5542.jpg','./img/a.jpg'];
        var sliderCount=0;
        var sliderImgChange=document.getElementById("slider1");
        sliderImgChange.src=slider[0];
        var next = document.querySelector(".next");
        next.addEventListener("click",next1,false);
        var prev=document.querySelector(".back");
        prev.addEventListener("click",prev1,false);
            function next1(){
                sliderCount++;
                if(sliderCount>=slider.length){
                    sliderCount=0;
                }
                sliderImgChange.src=slider[sliderCount];
            }
            function prev1(){
                sliderCount--;
                if(sliderCount<0){
                    sliderCount=slider.length-1;
                }
                sliderImgChange.src=slider[sliderCount];
            }
            setInterval(function(){
                sliderCount++;
                if(sliderCount>=slider.length){
                    sliderCount=0;
                }
                sliderImgChange.src=slider[sliderCount];
            },3000);
    });
})();