// GET THE DIFFERENT ELEMENTS
const heading = document.querySelector(".head-info");
const downButton = document.querySelector(".down-btn");
const upButton = document.querySelector(".up-btn");
const container = document.querySelector(".sum-info");
const dateInput = document.querySelector(".date");

const hideInfo = document.querySelector(".hide-info");
const mainTip = document.querySelector(".tips");
const inform = document.querySelector(".info-head");
const buttonDown = document.querySelector(".btn-down");
const dispTime = document.querySelector(".section-info");
const docDay = document.querySelector(".day");
const docDate = document.querySelector(".dates");
const docMonth = document.querySelector(".month");
const docYear = document.querySelector(".year");

const theDay = document.querySelector(".the-day");
const theDate = document.querySelector(".the-dates");
const theMonth = document.querySelector(".the-month");
const theYear = document.querySelector(".the-year");

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dispDate = new Date();
const justDate = new Date();
const justMonth = justDate.getMonth();
const justDay = justDate.getDay();
const newdate = justDate.getDate();
const newyear = justDate.getFullYear();
theDay.innerHTML = days[justDay];
theDate.innerHTML = newdate;
theMonth.innerHTML = month[justMonth];
theYear.innerHTML = newyear;

//ADD EVENTS TO THE BUTTONS TO ADD OR REMOVE DOMS
    downButton.addEventListener("click", function(){
    container.classList.add("show-sum-info");
    heading.classList.add("collapse-head-info");
    upButton.classList.add("show-up-btn");
    downButton.classList.add("hide-down-btn");
})
upButton.addEventListener("click", function(){
    downButton.classList.remove("hide-down-btn");
    upButton.classList.remove("show-up-btn");
    container.classList.remove("show-sum-info");
    heading.classList.remove("collapse-head-info");
})


const search = document.querySelector(".input-date");
const searchbtn = document.getElementById("submit");
const input = document.getElementById("data-input");
const overFlow = document.querySelector(".hidden-body");
const firstPostP = document.querySelector(".first-post-p");
const secondPostP = document.querySelector(".second-post-p");
const thirdPostP = document.querySelector(".third-post-p");
const fourthPostP = document.querySelector(".fourth-post-p");
const fifthPostP = document.querySelector(".fifth-post-p");
const firstOvul = document.querySelector(".first-ovulation");
const secondOvul = document.querySelector(".second-ovulation");
const thirdOvul = document.querySelector(".third-ovulation");
const fourthOvul = document.querySelector(".fourth-ovulation");
const fifthOvul = document.querySelector(".fifth-ovulation");
const firstPostO = document.querySelector(".first-post-o");
const secondPostO = document.querySelector(".second-post-o");
const thirdPostO = document.querySelector(".third-post-o");
const fourthPostO = document.querySelector(".fourth-post-o");
const fifthPostO = document.querySelector(".fifth-post-o");
const sixthPostO = document.querySelector(".sixth-post-o");
const seventhPostO = document.querySelector(".seventh-post-o");
const eighthPostO = document.querySelector(".eighth-post-o");
const ninthPostO = document.querySelector(".ninth-post-o");
const tenthPostO = document.querySelector(".tenth-post-o");
const eleventhPostO = document.querySelector(".eleventh-post-o");
const twelfthPostO = document.querySelector(".twelfth-post-o");
const thirteenthPostO = document.querySelector(".thirteenth-post-o");
const firstMen = document.querySelector(".first-men");
const secondMen = document.querySelector(".second-men");
const thirdMen = document.querySelector(".third-men");
const fourthMen = document.querySelector(".fourth-men");
const fifthMen = document.querySelector(".fifth-men");
const periodDate = document.querySelector(".period");



 // On clicking the button, retriv will be added to the local storage
