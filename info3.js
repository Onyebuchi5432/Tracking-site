const cramps = document.getElementById("cramps");
const bloating = document.getElementById("bloating");
const pimples = document.getElementById("pimples");

const menstruationText1 = document.querySelector(".menstruation-text1");
const menstruationText2 = document.querySelector(".menstruation-text2");
const menstruationText3 = document.querySelector(".menstruation-text3");
const menstruationImg1 = document.querySelector(".menstruation-img1");
const menstruationImg2 = document.querySelector(".menstruation-img2");
const menstruationImg3 = document.querySelector(".menstruation-img3");

const menimageInts = [menstruationImg1,menstruationImg2,menstruationImg3,menstruationImg1,menstruationImg2,menstruationImg3];
const mentextInts = [menstruationText1,menstruationText2,menstruationText3,menstruationText1,menstruationText2,menstruationText3];
const menmark = document.querySelector(".mark");

pimples.onchange = (e) => {
    if(e.target.checked & cramps.checked == true & bloating.checked == true){
        e.target.disabled = true;
        // use if statement to create a loop-like action
        let i = 0;
        const mentextInterval = setInterval(function(){
            if(i < mentextInts.length * 2 ){
                menmark.classList.add("hide-mark");
               const mentextIndex = i < mentextInts.length ? i : i - mentextInts.length
               console.log(i,mentextIndex);
               mentextInts[mentextIndex === 0 ? mentextInts.length - 1 : mentextIndex - 1].classList.remove("show-menstruation-text");
               mentextInts[mentextIndex].classList.add("show-menstruation-text")
               if(i === 11){
                mentextInts[5].classList.remove("show-menstruation-text")
                menmark.classList.remove("hide-mark")
               }  
            } else{
                e.target.checked = false;
                e.target.disabled = false;
                clearInterval(mentextInterval);
                
                
            }
            i++
        },[4000])
        
        let j = 0;
        const menimageInterval = setInterval(function(){
            if(j < menimageInts.length * 2 ){
               const menimageIndex = j < menimageInts.length ? j : j - menimageInts.length
               console.log(j,menimageIndex);
               menimageInts[menimageIndex === 0 ? menimageInts.length - 1 : menimageIndex - 1].classList.remove("show-menstruation-img");
               menimageInts[menimageIndex].classList.add("show-menstruation-img") 
               if(j === 11){
                menimageInts[5].classList.remove("show-menstruation-img")
                
               } 
            } else{
                e.target.checked = false;
                e.target.disabled = false;
                clearInterval(menimageInterval);
                
                
            }
            j++
        },[4000])
   
                
    } 
    
}
