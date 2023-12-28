document.addEventListener("DOMContentLoaded", function () {
    const thresholdWidth = 576;
    const image = document.getElementById("mdl-pic");
    
    
    function handleImageSource() {
      let w = document.documentElement.clientWidth;
  
      if (w < thresholdWidth) {
        image.src = "./images/hero-mobile.jpg";
        } else {
            image.src= "./images/hero-desktop.jpg"
        }
    }
  
    window.addEventListener("resize", handleImageSource);
  
   function emailTest(){
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailValue = document.getElementById("email").value;
   
    const alert = document.getElementById("alert");
    const form = document.getElementById("form");

    if (!emailRegex.test(emailValue)){
        alert.classList.add("error");
        form.classList.add("error");
        event.preventDefault();
    }

   }

   
   form.addEventListener("submit", emailTest);
   handleImageSource();

  });
  