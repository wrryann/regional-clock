function horario(){

    let data = new Date()
    let hora = data.getHours().toString().padStart(2, "0");
    let minuto = data.getMinutes().toString().padStart(2, "0");
    let segundo = data.getSeconds().toString().padStart(2, "0");
    let htmlhorario = document.getElementById('contador');
    htmlhorario.innerHTML = `${hora}:${minuto}:${segundo}`;
};   

function dataDoAno(){
    let data = new Date();
    let simpleDa = {
        dia: data.getDate(),
        semana: data.toLocaleString('default', { weekday: 'short'}),
        mes: data.toLocaleString('default', { month: 'long'}),
        ano: data.getFullYear()
    };
   document.getElementById('date').innerHTML = `${simpleDa.semana} ${simpleDa.dia} de ${simpleDa.mes} de ${simpleDa.ano}`
};

horario();
dataDoAno();
setInterval (horario, 1000);
setInterval (dataDoAno, 1000);

//open/Close the settings menu
  let configBtn = document.getElementById('config-btn');
  let configCont = document.getElementById('config-cont');
  configBtn.addEventListener('click', function() {

    if(configCont.style.display == 'none' || configCont.style.display == ''){
      configCont.style.display = 'flex '
    } 
    else {
      configCont.style.display = 'none'
    }
  })

  //close btn
  let CloseConfigBtn = document.getElementById('close-configBtn')
  CloseConfigBtn.addEventListener('click', function() {
    configCont.style.display = 'none' 
  })
//------  


function setBackground() {
  var background = document.querySelector('#page');
  var fileInput = document.querySelector('input[type=file]');
  var backgroundPreviewImg = document.querySelector('#background-previewImg')
  
  if (fileInput.files && fileInput.files[0]) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    
    reader.onloadend = function () {
      background.style.backgroundImage = 'url(' + reader.result + ')';
      backgroundPreviewImg.src = reader.result
    };
    
    reader.readAsDataURL(file);
  } else {
    window.alert('select your image or gif');
  }
};
