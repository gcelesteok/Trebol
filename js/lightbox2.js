const imagenes2 = document.querySelectorAll('.img-galeria2')
const imagenLight2 = document.querySelector('.agregar-imagen2');
const contenedorLight2 = document.querySelector('.imagen-light2')
const closeLight2 = document.querySelector('.close2')


imagenes2.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen2(imagen.getAttribute('src'));
    
    })
});

contenedorLight2.addEventListener('click',(e)=>{
    if(e.target !== imagenLight2){
        contenedorLight2.classList.toggle('show')
        imagenLight2.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen2 = (imagen)=>{
    imagenLight2.src = imagen;
    contenedorLight2.classList.toggle('show')
    imagenLight2.classList.toggle('showImage')
    hamburguer.style.opacity = '0';
    
}