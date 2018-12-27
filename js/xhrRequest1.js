(function () {
    document.addEventListener("DOMContentLoaded", ()=>{
       var xhr =new XMLHttpRequest();
       xhr.open('GET',"https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=a10abf8719cb4d5bbe749a07ab9ba38b",false);
       xhr.send();
       if(xhr.status != 200){
           alert(xhr.status + ":" + xhr.statusText);
       }
       else{
           var otvet=JSON.parse( xhr.responseText);
           var articles=otvet.articles;
           var img=document.querySelectorAll(".projectItem>img");
           var title1=document.querySelectorAll(".projectItem>h1");
           var text=document.querySelectorAll(".projectItem>p");
          for(var i = 0; i<img.length; i++){
                  img[i].src=articles[i].urlToImage;
          }
           for(var j = 0; j<title1.length; j++){
               title1[j].innerText=articles[j].title;
           }
           for(var i = 0; i<text.length; i++){
               text[i].innerHTML=articles[i].description;
           }
       }
    });
})();