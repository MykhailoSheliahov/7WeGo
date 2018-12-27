(function () {
    document.addEventListener("DOMContentLoaded", ()=>{
        var xhr =new XMLHttpRequest();
        xhr.open('GET',"https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=a10abf8719cb4d5bbe749a07ab9ba38b",false);
        xhr.send();
        if(xhr.status != 200){
            alert(xhr.status + ":" + xhr.statusText);
        }
        else{
            var otvet=JSON.parse( xhr.responseText);
            var articles=otvet.articles;
            var img=document.querySelectorAll(".journalItem>img");

            var text=document.querySelectorAll(".journalItem>p");
            for(var i = 0; i<img.length; i++){
                img[i].src=articles[i].urlToImage;
            }
            for(var i = 0; i<text.length; i++){
                text[i].innerHTML=articles[i].description;
            }
        }
    });
})();