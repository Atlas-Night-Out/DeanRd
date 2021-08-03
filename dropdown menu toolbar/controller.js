function showMenu (menu) {
   var m = document.getElementById(menu);
   m.style.visibility = 'visible';
}


function hideMenu (menu) {
   var m = document.getElementById(menu);
   m.style.visibility = 'hidden';
}
function hideAll () {
   var prod = document.getElementById('menu_prod');
   var supp = document.getElementById('menu_supp');
   var down = document.getElementById('menu_down');
   var abou = document.getElementById('menu_abou');
   
   prod.style.visibility = 'hidden';
   supp.style.visibility = 'hidden';
   down.style.visibility = 'hidden';
   abou.style.visibility = 'hidden';
}
   
function hide () {
   timerId = setTimeout("hideAll()", 1000); 
}
function dontHide() {     
   if (timerId) clearTimeout(timerId);   
}
var timerId = null;

function showMenu (menu) {
   if (timerId) clearTimeout(timerId);
   hideAll();

   var m = document.getElementById(menu);
   m.style.visibility = 'visible';
}

