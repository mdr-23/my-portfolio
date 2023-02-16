/* LOADER */
window.addEventListener('load',()=>{
    $('#loading').delay(100).fadeOut('quick', ()=>{console.log('ELIMINAR SPINNER')});
    $('#body').delay(300).fadeIn("slow",()=>{ console.log('BODY CARGADO')});
})