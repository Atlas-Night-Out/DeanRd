
function findObj(n, d) { 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document); return x;
}

function showHideLayers() { 
  var i,p,v,obj,args=showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

if (document.images) {

  image0on = new Image();
  image0on.src = "menu_files/home_on.gif";

  image0off = new Image();
  image0off.src = "menu_files/home_off.gif";
  
  image1on = new Image();
  image1on.src = "menu_files/button2_on.gif";

  image1off = new Image();
  image1off.src = "menu_files/button2_off.gif";
  
  image2on = new Image();
  image2on.src = "menu_files/button3_on.gif";

  image2off = new Image();
  image2off.src = "menu_files/button3_off.gif";
  
  image3on = new Image();
  image3on.src = "menu_files/button4_on.gif";

  image3off = new Image();
  image3off.src = "menu_files/button4_off.gif";
  
  image4on = new Image();
  image4on.src = "menu_files/button5_on.gif";

  image4off = new Image();
  image4off.src = "menu_files/button5_off.gif";

  image5on = new Image();
  image5on.src = "menu_files/button6_on.gif";

  image5off = new Image();
  image5off.src = "menu_files/button6_off.gif";
  
}

function changeImages() {
  if (document.images) {
    for (var i=0; i<changeImages.arguments.length; i+=2) {
      document[changeImages.arguments[i]].src = eval(changeImages.arguments[i+1] + ".src");
    }
  }
}

function popUp(page,parameters)
        {
newWindow=window.open(page,"",parameters)
        }

function displayStatusMsg(msgStr) {
  status=msgStr;
  document.returnValue = true;
}

window.name='simplythebest';
function init() {
}
