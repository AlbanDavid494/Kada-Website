// topnav section & footer section
const homeProducts = document.getElementById('homeProducts');
const homeMode = document.getElementById("homeMode");
const professionalModeBtn = document.getElementById("professionalModeBtn");
const professionalMode = document.getElementById("professionalMode");
const professionalProducts = document.getElementById("professionalProducts") 




homeMode.addEventListener('click', ()=> {
homeProducts.style.display ="block";
homeModeBtn.style.backgroundColor = "#000";
professionalProducts.style.display = "none"
 professionalModeBtn.style.backgroundColor = "#d1d3d4"
})


professionalMode.addEventListener("click", ()=>{
// homeBtn.style.backgroundColor = "#d1d3d4"
homeProducts.style.display ="none";
homeModeBtn.style.backgroundColor = "#d1d3d4";
professionalProducts.style.display = "block";
// professionalBtn.style.backgroundColor = "#000";
professionalModeBtn.style.backgroundColor = "#000";
})


// professionalRadio.addEventListener("mouseover", ()=>{
//     professionalBtn.style.backgroundColor = "#000";
//     professionalModeBtn.style.backgroundColor = "#000";
// })

// professionalRadio.addEventListener("mouseout", ()=>{
//     professionalBtn.style.backgroundColor = " "
// })

