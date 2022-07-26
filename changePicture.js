const bob = document.getElementById('bob')

let counter = 0

const bobPictures = [];
bobPictures.push('sharkbob0.png')
bobPictures.push('sharkbob1.png')
bobPictures.push('sharkbob2.png')
bobPictures.push('sharkbob3.png')

bob.addEventListener('click', ()=>{
    counter = counter + 1
    if(counter < bobPictures.length){

        console.log(`now showing ${bobPictures[counter]}`)
    } else {
        console.log('there are no more bobs')
        counter = 0
    }
    bob.src = `sharkbob/sharkbob${counter}.png`
}) 