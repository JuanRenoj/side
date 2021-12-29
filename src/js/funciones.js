const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{

 sidebar.classList.toggle("open");
  menuBtnChange();//llmar la funcion para abrir el side bar
});

searchBtn.addEventListener("click", ()=>{ //el side bar se abre cuande hace clic en icono buscar
    sidebar.classList.toggle("open");
  menuBtnChange(); //llamar la funcion
});


//codigo del boton para cambiar el sidebarr
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//se replaza el icono
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//se replaza los iconos
 }
}