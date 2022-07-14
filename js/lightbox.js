
const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')



imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer.style.opacity = '0';
    
}
/**menu 3 */
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
