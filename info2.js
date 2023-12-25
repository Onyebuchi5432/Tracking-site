const breast = document.getElementById("breast");
const discharge = document.getElementById("discharge");
const pain = document.getElementById("pain");
const ovulationText1 = document.querySelector(".ovulation-text1");
const ovulationText2 = document.querySelector(".ovulation-text2");
const ovulationText3 = document.querySelector(".ovulation-text3");
const ovulationImg1 = document.querySelector(".ovulation-img1");
const ovulationImg2 = document.querySelector(".ovulation-img2");
const ovulationImg3 = document.querySelector(".ovulation-img3");

const ovulimageInts = [ovulationImg1,ovulationImg2,ovulationImg3,ovulationImg1,ovulationImg2,ovulationImg3];
const ovultextInts = [ovulationText1,ovulationText2,ovulationText3,ovulationText1,ovulationText2,ovulationText3];
const ovulmark = document.querySelector(".mark");


pain.onchange = (e) => {
    if(e.target.checked & discharge.checked == true & breast.checked == true ){
        e.target.disabled = true;
        // use if statement to create a loop-like action
        let i = 0;
        const ovultextInterval = setInterval(function(){
            if(i < ovultextInts.length * 2 ){
                ovulmark.classList.add("hide-mark");
               const ovultextIndex = i < ovultextInts.length ? i : i - ovultextInts.length
               console.log(i,ovultextIndex);
               ovultextInts[ovultextIndex === 0 ? ovultextInts.length - 1 : ovultextIndex - 1].classList.remove("show-ovulation-text");
               ovultextInts[ovultextIndex].classList.add("show-ovulation-text")
               if(i === 11){
                ovultextInts[5].classList.remove("show-ovulation-text")
                ovulmark.classList.remove("hide-mark")
               }  
            } else{
                e.target.checked = false;
                e.target.disabled = false;
                clearInterval(ovultextInterval);
                
                
            }
            i++
        },[4000])
        
        let j = 0;
        const ovulimageInterval = setInterval(function(){
            if(j < ovulimageInts.length * 2 ){
               const ovulimageIndex = j < ovulimageInts.length ? j : j - ovulimageInts.length
               console.log(j,ovulimageIndex);
               ovulimageInts[ovulimageIndex === 0 ? ovulimageInts.length - 1 : ovulimageIndex - 1].classList.remove("show-ovulation-img");
               ovulimageInts[ovulimageIndex].classList.add("show-ovulation-img") 
               if(j === 11){
                ovulimageInts[5].classList.remove("show-ovulation-img")
                
               } 
            } else{
                e.target.checked = false;
                e.target.disabled = false;
                clearInterval(ovulimageInterval);
                
                
            }
            j++
        },[4000])
   
                
    } 
    
}
