const imagenes3 = document.querySelectorAll('.img-galeria3')
const imagenLight3 = document.querySelector('.agregar-imagen3');
const contenedorLight3 = document.querySelector('.imagen-light3')
const closeLight3 = document.querySelector('.close3')


imagenes3.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen3(imagen.getAttribute('src'));
    
    })
});

contenedorLight3.addEventListener('click',(e)=>{
    if(e.target !== imagenLight3){
        contenedorLight3.classList.toggle('show')
        imagenLight3.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen3 = (imagen)=>{
    imagenLight3.src = imagen;
    contenedorLight3.classList.toggle('show')
    imagenLight3.classList.toggle('showImage')
    hamburguer.style.opacity = '0';
    
}