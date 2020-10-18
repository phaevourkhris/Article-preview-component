const shareButton = document.querySelector('.share');
const articleInfo = document.querySelector('.article-info');
const attribution = document.querySelector('.attribution');
const popUp = document.querySelector('.pop-up');
const shareArea = document.querySelector('.share-area');
const authorInfo = document.querySelector('.author-info');
const svgPath = document.querySelector('path');
shareButton.addEventListener('click', function(){
    var x = window.matchMedia("(max-width: 375px)");
    if (x.matches) { // If media query matches
        attribution.style.display="none";
        articleInfo.style.display="none";
        shareArea.style.display="flex";
      } else {
          if(popUp.classList.contains('show')){
            shareButton.style.backgroundColor="hsl(210, 46%, 95%)";
            svgPath.setAttribute("fill","#6E8098");
            popUp.classList.toggle("show");
          }
          else{
            shareButton.style.backgroundColor="hsl(217, 19%, 35%)";
            svgPath.setAttribute("fill","whitesmoke");
            popUp.classList.toggle("show");
          }
       

      }
    ;
    
})