const temp = document.getElementById("temp");
const mucus = document.getElementById("mucus");
const acne = document.getElementById("acne");

const safeText1 = document.querySelector(".safe-text1");
const safeText2 = document.querySelector(".safe-text2");
const safeText3 = document.querySelector(".safe-text3");
const safeImg1 = document.querySelector(".safe-img1");
const safeImg2 = document.querySelector(".safe-img2");
const safeImg3 = document.querySelector(".safe-img3");

const imageInts = [safeImg1,safeImg2,safeImg3,safeImg1,safeImg2,safeImg3];
const textInts = [safeText1,safeText2,safeText3,safeText1,safeText2,safeText3];
const mark = document.querySelector(".mark");

acne.onchange = (e) => {
    if(e.target.checked & mucus.checked == true & temp.checked == true){
        e.target.disabled = true;
       // use if statement to create a loop-like action
        let i = 0;
        const textInterval = setInterval(function(){
            if(i < textInts.length * 2 ){
                mark.classList.add("hide-mark");
               const textIndex = i < textInts.length ? i : i - textInts.length
               console.log(i,textIndex);
               textInts[textIndex === 0 ? textInts.length - 1 : textIndex - 1].classList.remove("show-safe-text");
               textInts[textIndex].classList.add("show-safe-text")
               if(i === 11){
                textInts[5].classList.remove("show-safe-text")
                mark.classList.remove("hide-mark")
               }  
            } else{
                e.target.checked = false;
                e.target.disabled = false;
                clearInterval(textInterval);
                
                
            }
            i++
        },[4000])
        
        let j = 0;
        const imageInterval = setInterval(function(){
            if(j < imageInts.length * 2 ){
               const imageIndex = j < imageInts.length ? j : j - imageInts.length
               console.log(j,imageIndex);
               imageInts[imageIndex === 0 ? imageInts.length - 1 : imageIndex - 1].classList.remove("show-safe-img");
               imageInts[imageIndex].classList.add("show-safe-img") 
               if(j === 11){
                imageInts[5].classList.remove("show-safe-img")
                
               } 
            } else{
                e.target.checked = false;
                e.target.disabled = false;
                clearInterval(imageInterval);
                
                
            }
            j++
        },[4000])
   
                
    } 
    
}






