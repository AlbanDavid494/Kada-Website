// topnav section & footer section
const homeProducts = document.getElementById('homeProducts');
const homeMode = document.getElementById("homeMode");
const homeRadio = document.getElementById("Home-radio");
const homeBtn = document.getElementById("Home-btn");
const homeModeBtn = document.getElementById("homeModeBtn")
const professionalBtn = document.getElementById("Professional-btn");
const professionalModeBtn = document.getElementById("professionalModeBtn");
const professionalMode = document.getElementById("professionalMode");
const professionalProducts = document.getElementById("professionalProducts") 
const professionalRadio = document.getElementById("Professional-radio");



homeMode.addEventListener('click', ()=> {
homeProducts.style.display ="block";
homeBtn.style.backgroundColor = "#000";
homeModeBtn.style.backgroundColor = "#000";
professionalBtn.style.backgroundColor = "#d1d3d4"
professionalProducts.style.display = "none"
 professionalModeBtn.style.backgroundColor = "#d1d3d4"
})

homeRadio.addEventListener("click", ()=>{
    homeProducts.style.display ="block";
    homeMode.style.backgroundColor = "#000";
    homeModeBtn.style.backgroundColor = "#000";
    homeBtn.style.backgroundColor = "#000";
    professionalBtn.style.backgroundColor = "#d1d3d4";
    professionalModeBtn.style.backgroundColor = "#d1d3d4"
    professionalProducts.style.display = "none";
})


professionalMode.addEventListener("click", ()=>{
homeBtn.style.backgroundColor = "#d1d3d4"
homeProducts.style.display ="none";
homeModeBtn.style.backgroundColor = "#d1d3d4";
professionalProducts.style.display = "block";
professionalBtn.style.backgroundColor = "#000";
professionalModeBtn.style.backgroundColor = "#000";
})

professionalRadio.addEventListener("click", ()=>{
    homeBtn.style.backgroundColor = "#d1d3d4";
    homeProducts.style.display ="none";
    professionalProducts.style.display = "block";
    professionalBtn.style.backgroundColor = "#000";
    homeModeBtn.style.backgroundColor = "#d1d3d4"
professionalModeBtn.style.backgroundColor = "#000"
})

// professionalRadio.addEventListener("mouseover", ()=>{
//     professionalBtn.style.backgroundColor = "#000";
//     professionalModeBtn.style.backgroundColor = "#000";
// })

// professionalRadio.addEventListener("mouseout", ()=>{
//     professionalBtn.style.backgroundColor = " "
// })





