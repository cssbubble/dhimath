const lightbox = document.getElementById('lightbox')
const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.className = ('flex justify-center items-center fixed z-100 inset-0 w-full h-full bg-black bg-opacity-70 transition ease-in-out delay-150 duration-300')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.className = ('hidden')
} )