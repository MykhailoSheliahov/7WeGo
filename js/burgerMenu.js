(function(){
   document.addEventListener("DOMContentLoaded",function(){


       var menubtn = document.getElementById('menubtn');
       var header = document.querySelector('header');
       menubtn.onclick = function(){
           header.classList.toggle('opened');
       }

   });
})();