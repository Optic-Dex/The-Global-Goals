
// array with id, src and alt for img
const imgarr = [
    ["box1", "./assets/img/Goals/Goal-No-Poverty.png", "No_Poverty"],
    ["box2", "./assets/img/Goals/Goal-No-Hunger.png", "No_Hunger"],
    ["box3", "./assets/img/Goals/Goal-Good-Health.png", "Good_Health"],
    ["box4", "./assets/img/Goals/Goal-Good-Education.png", "Good_Education"],
    ["box5", "./assets/img/Goals/Goal-Gender-Equality.png", "Good_Equality"],
    ["box6", "./assets/img/Goals/Goal-Clean-Water.png", "Clean_Water"], 
    ["box7", "./assets/img/Goals/Goal-Clean-Energy.png", "Clean_Energy"],
    ["box8", "./assets/img/Goals/Goal-Decent-Work.png", "Decent_Work"],
    ["box9", "./assets/img/Goals/Goal-Industry.png", "Industry"],
    ["box10", "./assets/img/Goals/Goal-Inequalities.png", "Inequalities"],
    ["box11", "./assets/img/Goals/Goal-Sustainable-Cities.png", "Sustainable_Cities"],
    ["box12", "./assets/img/Goals/Goal-Responsible-Consumption.png", "Responsible_Consumption"], 
    ["box13", "./assets/img/Goals/Goal-Climate-Action.png", "Climate_Action"], 
    ["box14", "./assets/img/Goals/Goal-Life-Water.png", "Life_Water"],
    ["box15", "./assets/img/Goals/Goal-Life-Land.png", "Life_Land"],
    ["box16", "./assets/img/Goals/Goal-Institutions.png", "Institutions"],
    ["box17", "./assets/img/Goals/Goal-Partnership.png", "Partnership"],
    ["box18", "./assets/img/Goals/Global-Goals.png", "Global_Goals"], 
]
// 2 strings that are empty
 let HTML_img = ""
 let HTML_modal_img = "" 

// Get the modal container and content 
let modal = document.getElementById('myModal')
let modal_img = document.getElementById('modal-img')

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0]

//for loop that goes throug the img array and create img tags with the id src and alt from the array in grid_container
 for (i = 0; i < imgarr.length; i++) {
     console.log(imgarr[i][1])
     HTML_img += `<img id="${imgarr[i][0]}" src="${imgarr[i][1]}" alt="${imgarr[i][2]}" />`
     gallery_container.insertAdjacentHTML('afterbegin', HTML_img)
    
 }


// get all img tags in section and add an event listener so when img is clicked open modal and creat img tag with the same src and alt as the clicked img
let img = document.querySelectorAll('section > img')
img.forEach(imgevent => { imgevent.addEventListener('click', function() {
    modal.style.display = 'block'
    HTML_modal_img +=`<img id="remove" src="${imgevent.src}" alt="${imgevent.alt}" />`
    modal_img.insertAdjacentHTML('afterbegin', HTML_modal_img)
    HTML_modal_img = ""
  })
    
})


// When the user clicks on <span> (x), close the modal and remove the img tag created in it
span.onclick = function() {
  modal.style.display = 'none'
  let obj = document.getElementById('remove')
  obj.remove();
}

// When the user clicks anywhere outside of the modal, close it and remove the img tag created in it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
    let obj = document.getElementById('remove')
    obj.remove();
    
  }
}
 
// form validation

function formvalidation() {

let name = document.getElementById('name')
if (name.value == "")
{
    name.focus()
    alert("Navn skal udfyldes");
    return false;
}
let telefon = document.getElementById('phone')
if (telefon.value == "")
{
    telefon.focus()
    alert("Telefon nummer skal udfyldes");
    return false;
}

let email = document.getElementById('email')
if (!email.value)
{
    alert("Email ikke udfyldt")
    email.focus()
}else {
    if (!isValidEmail(email.value)) {
    alert("Email er ikke korrekt udfyldt")
    email.focus()
}
}
 alert("Kontakt form sendt")
}


function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}
