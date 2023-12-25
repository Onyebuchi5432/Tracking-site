const firstImage = document.querySelector(".image-1");
const secondImage = document.querySelector(".image-2");
const thirdImage = document.querySelector(".image-3");

const imageArr = [thirdImage,secondImage,firstImage];
window.addEventListener("DOMContentLoaded", () => {
    // use if statement to create a loop-like action
    let i = 0;
    const imageInt = setInterval(function(){
        if(i < imageArr.length){
            const imageIndex = i < imageArr.length ? i : i - imageArr.length
             console.log(i,imageIndex);
           
            imageArr[imageIndex === 0 ? imageArr.length - 1 : imageIndex - 1].classList.remove("add-image");
               imageArr[imageIndex].classList.add("add-image");
               if(i > 0 || i === 2){
                imageArr[imageIndex === 0 ? imageArr.length - 1 : imageIndex - 1].classList.add("remove-image");
                
               }
                    } else{
            clearInterval(imageInt)
        }
        i++
    },[2000])
})