const retriv = JSON.parse(localStorage.getItem("date"));
if (!retriv) {
   
   search.addEventListener("submit", getData);
   function getData(e){
       e.preventDefault();
       localStorage.setItem("date", JSON.stringify(input.value));
       const retriv = JSON.parse(localStorage.getItem("date"))
       console.log(input.value);
       const currDate = new Date();
       const precDate = currDate.getDate();
       const string = precDate.toString();
       localStorage.setItem("uniTime",JSON.stringify(string));
       const retrivDate = JSON.parse(localStorage.getItem("uniTime"));
       // Add the 28 days in the local storage
       localStorage.setItem("firVal",JSON.stringify("1")); 
       localStorage.setItem("sVal", JSON.stringify("2"));
       localStorage.setItem("tVal", JSON.stringify("3"));
       localStorage.setItem("foVal", JSON.stringify("4"));
       localStorage.setItem("fiVal", JSON.stringify("5"));
       localStorage.setItem("sixVal", JSON.stringify("6"));
       localStorage.setItem("sevVal", JSON.stringify("7"));
       localStorage.setItem("eitVal", JSON.stringify("8"));
       localStorage.setItem("ninVal", JSON.stringify("9"));
       localStorage.setItem("tenVal", JSON.stringify("10"));
       localStorage.setItem("elevVal", JSON.stringify("11"));
       localStorage.setItem("twelVal", JSON.stringify("12"));
       localStorage.setItem("thirtVal", JSON.stringify("13"));
       localStorage.setItem("fourtVal", JSON.stringify("14"));
       localStorage.setItem("fiftVal", JSON.stringify("15"));
       localStorage.setItem("sixtVal", JSON.stringify("16"));
       localStorage.setItem("seventVal", JSON.stringify("17"));
       localStorage.setItem("eightVal", JSON.stringify("18"));
       localStorage.setItem("nintVal", JSON.stringify("19"));
       localStorage.setItem("twentVal", JSON.stringify("20"));
       localStorage.setItem("twenfirstVal", JSON.stringify("21"));
       localStorage.setItem("twensecondVal", JSON.stringify("22"));
       localStorage.setItem("twenthirdVal", JSON.stringify("23"));
       localStorage.setItem("twentfourthVal", JSON.stringify("24"));
       localStorage.setItem("twentfifthVal", JSON.stringify("25"));
       localStorage.setItem("twentsixthVal", JSON.stringify("26"));
       localStorage.setItem("twentseventhVal", JSON.stringify("27"));
       localStorage.setItem("twenteighthVal", JSON.stringify("28"));
       localStorage.setItem("emptyVal", JSON.stringify(""));

       const emptyDate = JSON.parse(localStorage.getItem("emptyVal"));
       const firstDate = JSON.parse(localStorage.getItem("firVal"));
       const secondDate = JSON.parse(localStorage.getItem("sVal"));
       const thirdDate = JSON.parse(localStorage.getItem("tVal"));
       const fourthDate = JSON.parse(localStorage.getItem("foVal"));
       const fifthDate = JSON.parse(localStorage.getItem("fiVal"));
       const sixthDate = JSON.parse(localStorage.getItem("sixVal"));
       const seventhDate = JSON.parse(localStorage.getItem("sevVal"));
       const eighthDate = JSON.parse(localStorage.getItem("eitVal"));
       const ninthDate = JSON.parse(localStorage.getItem("ninVal"));
       const tenthDate = JSON.parse(localStorage.getItem("tenVal"));
       const eleventhDate = JSON.parse(localStorage.getItem("elevVal"));
       const twelfthDate = JSON.parse(localStorage.getItem("twelVal"));
       const thirteenthDate = JSON.parse(localStorage.getItem("thirtVal"));
       const fourteenthDate = JSON.parse(localStorage.getItem("fourtVal"));
       const fifteenthDate = JSON.parse(localStorage.getItem("fiftVal"));
       const sixteenthDate = JSON.parse(localStorage.getItem("sixtVal"));
       const seventeenthDate = JSON.parse(localStorage.getItem("seventVal"));
       const eighteenthDate = JSON.parse(localStorage.getItem("eightVal"));
       const nineteenthDate = JSON.parse(localStorage.getItem("nintVal"));
       const twentiethDate = JSON.parse(localStorage.getItem("twentVal"));
       const twentfirstDate = JSON.parse(localStorage.getItem("twenfirstVal"));
       const twentsecondDate = JSON.parse(localStorage.getItem("twensecondVal"));
       const twentthirdDate = JSON.parse(localStorage.getItem("twenthirdVal"));
       const twentfourthDate = JSON.parse(localStorage.getItem("twentfourthVal"));
       const twentfifthDate = JSON.parse(localStorage.getItem("twentfifthVal"));
       const twentsixthDate = JSON.parse(localStorage.getItem("twentsixthVal"));
       const twentseventhDate = JSON.parse(localStorage.getItem("twentseventhVal"));
       const twenteighthDate = JSON.parse(localStorage.getItem("twenteighthVal"));
          
       if (Number(retriv) === Number(emptyDate)) {
           firstPostP.classList.add("hide-first-post-p");
           secondPostP.classList.add("hide-second-post-p");
           thirdPostP.classList.add("hide-third-post-p");
           fourthPostP.classList.add("hide-fourth-post-p");
           fifthPostP.classList.add("hide-fifth-post-p");
           firstOvul.classList.add("hide-first-ovulation");
           secondOvul.classList.add("hide-second-ovulation");
           thirdOvul.classList.add("hide-third-ovulation");
           fourthOvul.classList.add("hide-fourth-ovulation");
           fifthOvul.classList.add("hide-fifth-ovulation");
           firstPostO.classList.add("hide-first-post-o");
           secondPostO.classList.add("hide-second-post-o");
           thirdPostO.classList.add("hide-third-post-o");
           fourthPostO.classList.add("hide-fourth-post-o");
           fifthPostO.classList.add("hide-fifth-post-o");
           sixthPostO.classList.add("hide-sixth-post-o");
           seventhPostO.classList.add("hide-seventh-post-o");
           eighthPostO.classList.add("hide-eighth-post-o");
           ninthPostO.classList.add("hide-ninth-post-o");
           tenthPostO.classList.add("hide-tenth-post-o");
           eleventhPostO.classList.add("hide-eleventh-post-o");
           twelfthPostO.classList.add("hide-twelfth-post-o");
           thirteenthPostO.classList.add("hide-thirteenth-post-o");
           firstMen.classList.add("hide-first-men");
           secondMen.classList.add("hide-second-men");
           thirdMen.classList.add("hide-third-men");
           fourthMen.classList.add("hide-fourth-men");
           fifthMen.classList.add("hide-fifth-men");
  
           heading.classList.remove("hide-head-info");
           dateInput.classList.remove("hide-date");
           hideInfo.classList.remove("block-hide-info");
           downButton.classList.remove("hide-down-btn");
           overFlow.classList.remove("hide-hidden-body");
           
            periodDate.classList.add("hide-period");
            heading.classList.add("show-head-info");
            dateInput.classList.add("show-date");
            hideInfo.classList.add("show-hide-info");
            downButton.classList.add("show-down-btn");
            overFlow.classList.add("show-hidden-body");

            
            console.log("A null value");
           
           
       } else {
           console.log("Not a null");
           
       }
       
       localStorage.setItem("limit",JSON.stringify(Number(31)));
       const limit = JSON.parse(localStorage.getItem("limit"));
       localStorage.setItem("diff1",JSON.stringify(Number(retriv) + Number(firstDate) - limit));
       const diff1 = JSON.parse(localStorage.getItem("diff1"));
       localStorage.setItem("diff2",JSON.stringify(Number(retriv) + Number(secondDate) - limit));
       const diff2 = JSON.parse(localStorage.getItem("diff2"));
       localStorage.setItem("diff3",JSON.stringify(Number(retriv) + Number(thirdDate) - limit));
       const diff3 = JSON.parse(localStorage.getItem("diff3"));
       localStorage.setItem("diff4",JSON.stringify(Number(retriv) + Number(fourthDate) - limit));
       const diff4 = JSON.parse(localStorage.getItem("diff4"));
       localStorage.setItem("diff5",JSON.stringify(Number(retriv) + Number(fifthDate) - limit));
       const diff5 = JSON.parse(localStorage.getItem("diff5"));
       localStorage.setItem("diff6",JSON.stringify(Number(retriv) + Number(sixthDate) - limit));
       const diff6 = JSON.parse(localStorage.getItem("diff6"));
       localStorage.setItem("diff7",JSON.stringify(Number(retriv) + Number(seventhDate) - limit));
       const diff7 = JSON.parse(localStorage.getItem("diff7"));
       localStorage.setItem("diff8",JSON.stringify(Number(retriv) + Number(eighthDate) - limit));
       const diff8 = JSON.parse(localStorage.getItem("diff8"));
       localStorage.setItem("diff9",JSON.stringify(Number(retriv) + Number(ninthDate) - limit));
       const diff9 = JSON.parse(localStorage.getItem("diff9"));
       localStorage.setItem("diff10",JSON.stringify(Number(retriv) + Number(tenthDate) - limit));
       const diff10 = JSON.parse(localStorage.getItem("diff10"));
       localStorage.setItem("diff11",JSON.stringify(Number(retriv) + Number(eleventhDate) - limit));
       const diff11 = JSON.parse(localStorage.getItem("diff11"));
       localStorage.setItem("diff12",JSON.stringify(Number(retriv) + Number(twelfthDate) - limit));
       const diff12 = JSON.parse(localStorage.getItem("diff12"));
       localStorage.setItem("diff13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - limit));
       const diff13 = JSON.parse(localStorage.getItem("diff13"));
       localStorage.setItem("diff14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - limit));
       const diff14 = JSON.parse(localStorage.getItem("diff14"));
       localStorage.setItem("diff15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - limit));
       const diff15 = JSON.parse(localStorage.getItem("diff15"));
       localStorage.setItem("diff16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - limit));
       const diff16 = JSON.parse(localStorage.getItem("diff16"));
       localStorage.setItem("diff17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - limit));
       const diff17 = JSON.parse(localStorage.getItem("diff17"));
       localStorage.setItem("diff18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - limit));
       const diff18 = JSON.parse(localStorage.getItem("diff18"));
       localStorage.setItem("diff19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - limit));
       const diff19 = JSON.parse(localStorage.getItem("diff19"));
       localStorage.setItem("diff20",JSON.stringify(Number(retriv) + Number(twentiethDate) - limit));
       const diff20 = JSON.parse(localStorage.getItem("diff20"));
       localStorage.setItem("diff21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - limit));
       const diff21 = JSON.parse(localStorage.getItem("diff21"));
       localStorage.setItem("diff22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - limit));
       const diff22 = JSON.parse(localStorage.getItem("diff22"));
       localStorage.setItem("diff23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - limit));
       const diff23 = JSON.parse(localStorage.getItem("diff23"));
       localStorage.setItem("diff24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - limit));
       const diff24 = JSON.parse(localStorage.getItem("diff24"));
       localStorage.setItem("diff25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - limit));
       const diff25 = JSON.parse(localStorage.getItem("diff25"));
       localStorage.setItem("diff26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - limit));
       const diff26 = JSON.parse(localStorage.getItem("diff26"));
       localStorage.setItem("diff27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - limit));
       const diff27 = JSON.parse(localStorage.getItem("diff27"));
       localStorage.setItem("diff28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - limit));
       const diff28 = JSON.parse(localStorage.getItem("diff28"));

       localStorage.setItem("range",JSON.stringify(Number(30)));
       const range = JSON.parse(localStorage.getItem("range"));
       localStorage.setItem("range1",JSON.stringify(Number(retriv) + Number(firstDate) - range));
       const range1 = JSON.parse(localStorage.getItem("range1"));
       localStorage.setItem("range2",JSON.stringify(Number(retriv) + Number(secondDate) - range));
       const range2 = JSON.parse(localStorage.getItem("range2"));
       localStorage.setItem("range3",JSON.stringify(Number(retriv) + Number(thirdDate) - range));
       const range3 = JSON.parse(localStorage.getItem("range3"));
       localStorage.setItem("range4",JSON.stringify(Number(retriv) + Number(fourthDate) - range));
       const range4 = JSON.parse(localStorage.getItem("range4"));
       localStorage.setItem("range5",JSON.stringify(Number(retriv) + Number(fifthDate) - range));
       const range5 = JSON.parse(localStorage.getItem("range5"));
       localStorage.setItem("range6",JSON.stringify(Number(retriv) + Number(sixthDate) - range));
       const range6 = JSON.parse(localStorage.getItem("range6"));
       localStorage.setItem("range7",JSON.stringify(Number(retriv) + Number(seventhDate) - range));
       const range7 = JSON.parse(localStorage.getItem("range7"));
       localStorage.setItem("range8",JSON.stringify(Number(retriv) + Number(eighthDate) - range));
       const range8 = JSON.parse(localStorage.getItem("range8"));
       localStorage.setItem("range9",JSON.stringify(Number(retriv) + Number(ninthDate) - range));
       const range9 = JSON.parse(localStorage.getItem("range9"));
       localStorage.setItem("range10",JSON.stringify(Number(retriv) + Number(tenthDate) - range));
       const range10 = JSON.parse(localStorage.getItem("range10"));
       localStorage.setItem("range11",JSON.stringify(Number(retriv) + Number(eleventhDate) - range));
       const range11 = JSON.parse(localStorage.getItem("range11"));
       localStorage.setItem("range12",JSON.stringify(Number(retriv) + Number(twelfthDate) - range));
       const range12 = JSON.parse(localStorage.getItem("range12"));
       localStorage.setItem("range13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - range));
       const range13 = JSON.parse(localStorage.getItem("range13"));
       localStorage.setItem("range14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - range));
       const range14 = JSON.parse(localStorage.getItem("range14"));
       localStorage.setItem("range15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - range));
       const range15 = JSON.parse(localStorage.getItem("range15"));
       localStorage.setItem("range16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - range));
       const range16 = JSON.parse(localStorage.getItem("range16"));
       localStorage.setItem("range17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - range));
       const range17 = JSON.parse(localStorage.getItem("range17"));
       localStorage.setItem("range18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - range));
       const range18 = JSON.parse(localStorage.getItem("range18"));
       localStorage.setItem("range19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - range));
       const range19 = JSON.parse(localStorage.getItem("range19"));
       localStorage.setItem("range20",JSON.stringify(Number(retriv) + Number(twentiethDate) - range));
       const range20 = JSON.parse(localStorage.getItem("range20"));
       localStorage.setItem("range21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - range));
       const range21 = JSON.parse(localStorage.getItem("range21"));
       localStorage.setItem("range22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - range));
       const range22 = JSON.parse(localStorage.getItem("range22"));
       localStorage.setItem("range23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - range));
       const range23 = JSON.parse(localStorage.getItem("range23"));
       localStorage.setItem("range24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - range));
       const range24 = JSON.parse(localStorage.getItem("range24"));
       localStorage.setItem("range25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - range));
       const range25 = JSON.parse(localStorage.getItem("range25"));
       localStorage.setItem("range26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - range));
       const range26 = JSON.parse(localStorage.getItem("range26"));
       localStorage.setItem("range27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - range));
       const range27 = JSON.parse(localStorage.getItem("range27"));
       localStorage.setItem("range28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - range));
       const range28 = JSON.parse(localStorage.getItem("range28"));

       // save the values for the days in a month for a leap year in the local storage
       localStorage.setItem("leaps",JSON.stringify(Number(29)));
       const leaps = JSON.parse(localStorage.getItem("leaps"));
       localStorage.setItem("leap1",JSON.stringify(Number(retriv) + Number(firstDate) - leaps));
       const leap1 = JSON.parse(localStorage.getItem("leap1"));
       localStorage.setItem("leap2",JSON.stringify(Number(retriv) + Number(secondDate) - leaps));
       const leap2 = JSON.parse(localStorage.getItem("leap2"));
       localStorage.setItem("leap3",JSON.stringify(Number(retriv) + Number(thirdDate) - leaps));
       const leap3 = JSON.parse(localStorage.getItem("leap3"));
       localStorage.setItem("leap4",JSON.stringify(Number(retriv) + Number(fourthDate) - leaps));
       const leap4 = JSON.parse(localStorage.getItem("leap4"));
       localStorage.setItem("leap5",JSON.stringify(Number(retriv) + Number(fifthDate) - leaps));
       const leap5 = JSON.parse(localStorage.getItem("leap5"));
       localStorage.setItem("leap6",JSON.stringify(Number(retriv) + Number(sixthDate) - leaps));
       const leap6 = JSON.parse(localStorage.getItem("leap6"));
       localStorage.setItem("leap7",JSON.stringify(Number(retriv) + Number(seventhDate) - leaps));
       const leap7 = JSON.parse(localStorage.getItem("leap7"));
       localStorage.setItem("leap8",JSON.stringify(Number(retriv) + Number(eighthDate) - leaps));
       const leap8 = JSON.parse(localStorage.getItem("leap8"));
       localStorage.setItem("leap9",JSON.stringify(Number(retriv) + Number(ninthDate) - leaps));
       const leap9 = JSON.parse(localStorage.getItem("leap9"));
       localStorage.setItem("leap10",JSON.stringify(Number(retriv) + Number(tenthDate) - leaps));
       const leap10 = JSON.parse(localStorage.getItem("leap10"));
       localStorage.setItem("leap11",JSON.stringify(Number(retriv) + Number(eleventhDate) - leaps));
       const leap11 = JSON.parse(localStorage.getItem("leap11"));
       localStorage.setItem("leap12",JSON.stringify(Number(retriv) + Number(twelfthDate) - leaps));
       const leap12 = JSON.parse(localStorage.getItem("leap12"));
       localStorage.setItem("leap13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - leaps));
       const leap13 = JSON.parse(localStorage.getItem("leap13"));
       localStorage.setItem("leap14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - leaps));
       const leap14 = JSON.parse(localStorage.getItem("leap14"));
       localStorage.setItem("leap15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - leaps));
       const leap15 = JSON.parse(localStorage.getItem("leap15"));
       localStorage.setItem("leap16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - leaps));
       const leap16 = JSON.parse(localStorage.getItem("leap16"));
       localStorage.setItem("leap17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - leaps));
       const leap17 = JSON.parse(localStorage.getItem("leap17"));
       localStorage.setItem("leap18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - leaps));
       const leap18 = JSON.parse(localStorage.getItem("leap18"));
       localStorage.setItem("leap19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - leaps));
       const leap19 = JSON.parse(localStorage.getItem("leap19"));
       localStorage.setItem("leap20",JSON.stringify(Number(retriv) + Number(twentiethDate) - leaps));
       const leap20 = JSON.parse(localStorage.getItem("leap20"));
       localStorage.setItem("leap21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - leaps));
       const leap21 = JSON.parse(localStorage.getItem("leap21"));
       localStorage.setItem("leap22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - leaps));
       const leap22 = JSON.parse(localStorage.getItem("leap22"));
       localStorage.setItem("leap23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - leaps));
       const leap23 = JSON.parse(localStorage.getItem("leap23"));
       localStorage.setItem("leap24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - leaps));
       const leap24 = JSON.parse(localStorage.getItem("leap24"));
       localStorage.setItem("leap25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - leaps));
       const leap25 = JSON.parse(localStorage.getItem("leap25"));
       localStorage.setItem("leap26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - leaps));
       const leap26 = JSON.parse(localStorage.getItem("leap26"));
       localStorage.setItem("leap27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - leaps));
       const leap27 = JSON.parse(localStorage.getItem("leap27"));
       localStorage.setItem("leap28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - leaps));
       const leap28 = JSON.parse(localStorage.getItem("leap28"));

       // save the values for the days of the month for a non-leap year in the local storage
       localStorage.setItem("noleaps",JSON.stringify(Number(28)));
       const noleaps = JSON.parse(localStorage.getItem("noleaps"));
       localStorage.setItem("noleap1",JSON.stringify(Number(retriv) + Number(firstDate) - noleaps));
       const noleap1 = JSON.parse(localStorage.getItem("noleap1"));
       localStorage.setItem("noleap2",JSON.stringify(Number(retriv) + Number(secondDate) - noleaps));
       const noleap2 = JSON.parse(localStorage.getItem("noleap2"));
       localStorage.setItem("noleap3",JSON.stringify(Number(retriv) + Number(thirdDate) - noleaps));
       const noleap3 = JSON.parse(localStorage.getItem("noleap3"));
       localStorage.setItem("noleap4",JSON.stringify(Number(retriv) + Number(fourthDate) - noleaps));
       const noleap4 = JSON.parse(localStorage.getItem("noleap4"));
       localStorage.setItem("noleap5",JSON.stringify(Number(retriv) + Number(fifthDate) - noleaps));
       const noleap5 = JSON.parse(localStorage.getItem("noleap5"));
       localStorage.setItem("noleap6",JSON.stringify(Number(retriv) + Number(sixthDate) - noleaps));
       const noleap6 = JSON.parse(localStorage.getItem("noleap6"));
       localStorage.setItem("noleap7",JSON.stringify(Number(retriv) + Number(seventhDate) - noleaps));
       const noleap7 = JSON.parse(localStorage.getItem("noleap7"));
       localStorage.setItem("noleap8",JSON.stringify(Number(retriv) + Number(eighthDate) - noleaps));
       const noleap8 = JSON.parse(localStorage.getItem("noleap8"));
       localStorage.setItem("noleap9",JSON.stringify(Number(retriv) + Number(ninthDate) - noleaps));
       const noleap9 = JSON.parse(localStorage.getItem("noleap9"));
       localStorage.setItem("noleap10",JSON.stringify(Number(retriv) + Number(tenthDate) - noleaps));
       const noleap10 = JSON.parse(localStorage.getItem("noleap10"));
       localStorage.setItem("noleap11",JSON.stringify(Number(retriv) + Number(eleventhDate) - noleaps));
       const noleap11 = JSON.parse(localStorage.getItem("noleap11"));
       localStorage.setItem("noleap12",JSON.stringify(Number(retriv) + Number(twelfthDate) - noleaps));
       const noleap12 = JSON.parse(localStorage.getItem("noleap12"));
       localStorage.setItem("noleap13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - noleaps));
       const noleap13 = JSON.parse(localStorage.getItem("noleap13"));
       localStorage.setItem("noleap14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - noleaps));
       const noleap14 = JSON.parse(localStorage.getItem("noleap14"));
       localStorage.setItem("noleap15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - noleaps));
       const noleap15 = JSON.parse(localStorage.getItem("noleap15"));
       localStorage.setItem("noleap16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - noleaps));
       const noleap16 = JSON.parse(localStorage.getItem("noleap16"));
       localStorage.setItem("noleap17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - noleaps));
       const noleap17 = JSON.parse(localStorage.getItem("noleap17"));
       localStorage.setItem("noleap18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - noleaps));
       const noleap18 = JSON.parse(localStorage.getItem("noleap18"));
       localStorage.setItem("noleap19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - noleaps));
       const noleap19 = JSON.parse(localStorage.getItem("noleap19"));
       localStorage.setItem("noleap20",JSON.stringify(Number(retriv) + Number(twentiethDate) - noleaps));
       const noleap20 = JSON.parse(localStorage.getItem("noleap20"));
       localStorage.setItem("noleap21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - noleaps));
       const noleap21 = JSON.parse(localStorage.getItem("noleap21"));
       localStorage.setItem("noleap22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - noleaps));
       const noleap22 = JSON.parse(localStorage.getItem("noleap22"));
       localStorage.setItem("noleap23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - noleaps));
       const noleap23 = JSON.parse(localStorage.getItem("noleap23"));
       localStorage.setItem("noleap24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - noleaps));
       const noleap24 = JSON.parse(localStorage.getItem("noleap24"));
       localStorage.setItem("noleap25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - noleaps));
       const noleap25 = JSON.parse(localStorage.getItem("noleap25"));
       localStorage.setItem("noleap26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - noleaps));
       const noleap26 = JSON.parse(localStorage.getItem("noleap26"));
       localStorage.setItem("noleap27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - noleaps));
       const noleap27 = JSON.parse(localStorage.getItem("noleap27"));
       localStorage.setItem("noleap28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - noleaps));
       const noleap28 = JSON.parse(localStorage.getItem("noleap28"));



       if (Number(retriv + firstDate) > Number(range) & range1 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstPostP.classList.add("show-first-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + secondDate) > Number(range) & range2 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondPostP.classList.add("show-second-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + thirdDate) > Number(range) & range3 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdPostP.classList.add("show-third-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fourthDate) > Number(range) & range4 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthPostP.classList.add("show-fourth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fifthDate) > Number(range) & range5 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthPostP.classList.add("show-fifth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + sixthDate) > Number(range) & range6 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstOvul.classList.add("show-first-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + seventhDate) > Number(range) & range7 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondOvul.classList.add("show-second-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + eighthDate) > Number(range) & range8 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdOvul.classList.add("show-third-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + ninthDate) > Number(range) & range9 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthOvul.classList.add("show-fourth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + tenthDate) > Number(range) & range10 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthOvul.classList.add("show-fifth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + eleventhDate) > Number(range) & range11 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstPostO.classList.add("show-first-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twelfthDate) > Number(range) & range12 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondPostO.classList.add("show-second-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + thirteenthDate) > Number(range) & range13 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdPostO.classList.add("show-third-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fourteenthDate) > Number(range) & range14 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthPostO.classList.add("show-fourth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fifteenthDate) > Number(range) & range15 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthPostO.classList.add("show-fifth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + sixteenthDate) > Number(range) & range16 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           sixthPostO.classList.add("show-sixth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + seventeenthDate) > Number(range) & range17 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           seventhPostO.classList.add("show-seventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + eighteenthDate) > Number(range) & range18 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           eighthPostO.classList.add("show-eighth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + nineteenthDate) > Number(range) & range19 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           ninthPostO.classList.add("show-ninth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentiethDate) > Number(range) & range20 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           tenthPostO.classList.add("show-tenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentfirstDate) > Number(range) & range21 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           eleventhPostO.classList.add("show-eleventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentsecondDate) > Number(range) & range22 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           twelfthPostO.classList.add("show-twelfth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentthirdDate) > Number(range) & range23 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirteenthPostO.classList.add("show-thirteenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentfourthDate) > Number(range) & range24 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstMen.classList.add("show-first-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentfifthDate) > Number(range) & range25 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondMen.classList.add("show-second-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentsixthDate) > Number(range) & range26 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdMen.classList.add("show-third-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentseventhDate) > Number(range) & range27 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthMen.classList.add("show-fourth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twenteighthDate) > Number(range) & range28 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthMen.classList.add("show-fifth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

     
        

       if (Number(retriv + firstDate) > Number(limit) & diff1 === Number(retrivDate)) {
           firstPostP.classList.add("show-first-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");

        console.log("Limit is less");
        
       } else {
        console.log("limit is greater");
       }

       if (Number(retriv + secondDate) > Number(limit) & diff2 === Number(retrivDate)) {
        secondPostP.classList.add("show-second-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + thirdDate) > Number(limit) & diff3 === Number(retrivDate)) {
        thirdPostP.classList.add("show-third-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fourthDate) > Number(limit) & diff4 === Number(retrivDate)) {
        fourthPostP.classList.add("show-fourth-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fifthDate) > Number(limit) & diff5 === Number(retrivDate)) {
        fifthPostP.classList.add("show-fifth-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + sixthDate) > Number(limit) & diff6 === Number(retrivDate)) {
        firstOvul.classList.add("show-first-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + seventhDate) > Number(limit) & diff7 === Number(retrivDate)) {
        secondOvul.classList.add("show-second-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + eighthDate) > Number(limit) & diff8 === Number(retrivDate)) {
        thirdOvul.classList.add("show-third-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + ninthDate) > Number(limit) & diff9 === Number(retrivDate)) {
        fourthOvul.classList.add("show-fourth-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + tenthDate) > Number(limit) & diff10 === Number(retrivDate)) {
        fifthOvul.classList.add("show-fifth-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + eleventhDate) > Number(limit) & diff11 === Number(retrivDate)) {
        firstPostO.classList.add("show-first-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twelfthDate) > Number(limit) & diff12 === Number(retrivDate)) {
        secondPostO.classList.add("show-second-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + thirteenthDate) > Number(limit) & diff13 === Number(retrivDate)) {
        thirdPostO.classList.add("show-third-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fourteenthDate) > Number(limit) & diff14 === Number(retrivDate)) {
        fourthPostO.classList.add("show-fourth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fifteenthDate) > Number(limit) & diff15 === Number(retrivDate)) {
        fifthPostO.classList.add("show-fifth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + sixteenthDate) > Number(limit) & diff16 === Number(retrivDate)) {
        sixthPostO.classList.add("show-sixth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + seventeenthDate) > Number(limit) & diff17 === Number(retrivDate)) {
        seventhPostO.classList.add("show-seventh-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + eighteenthDate) > Number(limit) & diff18 === Number(retrivDate)) {
        eighthPostO.classList.add("show-eighth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + nineteenthDate) > Number(limit) & diff19 === Number(retrivDate)) {
        ninthPostO.classList.add("show-ninth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentiethDate) > Number(limit) & diff20 === Number(retrivDate)) {
        tenthPostO.classList.add("show-tenth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentfirstDate) > Number(limit) & diff21 === Number(retrivDate)) {
        eleventhPostO.classList.add("show-eleventh-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentsecondDate) > Number(limit) & diff22 === Number(retrivDate)) {
        twelfthPostO.classList.add("show-twelfth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentthirdDate) > Number(limit) & diff23 === Number(retrivDate)) {
        thirteenthPostO.classList.add("show-thirteenth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentfourthDate) > Number(limit) & diff24 === Number(retrivDate)) {
        firstMen.classList.add("show-first-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentfifthDate) > Number(limit) & diff25 === Number(retrivDate)) {
        secondMen.classList.add("show-second-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentsixthDate) > Number(limit) & diff26 === Number(retrivDate)) {
        thirdMen.classList.add("show-third-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentseventhDate) > Number(limit) & diff27 === Number(retrivDate)) {
        fourthMen.classList.add("show-fourth-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twenteighthDate) > Number(limit) & diff28 === Number(retrivDate)) {
        fifthMen.classList.add("show-fifth-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    const leap = new Date(newyear, 1, 29).getDate() === 29;
    if (leap & month[justMonth] === "February" & Number(retriv + firstDate) > Number(leaps) & leap1 === Number(retrivDate)) {
           firstPostP.classList.add("show-first-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + secondDate) > Number(leaps) & leap2 === Number(retrivDate)) {
           secondPostP.classList.add("show-second-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + thirdDate) > Number(leaps) & leap3 === Number(retrivDate)) {
           thirdPostP.classList.add("show-third-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + fourthDate) > Number(leaps) & leap4 === Number(retrivDate)) {
           fourthPostP.classList.add("show-fourth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + fifthDate) > Number(leaps) & leap5 === Number(retrivDate)) {
           fifthPostP.classList.add("show-fifth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + sixthDate) > Number(leaps) & leap6 === Number(retrivDate)) {
           firstOvul.classList.add("show-first-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + seventhDate) > Number(leaps) & leap7 === Number(retrivDate)) {
           secondOvul.classList.add("show-second-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + eighthDate) > Number(leaps) & leap8 === Number(retrivDate)) {
           thirdOvul.classList.add("show-third-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + ninthDate) > Number(leaps) & leap9 === Number(retrivDate)) {
           fourthOvul.classList.add("show-fourth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + tenthDate) > Number(leaps) & leap10 === Number(retrivDate)) {
           fifthOvul.classList.add("show-fifth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + eleventhDate) > Number(leaps) & leap11 === Number(retrivDate)) {
           firstPostO.classList.add("show-first-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twelfthDate) > Number(leaps) & leap12 === Number(retrivDate)) {
           secondPostO.classList.add("show-second-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + thirteenthDate) > Number(leaps) & leap13 === Number(retrivDate)) {
           thirdPostO.classList.add("show-third-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + fourteenthDate) > Number(leaps) & leap14 === Number(retrivDate)) {
           fourthPostO.classList.add("show-fourth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + fifteenthDate) > Number(leaps) & leap15 === Number(retrivDate)) {
           fifthPostO.classList.add("show-fifth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + sixteenthDate) > Number(leaps) & leap16 === Number(retrivDate)) {
           sixthPostO.classList.add("show-sixth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + seventeenthDate) > Number(leaps) & leap17 === Number(retrivDate)) {
           seventhPostO.classList.add("show-seventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + eighteenthDate) > Number(leaps) & leap18 === Number(retrivDate)) {
           eighthPostO.classList.add("show-eighth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + nineteenthDate) > Number(leaps) & leap19 === Number(retrivDate)) {
           ninthPostO.classList.add("show-ninth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentiethDate) > Number(leaps) & leap20 === Number(retrivDate)) {
           tenthPostO.classList.add("show-tenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentfirstDate) > Number(leaps) & leap21 === Number(retrivDate)) {
           eleventhPostO.classList.add("show-eleventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentsecondDate) > Number(leaps) & leap22 === Number(retrivDate)) {
           twelfthPostO.classList.add("show-twelfth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentthirdDate) > Number(leaps) & leap23 === Number(retrivDate)) {
           thirteenthPostO.classList.add("show-thirteenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentfourthDate) > Number(leaps) & leap24 === Number(retrivDate)) {
           firstMen.classList.add("show-first-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentfifthDate) > Number(leaps) & leap25 === Number(retrivDate)) {
           secondMen.classList.add("show-second-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentsixthDate) > Number(leaps) & leap26 === Number(retrivDate)) {
           thirdMen.classList.add("show-third-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentseventhDate) > Number(leaps) & leap27 === Number(retrivDate)) {
           fourthMen.classList.add("show-fourth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twenteighthDate) > Number(leaps) & leap28 === Number(retrivDate)) {
           fifthMen.classList.add("show-fifth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }


  if ( month[justMonth] === "February" & Number(retriv + firstDate) > Number(noleaps) & noleap1 === Number(retrivDate)) {
        firstPostP.classList.add("show-first-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");
        console.log("Not a leap year");
     
 } else {
     console.log("A leap year");
 }
 if ( month[justMonth] === "February" & Number(retriv + secondDate) > Number(noleaps) & noleap2 === Number(retrivDate)) {
    secondPostP.classList.add("show-second-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + thirdDate) > Number(noleaps) & noleap3 === Number(retrivDate)) {
    thirdPostP.classList.add("show-third-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fourthDate) > Number(noleaps) & noleap4 === Number(retrivDate)) {
    fourthPostP.classList.add("show-fourth-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fifthDate) > Number(noleaps) & noleap5 === Number(retrivDate)) {
    fifthPostP.classList.add("show-fifth-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + sixthDate) > Number(noleaps) & noleap6 === Number(retrivDate)) {
    firstOvul.classList.add("show-first-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + seventhDate) > Number(noleaps) & noleap7 === Number(retrivDate)) {
    secondOvul.classList.add("show-second-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + eighthDate) > Number(noleaps) & noleap8 === Number(retrivDate)) {
    thirdOvul.classList.add("show-third-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + ninthDate) > Number(noleaps) & noleap9 === Number(retrivDate)) {
    fourthOvul.classList.add("show-fourth-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + tenthDate) > Number(noleaps) & noleap10 === Number(retrivDate)) {
    fifthOvul.classList.add("show-fifth-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + eleventhDate) > Number(noleaps) & noleap11 === Number(retrivDate)) {
    firstPostO.classList.add("show-first-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twelfthDate) > Number(noleaps) & noleap12 === Number(retrivDate)) {
    secondPostO.classList.add("show-second-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + thirteenthDate) > Number(noleaps) & noleap13 === Number(retrivDate)) {
    thirdPostO.classList.add("show-third-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fourteenthDate) > Number(noleaps) & noleap14 === Number(retrivDate)) {
    fourthPostO.classList.add("show-fourth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fifteenthDate) > Number(noleaps) & noleap15 === Number(retrivDate)) {
    fifthPostO.classList.add("show-fifth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + sixteenthDate) > Number(noleaps) & noleap16 === Number(retrivDate)) {
    sixthPostO.classList.add("show-sixth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + seventeenthDate) > Number(noleaps) & noleap17 === Number(retrivDate)) {
    seventhPostO.classList.add("show-seventh-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + eighteenthDate) > Number(noleaps) & noleap18 === Number(retrivDate)) {
    eighthPostO.classList.add("show-eighth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + nineteenthDate) > Number(noleaps) & noleap19 === Number(retrivDate)) {
    ninthPostO.classList.add("show-ninth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentiethDate) > Number(noleaps) & noleap20 === Number(retrivDate)) {
    tenthPostO.classList.add("show-tenth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentfirstDate) > Number(noleaps) & noleap21 === Number(retrivDate)) {
    eleventhPostO.classList.add("show-eleventh-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentsecondDate) > Number(noleaps) & noleap22 === Number(retrivDate)) {
    twelfthPostO.classList.add("show-twelfth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentthirdDate) > Number(noleaps) & noleap23 === Number(retrivDate)) {
    thirteenthPostO.classList.add("show-thirteenth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentfourthDate) > Number(noleaps) & noleap24 === Number(retrivDate)) {
    firstMen.classList.add("show-first-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentfifthDate) > Number(noleaps) & noleap25 === Number(retrivDate)) {
    secondMen.classList.add("show-second-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentsixthDate) > Number(noleaps) & noleap26 === Number(retrivDate)) {
    thirdMen.classList.add("show-third-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentseventhDate) > Number(noleaps) & noleap27 === Number(retrivDate)) {
    fourthMen.classList.add("show-fourth-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twenteighthDate) > Number(noleaps) & noleap28 === Number(retrivDate)) {
    fifthMen.classList.add("show-fifth-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}

       
       
       if ( Number(retrivDate) === (Number(retriv) + Number(firstDate)) ) {
           console.log("correct");
           firstPostP.classList.add("show-first-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           
           
       } else {
           console.log("wrong");
       } 
       if ( Number(retrivDate) === (Number(retriv) + Number(secondDate)) ){
           secondPostP.classList.add("show-second-post-p");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           

       } else {
           console.log("wrong");
   
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(thirdDate)) ){
           thirdPostP.classList.add("show-third-post-p");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
   
   
       } else {
           console.log("wrong");
           
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(fourthDate)) ){
           fourthPostP.classList.add("show-fourth-post-p");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           
   
   
       } else {
           console.log("wrong");
           
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(fifthDate)) ){
           fifthPostP.classList.add("show-fifth-post-p");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           
   
   
       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(sixthDate)) ){
           firstOvul.classList.add("show-first-ovulation");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
            

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(seventhDate)) ){
           secondOvul.classList.add("show-second-ovulation");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
         

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(eighthDate)) ){
           thirdOvul.classList.add("show-third-ovulation");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
              

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(ninthDate)) ){
           fourthOvul.classList.add("show-fourth-ovulation");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");  

       } else {
           console.log("wrong");
           
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(tenthDate)) ){
           fifthOvul.classList.add("show-fifth-ovulation");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
            

       } else {
           console.log("wrong");
          

       }
       if ( Number(retrivDate) === (Number(retriv) + Number(eleventhDate)) ){
           firstPostO.classList.add("show-first-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
        

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twelfthDate)) ){
           secondPostO.classList.add("show-second-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body"); 
        

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(thirteenthDate)) ){
           thirdPostO.classList.add("show-third-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body"); 
             

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(fourteenthDate)) ){
           fourthPostO.classList.add("show-fourth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
             

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(fifteenthDate)) ){
           fifthPostO.classList.add("show-fifth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
    

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(sixteenthDate)) ){
           sixthPostO.classList.add("show-sixth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
        

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(seventeenthDate)) ){
           seventhPostO.classList.add("show-seventh-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
        

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(eighteenthDate)) ){
           eighthPostO.classList.add("show-eighth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
        

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(nineteenthDate)) ){
           ninthPostO.classList.add("show-ninth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
             

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twentiethDate)) ){
           tenthPostO.classList.add("show-tenth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
             

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twentfirstDate)) ){
           eleventhPostO.classList.add("show-eleventh-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
            

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twentsecondDate)) ){
           twelfthPostO.classList.add("show-twelfth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
         

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twentthirdDate)) ){
           thirteenthPostO.classList.add("show-thirteenth-post-o");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
             

       } else {
           console.log("wrong");
       }
      

       if ( Number(retrivDate) === (Number(retriv) + Number(twentfourthDate)) ){
           firstMen.classList.add("show-first-men");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
         

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twentfifthDate)) ){
           secondMen.classList.add("show-second-men");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
         

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twentsixthDate)) ){
           thirdMen.classList.add("show-third-men");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
         

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twentseventhDate)) ){
           fourthMen.classList.add("show-fourth-men");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
         

       } else {
           console.log("wrong");
       }
       if ( Number(retrivDate) === (Number(retriv) + Number(twenteighthDate)) ){
           fifthMen.classList.add("show-fifth-men");
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn"); 
           overFlow.classList.add("hide-hidden-body");
         

       } else {
           console.log("wrong");
       }
   
   }
    
    
} else {
        console.log("there is retriv");
        
     }

     
      const currDate = new Date();
        const precDate = currDate.getDate();
        const string = precDate.toString();
   

     localStorage.setItem("uniTime",JSON.stringify(string));
     const retrivDate = JSON.parse(localStorage.getItem("uniTime"));
          
    // retrieve previous data in the local storage on refreshing the page
    window.addEventListener("DOMContentLoaded", function(){
        alert("clear and refresh page after a complete cycle");
        const currDate = new Date();
        const precDate = currDate.getDate();
        const string = precDate.toString();

        localStorage.setItem("firVal",JSON.stringify("1"));
        const firstDate = JSON.parse(localStorage.getItem("firVal"));
        localStorage.setItem("sVal", JSON.stringify("2"));
        localStorage.setItem("tVal", JSON.stringify("3"));
        localStorage.setItem("foVal", JSON.stringify("4"));
        localStorage.setItem("fiVal", JSON.stringify("5"));
        localStorage.setItem("sixVal", JSON.stringify("6"));
        localStorage.setItem("sevVal", JSON.stringify("7"));
        localStorage.setItem("eitVal", JSON.stringify("8"));
        localStorage.setItem("ninVal", JSON.stringify("9"));
        localStorage.setItem("tenVal", JSON.stringify("10"));
        localStorage.setItem("elevVal", JSON.stringify("11"));
        localStorage.setItem("twelVal", JSON.stringify("12"));
        localStorage.setItem("thirtVal", JSON.stringify("13"));
        localStorage.setItem("fourtVal", JSON.stringify("14"));
        localStorage.setItem("fiftVal", JSON.stringify("15"));
        localStorage.setItem("sixtVal", JSON.stringify("16"));
        localStorage.setItem("seventVal", JSON.stringify("17"));
        localStorage.setItem("eightVal", JSON.stringify("18"));
        localStorage.setItem("nintVal", JSON.stringify("19"));
        localStorage.setItem("twentVal", JSON.stringify("20"));
        localStorage.setItem("twenfirstVal", JSON.stringify("21"));
        localStorage.setItem("twensecondVal", JSON.stringify("22"));
        localStorage.setItem("twenthirdVal", JSON.stringify("23"));
        localStorage.setItem("twentfourthVal", JSON.stringify("24"));
        localStorage.setItem("twentfifthVal", JSON.stringify("25"));
        localStorage.setItem("twentsixthVal", JSON.stringify("26"));
        localStorage.setItem("twentseventhVal", JSON.stringify("27"));
        localStorage.setItem("twenteighthVal", JSON.stringify("28"));
        localStorage.setItem("emptyVal", JSON.stringify(""));
 
        const emptyDate = JSON.parse(localStorage.getItem("emptyVal"));
        const secondDate = JSON.parse(localStorage.getItem("sVal"));
        const thirdDate = JSON.parse(localStorage.getItem("tVal"));
        const fourthDate = JSON.parse(localStorage.getItem("foVal"));
        const fifthDate = JSON.parse(localStorage.getItem("fiVal"));
        const sixthDate = JSON.parse(localStorage.getItem("sixVal"));
        const seventhDate = JSON.parse(localStorage.getItem("sevVal"));
        const eighthDate = JSON.parse(localStorage.getItem("eitVal"));
        const ninthDate = JSON.parse(localStorage.getItem("ninVal"));
        const tenthDate = JSON.parse(localStorage.getItem("tenVal"));
        const eleventhDate = JSON.parse(localStorage.getItem("elevVal"));
        const twelfthDate = JSON.parse(localStorage.getItem("twelVal"));
        const thirteenthDate = JSON.parse(localStorage.getItem("thirtVal"));
        const fourteenthDate = JSON.parse(localStorage.getItem("fourtVal"));
        const fifteenthDate = JSON.parse(localStorage.getItem("fiftVal"));
        const sixteenthDate = JSON.parse(localStorage.getItem("sixtVal"));
        const seventeenthDate = JSON.parse(localStorage.getItem("seventVal"));
        const eighteenthDate = JSON.parse(localStorage.getItem("eightVal"));
        const nineteenthDate = JSON.parse(localStorage.getItem("nintVal"));
        const twentiethDate = JSON.parse(localStorage.getItem("twentVal"));
        const twentfirstDate = JSON.parse(localStorage.getItem("twenfirstVal"));
        const twentsecondDate = JSON.parse(localStorage.getItem("twensecondVal"));
        const twentthirdDate = JSON.parse(localStorage.getItem("twenthirdVal"));
        const twentfourthDate = JSON.parse(localStorage.getItem("twentfourthVal"));
        const twentfifthDate = JSON.parse(localStorage.getItem("twentfifthVal"));
        const twentsixthDate = JSON.parse(localStorage.getItem("twentsixthVal"));
        const twentseventhDate = JSON.parse(localStorage.getItem("twentseventhVal"));
        const twenteighthDate = JSON.parse(localStorage.getItem("twenteighthVal"));
        
      
        if (retriv) {
            
           
        if (Number(retriv) === Number(emptyDate)) {
            firstPostP.classList.add("hide-first-post-p");
            secondPostP.classList.add("hide-second-post-p");
            thirdPostP.classList.add("hide-third-post-p");
            fourthPostP.classList.add("hide-fourth-post-p");
            fifthPostP.classList.add("hide-fifth-post-p");
            firstOvul.classList.add("hide-first-ovulation");
            secondOvul.classList.add("hide-second-ovulation");
            thirdOvul.classList.add("hide-third-ovulation");
            fourthOvul.classList.add("hide-fourth-ovulation");
            fifthOvul.classList.add("hide-fifth-ovulation");
            firstPostO.classList.add("hide-first-post-o");
            secondPostO.classList.add("hide-second-post-o");
            thirdPostO.classList.add("hide-third-post-o");
            fourthPostO.classList.add("hide-fourth-post-o");
            fifthPostO.classList.add("hide-fifth-post-o");
            sixthPostO.classList.add("hide-sixth-post-o");
            seventhPostO.classList.add("hide-seventh-post-o");
            eighthPostO.classList.add("hide-eighth-post-o");
            ninthPostO.classList.add("hide-ninth-post-o");
            tenthPostO.classList.add("hide-tenth-post-o");
            eleventhPostO.classList.add("hide-eleventh-post-o");
            twelfthPostO.classList.add("hide-twelfth-post-o");
            thirteenthPostO.classList.add("hide-thirteenth-post-o");
            firstMen.classList.add("hide-first-men");
            secondMen.classList.add("hide-second-men");
            thirdMen.classList.add("hide-third-men");
            fourthMen.classList.add("hide-fourth-men");
            fifthMen.classList.add("hide-fifth-men");
   
            heading.classList.remove("hide-head-info");
            dateInput.classList.remove("hide-date");
            infoDate.classList.remove("block-info");
            hideInfo.classList.remove("block-hide-info");
            downButton.classList.remove("hide-down-btn");
            overFlow.classList.remove("hide-hidden-body");
            
             periodDate.classList.add("hide-period");
             heading.classList.add("show-head-info");
             dateInput.classList.add("show-date");
             infoDate.classList.add("show-info");
             hideInfo.classList.add("show-hide-info");
             downButton.classList.add("show-down-btn");
             overFlow.classList.add("show-hidden-body");
 
             mainTip.classList.add("show-tips");
             inform.classList.add("show-info-head");
             buttonDown.classList.add("show-btn-down");
             
            console.log("A null value");
            
            
        } else {
            console.log("Not a null");
            
        }
        
        const check = typeof(retrivDate)

        localStorage.setItem("limit",JSON.stringify(Number(31)));
       const limit = JSON.parse(localStorage.getItem("limit"));
       localStorage.setItem("diff1",JSON.stringify(Number(retriv) + Number(firstDate) - limit));
       const diff1 = JSON.parse(localStorage.getItem("diff1"));
       localStorage.setItem("diff2",JSON.stringify(Number(retriv) + Number(secondDate) - limit));
       const diff2 = JSON.parse(localStorage.getItem("diff2"));
       localStorage.setItem("diff3",JSON.stringify(Number(retriv) + Number(thirdDate) - limit));
       const diff3 = JSON.parse(localStorage.getItem("diff3"));
       localStorage.setItem("diff4",JSON.stringify(Number(retriv) + Number(fourthDate) - limit));
       const diff4 = JSON.parse(localStorage.getItem("diff4"));
       localStorage.setItem("diff5",JSON.stringify(Number(retriv) + Number(fifthDate) - limit));
       const diff5 = JSON.parse(localStorage.getItem("diff5"));
       localStorage.setItem("diff6",JSON.stringify(Number(retriv) + Number(sixthDate) - limit));
       const diff6 = JSON.parse(localStorage.getItem("diff6"));
       localStorage.setItem("diff7",JSON.stringify(Number(retriv) + Number(seventhDate) - limit));
       const diff7 = JSON.parse(localStorage.getItem("diff7"));
       localStorage.setItem("diff8",JSON.stringify(Number(retriv) + Number(eighthDate) - limit));
       const diff8 = JSON.parse(localStorage.getItem("diff8"));
       localStorage.setItem("diff9",JSON.stringify(Number(retriv) + Number(ninthDate) - limit));
       const diff9 = JSON.parse(localStorage.getItem("diff9"));
       localStorage.setItem("diff10",JSON.stringify(Number(retriv) + Number(tenthDate) - limit));
       const diff10 = JSON.parse(localStorage.getItem("diff10"));
       localStorage.setItem("diff11",JSON.stringify(Number(retriv) + Number(eleventhDate) - limit));
       const diff11 = JSON.parse(localStorage.getItem("diff11"));
       localStorage.setItem("diff12",JSON.stringify(Number(retriv) + Number(twelfthDate) - limit));
       const diff12 = JSON.parse(localStorage.getItem("diff12"));
       localStorage.setItem("diff13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - limit));
       const diff13 = JSON.parse(localStorage.getItem("diff13"));
       localStorage.setItem("diff14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - limit));
       const diff14 = JSON.parse(localStorage.getItem("diff14"));
       localStorage.setItem("diff15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - limit));
       const diff15 = JSON.parse(localStorage.getItem("diff15"));
       localStorage.setItem("diff16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - limit));
       const diff16 = JSON.parse(localStorage.getItem("diff16"));
       localStorage.setItem("diff17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - limit));
       const diff17 = JSON.parse(localStorage.getItem("diff17"));
       localStorage.setItem("diff18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - limit));
       const diff18 = JSON.parse(localStorage.getItem("diff18"));
       localStorage.setItem("diff19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - limit));
       const diff19 = JSON.parse(localStorage.getItem("diff19"));
       localStorage.setItem("diff20",JSON.stringify(Number(retriv) + Number(twentiethDate) - limit));
       const diff20 = JSON.parse(localStorage.getItem("diff20"));
       localStorage.setItem("diff21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - limit));
       const diff21 = JSON.parse(localStorage.getItem("diff21"));
       localStorage.setItem("diff22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - limit));
       const diff22 = JSON.parse(localStorage.getItem("diff22"));
       localStorage.setItem("diff23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - limit));
       const diff23 = JSON.parse(localStorage.getItem("diff23"));
       localStorage.setItem("diff24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - limit));
       const diff24 = JSON.parse(localStorage.getItem("diff24"));
       localStorage.setItem("diff25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - limit));
       const diff25 = JSON.parse(localStorage.getItem("diff25"));
       localStorage.setItem("diff26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - limit));
       const diff26 = JSON.parse(localStorage.getItem("diff26"));
       localStorage.setItem("diff27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - limit));
       const diff27 = JSON.parse(localStorage.getItem("diff27"));
       localStorage.setItem("diff28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - limit));
       const diff28 = JSON.parse(localStorage.getItem("diff28"));


       localStorage.setItem("range",JSON.stringify(Number(30)));
       const range = JSON.parse(localStorage.getItem("range"));
       localStorage.setItem("range1",JSON.stringify(Number(retriv) + Number(firstDate) - range));
       const range1 = JSON.parse(localStorage.getItem("range1"));
       localStorage.setItem("range2",JSON.stringify(Number(retriv) + Number(secondDate) - range));
       const range2 = JSON.parse(localStorage.getItem("range2"));
       localStorage.setItem("range3",JSON.stringify(Number(retriv) + Number(thirdDate) - range));
       const range3 = JSON.parse(localStorage.getItem("range3"));
       localStorage.setItem("range4",JSON.stringify(Number(retriv) + Number(fourthDate) - range));
       const range4 = JSON.parse(localStorage.getItem("range4"));
       localStorage.setItem("range5",JSON.stringify(Number(retriv) + Number(fifthDate) - range));
       const range5 = JSON.parse(localStorage.getItem("range5"));
       localStorage.setItem("range6",JSON.stringify(Number(retriv) + Number(sixthDate) - range));
       const range6 = JSON.parse(localStorage.getItem("range6"));
       localStorage.setItem("range7",JSON.stringify(Number(retriv) + Number(seventhDate) - range));
       const range7 = JSON.parse(localStorage.getItem("range7"));
       localStorage.setItem("range8",JSON.stringify(Number(retriv) + Number(eighthDate) - range));
       const range8 = JSON.parse(localStorage.getItem("range8"));
       localStorage.setItem("range9",JSON.stringify(Number(retriv) + Number(ninthDate) - range));
       const range9 = JSON.parse(localStorage.getItem("range9"));
       localStorage.setItem("range10",JSON.stringify(Number(retriv) + Number(tenthDate) - range));
       const range10 = JSON.parse(localStorage.getItem("range10"));
       localStorage.setItem("range11",JSON.stringify(Number(retriv) + Number(eleventhDate) - range));
       const range11 = JSON.parse(localStorage.getItem("range11"));
       localStorage.setItem("range12",JSON.stringify(Number(retriv) + Number(twelfthDate) - range));
       const range12 = JSON.parse(localStorage.getItem("range12"));
       localStorage.setItem("range13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - range));
       const range13 = JSON.parse(localStorage.getItem("range13"));
       localStorage.setItem("range14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - range));
       const range14 = JSON.parse(localStorage.getItem("range14"));
       localStorage.setItem("range15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - range));
       const range15 = JSON.parse(localStorage.getItem("range15"));
       localStorage.setItem("range16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - range));
       const range16 = JSON.parse(localStorage.getItem("range16"));
       localStorage.setItem("range17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - range));
       const range17 = JSON.parse(localStorage.getItem("range17"));
       localStorage.setItem("range18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - range));
       const range18 = JSON.parse(localStorage.getItem("range18"));
       localStorage.setItem("range19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - range));
       const range19 = JSON.parse(localStorage.getItem("range19"));
       localStorage.setItem("range20",JSON.stringify(Number(retriv) + Number(twentiethDate) - range));
       const range20 = JSON.parse(localStorage.getItem("range20"));
       localStorage.setItem("range21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - range));
       const range21 = JSON.parse(localStorage.getItem("range21"));
       localStorage.setItem("range22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - range));
       const range22 = JSON.parse(localStorage.getItem("range22"));
       localStorage.setItem("range23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - range));
       const range23 = JSON.parse(localStorage.getItem("range23"));
       localStorage.setItem("range24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - range));
       const range24 = JSON.parse(localStorage.getItem("range24"));
       localStorage.setItem("range25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - range));
       const range25 = JSON.parse(localStorage.getItem("range25"));
       localStorage.setItem("range26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - range));
       const range26 = JSON.parse(localStorage.getItem("range26"));
       localStorage.setItem("range27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - range));
       const range27 = JSON.parse(localStorage.getItem("range27"));
       localStorage.setItem("range28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - range));
       const range28 = JSON.parse(localStorage.getItem("range28"));


       localStorage.setItem("leaps",JSON.stringify(Number(29)));
       const leaps = JSON.parse(localStorage.getItem("leaps"));
       localStorage.setItem("leap1",JSON.stringify(Number(retriv) + Number(firstDate) - leaps));
       const leap1 = JSON.parse(localStorage.getItem("leap1"));
       localStorage.setItem("leap2",JSON.stringify(Number(retriv) + Number(secondDate) - leaps));
       const leap2 = JSON.parse(localStorage.getItem("leap2"));
       localStorage.setItem("leap3",JSON.stringify(Number(retriv) + Number(thirdDate) - leaps));
       const leap3 = JSON.parse(localStorage.getItem("leap3"));
       localStorage.setItem("leap4",JSON.stringify(Number(retriv) + Number(fourthDate) - leaps));
       const leap4 = JSON.parse(localStorage.getItem("leap4"));
       localStorage.setItem("leap5",JSON.stringify(Number(retriv) + Number(fifthDate) - leaps));
       const leap5 = JSON.parse(localStorage.getItem("leap5"));
       localStorage.setItem("leap6",JSON.stringify(Number(retriv) + Number(sixthDate) - leaps));
       const leap6 = JSON.parse(localStorage.getItem("leap6"));
       localStorage.setItem("leap7",JSON.stringify(Number(retriv) + Number(seventhDate) - leaps));
       const leap7 = JSON.parse(localStorage.getItem("leap7"));
       localStorage.setItem("leap8",JSON.stringify(Number(retriv) + Number(eighthDate) - leaps));
       const leap8 = JSON.parse(localStorage.getItem("leap8"));
       localStorage.setItem("leap9",JSON.stringify(Number(retriv) + Number(ninthDate) - leaps));
       const leap9 = JSON.parse(localStorage.getItem("leap9"));
       localStorage.setItem("leap10",JSON.stringify(Number(retriv) + Number(tenthDate) - leaps));
       const leap10 = JSON.parse(localStorage.getItem("leap10"));
       localStorage.setItem("leap11",JSON.stringify(Number(retriv) + Number(eleventhDate) - leaps));
       const leap11 = JSON.parse(localStorage.getItem("leap11"));
       localStorage.setItem("leap12",JSON.stringify(Number(retriv) + Number(twelfthDate) - leaps));
       const leap12 = JSON.parse(localStorage.getItem("leap12"));
       localStorage.setItem("leap13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - leaps));
       const leap13 = JSON.parse(localStorage.getItem("leap13"));
       localStorage.setItem("leap14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - leaps));
       const leap14 = JSON.parse(localStorage.getItem("leap14"));
       localStorage.setItem("leap15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - leaps));
       const leap15 = JSON.parse(localStorage.getItem("leap15"));
       localStorage.setItem("leap16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - leaps));
       const leap16 = JSON.parse(localStorage.getItem("leap16"));
       localStorage.setItem("leap17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - leaps));
       const leap17 = JSON.parse(localStorage.getItem("leap17"));
       localStorage.setItem("leap18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - leaps));
       const leap18 = JSON.parse(localStorage.getItem("leap18"));
       localStorage.setItem("leap19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - leaps));
       const leap19 = JSON.parse(localStorage.getItem("leap19"));
       localStorage.setItem("leap20",JSON.stringify(Number(retriv) + Number(twentiethDate) - leaps));
       const leap20 = JSON.parse(localStorage.getItem("leap20"));
       localStorage.setItem("leap21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - leaps));
       const leap21 = JSON.parse(localStorage.getItem("leap21"));
       localStorage.setItem("leap22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - leaps));
       const leap22 = JSON.parse(localStorage.getItem("leap22"));
       localStorage.setItem("leap23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - leaps));
       const leap23 = JSON.parse(localStorage.getItem("leap23"));
       localStorage.setItem("leap24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - leaps));
       const leap24 = JSON.parse(localStorage.getItem("leap24"));
       localStorage.setItem("leap25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - leaps));
       const leap25 = JSON.parse(localStorage.getItem("leap25"));
       localStorage.setItem("leap26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - leaps));
       const leap26 = JSON.parse(localStorage.getItem("leap26"));
       localStorage.setItem("leap27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - leaps));
       const leap27 = JSON.parse(localStorage.getItem("leap27"));
       localStorage.setItem("leap28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - leaps));
       const leap28 = JSON.parse(localStorage.getItem("leap28"));


       localStorage.setItem("noleaps",JSON.stringify(Number(28)));
       const noleaps = JSON.parse(localStorage.getItem("noleaps"));
       localStorage.setItem("noleap1",JSON.stringify(Number(retriv) + Number(firstDate) - noleaps));
       const noleap1 = JSON.parse(localStorage.getItem("noleap1"));
       localStorage.setItem("noleap2",JSON.stringify(Number(retriv) + Number(secondDate) - noleaps));
       const noleap2 = JSON.parse(localStorage.getItem("noleap2"));
       localStorage.setItem("noleap3",JSON.stringify(Number(retriv) + Number(thirdDate) - noleaps));
       const noleap3 = JSON.parse(localStorage.getItem("noleap3"));
       localStorage.setItem("noleap4",JSON.stringify(Number(retriv) + Number(fourthDate) - noleaps));
       const noleap4 = JSON.parse(localStorage.getItem("noleap4"));
       localStorage.setItem("noleap5",JSON.stringify(Number(retriv) + Number(fifthDate) - noleaps));
       const noleap5 = JSON.parse(localStorage.getItem("noleap5"));
       localStorage.setItem("noleap6",JSON.stringify(Number(retriv) + Number(sixthDate) - noleaps));
       const noleap6 = JSON.parse(localStorage.getItem("noleap6"));
       localStorage.setItem("noleap7",JSON.stringify(Number(retriv) + Number(seventhDate) - noleaps));
       const noleap7 = JSON.parse(localStorage.getItem("noleap7"));
       localStorage.setItem("noleap8",JSON.stringify(Number(retriv) + Number(eighthDate) - noleaps));
       const noleap8 = JSON.parse(localStorage.getItem("noleap8"));
       localStorage.setItem("noleap9",JSON.stringify(Number(retriv) + Number(ninthDate) - noleaps));
       const noleap9 = JSON.parse(localStorage.getItem("noleap9"));
       localStorage.setItem("noleap10",JSON.stringify(Number(retriv) + Number(tenthDate) - noleaps));
       const noleap10 = JSON.parse(localStorage.getItem("noleap10"));
       localStorage.setItem("noleap11",JSON.stringify(Number(retriv) + Number(eleventhDate) - noleaps));
       const noleap11 = JSON.parse(localStorage.getItem("noleap11"));
       localStorage.setItem("noleap12",JSON.stringify(Number(retriv) + Number(twelfthDate) - noleaps));
       const noleap12 = JSON.parse(localStorage.getItem("noleap12"));
       localStorage.setItem("noleap13",JSON.stringify(Number(retriv) + Number(thirteenthDate) - noleaps));
       const noleap13 = JSON.parse(localStorage.getItem("noleap13"));
       localStorage.setItem("noleap14",JSON.stringify(Number(retriv) + Number(fourteenthDate) - noleaps));
       const noleap14 = JSON.parse(localStorage.getItem("noleap14"));
       localStorage.setItem("noleap15",JSON.stringify(Number(retriv) + Number(fifteenthDate) - noleaps));
       const noleap15 = JSON.parse(localStorage.getItem("noleap15"));
       localStorage.setItem("noleap16",JSON.stringify(Number(retriv) + Number(sixteenthDate) - noleaps));
       const noleap16 = JSON.parse(localStorage.getItem("noleap16"));
       localStorage.setItem("noleap17",JSON.stringify(Number(retriv) + Number(seventeenthDate) - noleaps));
       const noleap17 = JSON.parse(localStorage.getItem("noleap17"));
       localStorage.setItem("noleap18",JSON.stringify(Number(retriv) + Number(eighteenthDate) - noleaps));
       const noleap18 = JSON.parse(localStorage.getItem("noleap18"));
       localStorage.setItem("noleap19",JSON.stringify(Number(retriv) + Number(nineteenthDate) - noleaps));
       const noleap19 = JSON.parse(localStorage.getItem("noleap19"));
       localStorage.setItem("noleap20",JSON.stringify(Number(retriv) + Number(twentiethDate) - noleaps));
       const noleap20 = JSON.parse(localStorage.getItem("noleap20"));
       localStorage.setItem("noleap21",JSON.stringify(Number(retriv) + Number(twentfirstDate) - noleaps));
       const noleap21 = JSON.parse(localStorage.getItem("noleap21"));
       localStorage.setItem("noleap22",JSON.stringify(Number(retriv) + Number(twentsecondDate) - noleaps));
       const noleap22 = JSON.parse(localStorage.getItem("noleap22"));
       localStorage.setItem("noleap23",JSON.stringify(Number(retriv) + Number(twentthirdDate) - noleaps));
       const noleap23 = JSON.parse(localStorage.getItem("noleap23"));
       localStorage.setItem("noleap24",JSON.stringify(Number(retriv) + Number(twentfourthDate) - noleaps));
       const noleap24 = JSON.parse(localStorage.getItem("noleap24"));
       localStorage.setItem("noleap25",JSON.stringify(Number(retriv) + Number(twentfifthDate) - noleaps));
       const noleap25 = JSON.parse(localStorage.getItem("noleap25"));
       localStorage.setItem("noleap26",JSON.stringify(Number(retriv) + Number(twentsixthDate) - noleaps));
       const noleap26 = JSON.parse(localStorage.getItem("noleap26"));
       localStorage.setItem("noleap27",JSON.stringify(Number(retriv) + Number(twentseventhDate) - noleaps));
       const noleap27 = JSON.parse(localStorage.getItem("noleap27"));
       localStorage.setItem("noleap28",JSON.stringify(Number(retriv) + Number(twenteighthDate) - noleaps));
       const noleap28 = JSON.parse(localStorage.getItem("noleap28"));




       if (Number(retriv + firstDate) > Number(range) & range1 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstPostP.classList.add("show-first-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + secondDate) > Number(range) & range2 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondPostP.classList.add("show-second-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + thirdDate) > Number(range) & range3 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdPostP.classList.add("show-third-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fourthDate) > Number(range) & range4 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthPostP.classList.add("show-fourth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fifthDate) > Number(range) & range5 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthPostP.classList.add("show-fifth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + sixthDate) > Number(range) & range6 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstOvul.classList.add("show-first-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + seventhDate) > Number(range) & range7 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondOvul.classList.add("show-second-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + eighthDate) > Number(range) & range8 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdOvul.classList.add("show-third-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + ninthDate) > Number(range) & range9 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthOvul.classList.add("show-fourth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + tenthDate) > Number(range) & range10 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthOvul.classList.add("show-fifth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + eleventhDate) > Number(range) & range11 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstPostO.classList.add("show-first-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twelfthDate) > Number(range) & range12 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondPostO.classList.add("show-second-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + thirteenthDate) > Number(range) & range13 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdPostO.classList.add("show-third-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fourteenthDate) > Number(range) & range14 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthPostO.classList.add("show-fourth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + fifteenthDate) > Number(range) & range15 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthPostO.classList.add("show-fifth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + sixteenthDate) > Number(range) & range16 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           sixthPostO.classList.add("show-sixth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + seventeenthDate) > Number(range) & range17 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           seventhPostO.classList.add("show-seventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + eighteenthDate) > Number(range) & range18 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           eighthPostO.classList.add("show-eighth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + nineteenthDate) > Number(range) & range19 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           ninthPostO.classList.add("show-ninth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentiethDate) > Number(range) & range20 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           tenthPostO.classList.add("show-tenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentfirstDate) > Number(range) & range21 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           eleventhPostO.classList.add("show-eleventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentsecondDate) > Number(range) & range22 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           twelfthPostO.classList.add("show-twelfth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentthirdDate) > Number(range) & range23 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirteenthPostO.classList.add("show-thirteenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentfourthDate) > Number(range) & range24 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           firstMen.classList.add("show-first-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentfifthDate) > Number(range) & range25 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           secondMen.classList.add("show-second-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentsixthDate) > Number(range) & range26 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           thirdMen.classList.add("show-third-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twentseventhDate) > Number(range) & range27 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fourthMen.classList.add("show-fourth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }

       if (Number(retriv + twenteighthDate) > Number(range) & range28 === Number(retrivDate) & month[justMonth] === "April" || month[justMonth] === "June" || month[justMonth] === "September" || month[justMonth] === "November") {
        console.log("Confirmed");
           fifthMen.classList.add("show-fifth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
        
       } else {
        console.log("not confirmed");
        
       }





       if (Number(retriv + firstDate) > Number(limit) & diff1 === Number(retrivDate)) {
           firstPostP.classList.add("show-first-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");

        console.log("Limit is less");
        
       } else {
        console.log("limit is greater");
       }

       if (Number(retriv + secondDate) > Number(limit) & diff2 === Number(retrivDate)) {
        secondPostP.classList.add("show-second-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + thirdDate) > Number(limit) & diff3 === Number(retrivDate)) {
        thirdPostP.classList.add("show-third-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fourthDate) > Number(limit) & diff4 === Number(retrivDate)) {
        fourthPostP.classList.add("show-fourth-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fifthDate) > Number(limit) & diff5 === Number(retrivDate)) {
        fifthPostP.classList.add("show-fifth-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + sixthDate) > Number(limit) & diff6 === Number(retrivDate)) {
        firstOvul.classList.add("show-first-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + seventhDate) > Number(limit) & diff7 === Number(retrivDate)) {
        secondOvul.classList.add("show-second-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + eighthDate) > Number(limit) & diff8 === Number(retrivDate)) {
        thirdOvul.classList.add("show-third-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + ninthDate) > Number(limit) & diff9 === Number(retrivDate)) {
        fourthOvul.classList.add("show-fourth-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + tenthDate) > Number(limit) & diff10 === Number(retrivDate)) {
        fifthOvul.classList.add("show-fifth-ovulation"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + eleventhDate) > Number(limit) & diff11 === Number(retrivDate)) {
        firstPostO.classList.add("show-first-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twelfthDate) > Number(limit) & diff12 === Number(retrivDate)) {
        secondPostO.classList.add("show-second-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + thirteenthDate) > Number(limit) & diff13 === Number(retrivDate)) {
        thirdPostO.classList.add("show-third-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fourteenthDate) > Number(limit) & diff14 === Number(retrivDate)) {
        fourthPostO.classList.add("show-fourth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + fifteenthDate) > Number(limit) & diff15 === Number(retrivDate)) {
        fifthPostO.classList.add("show-fifth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + sixteenthDate) > Number(limit) & diff16 === Number(retrivDate)) {
        sixthPostO.classList.add("show-sixth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + seventeenthDate) > Number(limit) & diff17 === Number(retrivDate)) {
        seventhPostO.classList.add("show-seventh-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + eighteenthDate) > Number(limit) & diff18 === Number(retrivDate)) {
        eighthPostO.classList.add("show-eighth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + nineteenthDate) > Number(limit) & diff19 === Number(retrivDate)) {
        ninthPostO.classList.add("show-ninth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentiethDate) > Number(limit) & diff20 === Number(retrivDate)) {
        tenthPostO.classList.add("show-tenth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentfirstDate) > Number(limit) & diff21 === Number(retrivDate)) {
        eleventhPostO.classList.add("show-eleventh-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentsecondDate) > Number(limit) & diff22 === Number(retrivDate)) {
        twelfthPostO.classList.add("show-twelfth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentthirdDate) > Number(limit) & diff23 === Number(retrivDate)) {
        thirteenthPostO.classList.add("show-thirteenth-post-o"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentfourthDate) > Number(limit) & diff24 === Number(retrivDate)) {
        firstMen.classList.add("show-first-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentfifthDate) > Number(limit) & diff25 === Number(retrivDate)) {
        secondMen.classList.add("show-second-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentsixthDate) > Number(limit) & diff26 === Number(retrivDate)) {
        thirdMen.classList.add("show-third-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twentseventhDate) > Number(limit) & diff27 === Number(retrivDate)) {
        fourthMen.classList.add("show-fourth-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    if (Number(retriv + twenteighthDate) > Number(limit) & diff28 === Number(retrivDate)) {
        fifthMen.classList.add("show-fifth-men"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");

     console.log("Limit is less");
     
    } else {
     console.log("limit is greater");
    }

    const leap = new Date(newyear, 1, 29).getDate() === 29;
    if (leap & month[justMonth] === "February" & Number(retriv + firstDate) > Number(leaps) & leap1 === Number(retrivDate)) {
           firstPostP.classList.add("show-first-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + secondDate) > Number(leaps) & leap2 === Number(retrivDate)) {
           secondPostP.classList.add("show-second-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + thirdDate) > Number(leaps) & leap3 === Number(retrivDate)) {
           thirdPostP.classList.add("show-third-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + fourthDate) > Number(leaps) & leap4 === Number(retrivDate)) {
           fourthPostP.classList.add("show-fourth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + fifthDate) > Number(leaps) & leap5 === Number(retrivDate)) {
           fifthPostP.classList.add("show-fifth-post-p"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + sixthDate) > Number(leaps) & leap6 === Number(retrivDate)) {
           firstOvul.classList.add("show-first-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + seventhDate) > Number(leaps) & leap7 === Number(retrivDate)) {
           secondOvul.classList.add("show-second-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + eighthDate) > Number(leaps) & leap8 === Number(retrivDate)) {
           thirdOvul.classList.add("show-third-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + ninthDate) > Number(leaps) & leap9 === Number(retrivDate)) {
           fourthOvul.classList.add("show-fourth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + tenthDate) > Number(leaps) & leap10 === Number(retrivDate)) {
           fifthOvul.classList.add("show-fifth-ovulation"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
    if (leap & month[justMonth] === "February" & Number(retriv + eleventhDate) > Number(leaps) & leap11 === Number(retrivDate)) {
           firstPostO.classList.add("show-first-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twelfthDate) > Number(leaps) & leap12 === Number(retrivDate)) {
           secondPostO.classList.add("show-second-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + thirteenthDate) > Number(leaps) & leap13 === Number(retrivDate)) {
           thirdPostO.classList.add("show-third-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + fourteenthDate) > Number(leaps) & leap14 === Number(retrivDate)) {
           fourthPostO.classList.add("show-fourth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + fifteenthDate) > Number(leaps) & leap15 === Number(retrivDate)) {
           fifthPostO.classList.add("show-fifth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + sixteenthDate) > Number(leaps) & leap16 === Number(retrivDate)) {
           sixthPostO.classList.add("show-sixth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + seventeenthDate) > Number(leaps) & leap17 === Number(retrivDate)) {
           seventhPostO.classList.add("show-seventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + eighteenthDate) > Number(leaps) & leap18 === Number(retrivDate)) {
           eighthPostO.classList.add("show-eighth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + nineteenthDate) > Number(leaps) & leap19 === Number(retrivDate)) {
           ninthPostO.classList.add("show-ninth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentiethDate) > Number(leaps) & leap20 === Number(retrivDate)) {
           tenthPostO.classList.add("show-tenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentfirstDate) > Number(leaps) & leap21 === Number(retrivDate)) {
           eleventhPostO.classList.add("show-eleventh-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentsecondDate) > Number(leaps) & leap22 === Number(retrivDate)) {
           twelfthPostO.classList.add("show-twelfth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentthirdDate) > Number(leaps) & leap23 === Number(retrivDate)) {
           thirteenthPostO.classList.add("show-thirteenth-post-o"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentfourthDate) > Number(leaps) & leap24 === Number(retrivDate)) {
           firstMen.classList.add("show-first-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentfifthDate) > Number(leaps) & leap25 === Number(retrivDate)) {
           secondMen.classList.add("show-second-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentsixthDate) > Number(leaps) & leap26 === Number(retrivDate)) {
           thirdMen.classList.add("show-third-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twentseventhDate) > Number(leaps) & leap27 === Number(retrivDate)) {
           fourthMen.classList.add("show-fourth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }
     if (leap & month[justMonth] === "February" & Number(retriv + twenteighthDate) > Number(leaps) & leap28 === Number(retrivDate)) {
           fifthMen.classList.add("show-fifth-men"); 
           heading.classList.add("hide-head-info");
           dateInput.classList.add("hide-date");
           hideInfo.classList.add("block-hide-info");
           downButton.classList.add("hide-down-btn");
           overFlow.classList.add("hide-hidden-body");
           console.log(newyear + " " + "is a leap year");
        
    } else {
        console.log(newyear + " " + "is not a leap year");
    }


    if ( month[justMonth] === "February" & Number(retriv + firstDate) > Number(noleaps) & noleap1 === Number(retrivDate)) {
        firstPostP.classList.add("show-first-post-p"); 
        heading.classList.add("hide-head-info");
        dateInput.classList.add("hide-date");
        hideInfo.classList.add("block-hide-info");
        downButton.classList.add("hide-down-btn");
        overFlow.classList.add("hide-hidden-body");
        console.log("Not a leap year");
     
 } else {
     console.log("A leap year");
 }
 if ( month[justMonth] === "February" & Number(retriv + secondDate) > Number(noleaps) & noleap2 === Number(retrivDate)) {
    secondPostP.classList.add("show-second-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + thirdDate) > Number(noleaps) & noleap3 === Number(retrivDate)) {
    thirdPostP.classList.add("show-third-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fourthDate) > Number(noleaps) & noleap4 === Number(retrivDate)) {
    fourthPostP.classList.add("show-fourth-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fifthDate) > Number(noleaps) & noleap5 === Number(retrivDate)) {
    fifthPostP.classList.add("show-fifth-post-p"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + sixthDate) > Number(noleaps) & noleap6 === Number(retrivDate)) {
    firstOvul.classList.add("show-first-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + seventhDate) > Number(noleaps) & noleap7 === Number(retrivDate)) {
    secondOvul.classList.add("show-second-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + eighthDate) > Number(noleaps) & noleap8 === Number(retrivDate)) {
    thirdOvul.classList.add("show-third-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + ninthDate) > Number(noleaps) & noleap9 === Number(retrivDate)) {
    fourthOvul.classList.add("show-fourth-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + tenthDate) > Number(noleaps) & noleap10 === Number(retrivDate)) {
    fifthOvul.classList.add("show-fifth-ovulation"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + eleventhDate) > Number(noleaps) & noleap11 === Number(retrivDate)) {
    firstPostO.classList.add("show-first-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twelfthDate) > Number(noleaps) & noleap12 === Number(retrivDate)) {
    secondPostO.classList.add("show-second-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + thirteenthDate) > Number(noleaps) & noleap13 === Number(retrivDate)) {
    thirdPostO.classList.add("show-third-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fourteenthDate) > Number(noleaps) & noleap14 === Number(retrivDate)) {
    fourthPostO.classList.add("show-fourth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + fifteenthDate) > Number(noleaps) & noleap15 === Number(retrivDate)) {
    fifthPostO.classList.add("show-fifth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + sixteenthDate) > Number(noleaps) & noleap16 === Number(retrivDate)) {
    sixthPostO.classList.add("show-sixth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + seventeenthDate) > Number(noleaps) & noleap17 === Number(retrivDate)) {
    seventhPostO.classList.add("show-seventh-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + eighteenthDate) > Number(noleaps) & noleap18 === Number(retrivDate)) {
    eighthPostO.classList.add("show-eighth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + nineteenthDate) > Number(noleaps) & noleap19 === Number(retrivDate)) {
    ninthPostO.classList.add("show-ninth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentiethDate) > Number(noleaps) & noleap20 === Number(retrivDate)) {
    tenthPostO.classList.add("show-tenth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentfirstDate) > Number(noleaps) & noleap21 === Number(retrivDate)) {
    eleventhPostO.classList.add("show-eleventh-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentsecondDate) > Number(noleaps) & noleap22 === Number(retrivDate)) {
    twelfthPostO.classList.add("show-twelfth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentthirdDate) > Number(noleaps) & noleap23 === Number(retrivDate)) {
    thirteenthPostO.classList.add("show-thirteenth-post-o"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentfourthDate) > Number(noleaps) & noleap24 === Number(retrivDate)) {
    firstMen.classList.add("show-first-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentfifthDate) > Number(noleaps) & noleap25 === Number(retrivDate)) {
    secondMen.classList.add("show-second-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentsixthDate) > Number(noleaps) & noleap26 === Number(retrivDate)) {
    thirdMen.classList.add("show-third-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twentseventhDate) > Number(noleaps) & noleap27 === Number(retrivDate)) {
    fourthMen.classList.add("show-fourth-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}
if ( month[justMonth] === "February" & Number(retriv + twenteighthDate) > Number(noleaps) & noleap28 === Number(retrivDate)) {
    fifthMen.classList.add("show-fifth-men"); 
    heading.classList.add("hide-head-info");
    dateInput.classList.add("hide-date");
    hideInfo.classList.add("block-hide-info");
    downButton.classList.add("hide-down-btn");
    overFlow.classList.add("hide-hidden-body");
    console.log("Not a leap year");
 
} else {
 console.log("A leap year");
}


        if ( Number(retrivDate) === (Number(retriv) + Number(firstDate)) ) {
            console.log("correct");
            firstPostP.classList.add("show-first-post-p"); 
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
            
            
        } else {
            console.log("wrong");
        } 
        if ( Number(retrivDate) === (Number(retriv) + Number(secondDate)) ){
            secondPostP.classList.add("show-second-post-p");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
            
 
        } else {
            console.log("wrong");
    
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(thirdDate)) ){
            thirdPostP.classList.add("show-third-post-p");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
    
    
        } else {
            console.log("wrong");
            
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(fourthDate)) ){
            fourthPostP.classList.add("show-fourth-post-p");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
            
    
    
        } else {
            console.log("wrong");
            
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(fifthDate)) ){
            fifthPostP.classList.add("show-fifth-post-p");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
            
    
    
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(sixthDate)) ){
            firstOvul.classList.add("show-first-ovulation");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
             
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(seventhDate)) ){
            secondOvul.classList.add("show-second-ovulation");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
          
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(eighthDate)) ){
            thirdOvul.classList.add("show-third-ovulation");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
               
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(ninthDate)) ){
            fourthOvul.classList.add("show-fourth-ovulation");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");  
 
        } else {
            console.log("wrong");
            
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(tenthDate)) ){
            fifthOvul.classList.add("show-fifth-ovulation");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
             
 
        } else {
            console.log("wrong");
           
 
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(eleventhDate)) ){
            firstPostO.classList.add("show-first-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
         
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twelfthDate)) ){
            secondPostO.classList.add("show-second-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body"); 
         
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(thirteenthDate)) ){
            thirdPostO.classList.add("show-third-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body"); 
              
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(fourteenthDate)) ){
            fourthPostO.classList.add("show-fourth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
              
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(fifteenthDate)) ){
            fifthPostO.classList.add("show-fifth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
     
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(sixteenthDate)) ){
            sixthPostO.classList.add("show-sixth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
         
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(seventeenthDate)) ){
            seventhPostO.classList.add("show-seventh-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
         
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(eighteenthDate)) ){
            eighthPostO.classList.add("show-eighth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
         
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(nineteenthDate)) ){
            ninthPostO.classList.add("show-ninth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
              
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twentiethDate)) ){
            tenthPostO.classList.add("show-tenth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn");
            overFlow.classList.add("hide-hidden-body");
              
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twentfirstDate)) ){
            eleventhPostO.classList.add("show-eleventh-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
             
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twentsecondDate)) ){
            twelfthPostO.classList.add("show-twelfth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
          
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twentthirdDate)) ){
            thirteenthPostO.classList.add("show-thirteenth-post-o");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
              
 
        } else {
            console.log("wrong");
        }
       
 
        if ( Number(retrivDate) === (Number(retriv) + Number(twentfourthDate)) ){
            firstMen.classList.add("show-first-men");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
          
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twentfifthDate)) ){
            secondMen.classList.add("show-second-men");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
          
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twentsixthDate)) ){
            thirdMen.classList.add("show-third-men");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            //infoDate.classList.add("block-info");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
          
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twentseventhDate)) ){
            fourthMen.classList.add("show-fourth-men");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
          
 
        } else {
            console.log("wrong");
        }
        if ( Number(retrivDate) === (Number(retriv) + Number(twenteighthDate)) ){
            fifthMen.classList.add("show-fifth-men");
            heading.classList.add("hide-head-info");
            dateInput.classList.add("hide-date");
            hideInfo.classList.add("block-hide-info");
            downButton.classList.add("hide-down-btn"); 
            overFlow.classList.add("hide-hidden-body");
          
 
        } else {
            console.log("wrong");
        }
    
            
        } else {
            console.log("there is no retriv");
        }
        

    })
    
      

    const clear = document.getElementById("clear-btn");
    clear.addEventListener("click", function(){
         localStorage.removeItem("date");
            
    });

    localStorage.setItem("noVal", JSON.stringify(""));
    const noVal = JSON.parse(localStorage.getItem("noVal"));

    if (Number(retriv) === Number(noVal)){
            heading.classList.remove("hide-head-info");
            dateInput.classList.remove("hide-date");
            hideInfo.classList.remove("block-hide-info");
            downButton.classList.remove("hide-down-btn"); 
            overFlow.classList.remove("hide-hidden-body");


    };

    
    

     
    
     
     
     
        
        
       
        
        

           
           

       
    
        
        

