
function collapsBtn(){
      var navBar=document.getElementById('navBar');
      if(navBar.offsetHeight==30)
      {     navBar.style.height="auto";
            navBar.style.overflow="none"
            console.log('if is printed')
      }
      else{
            navBar.style.height="30px";
            console.log('else is printed');
      }
    
}


/* $(document).ready(function(){
      setTimeout(function(){
            $(function(){
                  $('#popupModal').modal('show');
                 })
      },4000)

    
}); */

 
     