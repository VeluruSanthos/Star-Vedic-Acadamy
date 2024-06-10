

const btnshow =document.querySelector('.btn-show');
const navbar=document.querySelector('.navbar');
btnshow.addEventListener('click',()=>
{navbar.classList.toggle('show');

});


const moveTop=document.querySelector('.ttop');
window.addEventListener('scroll',()=>{
    var y=window.scrollY;
    if(y>=800){
        moveTop.classList.add('active');
    }else{
        moveTop.classList.remove('active');
    }
});






    // Function to change the title
    function changeTitle(newTitle) {
        document.getElementById("pageTitle").innerText = newTitle;
      }
  
      // Example of changing the title after a delay
      setTimeout(function() {
        changeTitle("Chess Acadamy");
      }, 2000); // Change title after 3 seconds