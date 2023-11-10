let dateHTML = document.getElementById("date");
let timeHMTL = document.getElementById("time");

function getDate(){
  let date = new Date();

  dateHTML.innerHTML = 
  `${date.toLocaleDateString('default', {weekday: 'short'})} 
   ${date.getDate()} de 
   ${date.toLocaleDateString('default', {month: 'long'})} de 
   ${date.getFullYear()}
   `

   timeHMTL.innerHTML = 
   `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}
   `
}

getDate()
setInterval(getDate, 1000)




  let configBtn = document.getElementById("config-btn");
  let configCont = document.getElementById("config-cont");
  
  configBtn.addEventListener("click", () => {
    if (configCont.style.display == "none" || configCont.style.display == "") {
      configCont.style.display = "flex ";
    } else {
      configCont.style.display = "none";
    }
  }); 

  //close btn
  let closeCont = document.getElementById("closeCont-back");
  closeCont.addEventListener("click", () => {
    configCont.style.display = "none";
  });
  //------


function setBackground() {
  var background = document.querySelector("#page");
  var fileInput = document.querySelector("input[type=file]");
  var backgroundPreviewImg = document.querySelector("#background-previewImg");

  if (fileInput.files && fileInput.files[0]) {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      background.style.backgroundImage = "url(" + reader.result + ")";
      backgroundPreviewImg.src = reader.result;
    };

    reader.readAsDataURL(file);
  } else {
    window.alert("select your image or gif");
  }
}
