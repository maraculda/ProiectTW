// toggle-menu

  var MenuItems = document.getElementById("MenuItems");

  MenuItems.style.maxHeight ="0px";

  function menutoggle(){
    if(MenuItems.style.maxHeight =="0px")
    {
      MenuItems.style.maxHeight ="200px";
    }
    else
    {
      MenuItems.style.maxHeight ="0px";
    }
  }
  //toggle-form
  
  var LoginForm = document.getElementById("LoginForm");
  var RegForm = document.getElementById("RegForm");
  var Indicator = document.getElementById("Indicator");


   function register(){
       RegForm.style.transform = "translateX(0px)";
       LoginForm.style.transform = "translateX(0px)";
       Indicator.style.transform = "translateX(100px)";

   }

   function login(){
       RegForm.style.transform = "translateX(300px)";
       LoginForm.style.transform = "translateX(300px)";
       Indicator.style.transform = "translateX(0px)";
   }
   
// about page

let div = document.createElement('div');
div.innerHTML = '<p>CreateElement Example</p>';
document.body.appendChild(div);