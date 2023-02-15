const images = document.querySelectorAll('imag');

const options = { threshold: .5}

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source)
        return;

        images.src = source;
}

const io = new Intersectionobserver (
    (entries)=> {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.traget);
                io.unobserve(entry.target);
                
            }
            console.log(entries);
        })
        

    },
    options
        
);

images.forEach(img => {
    io.observe(images);
})
