var maleFemaleName = [
    ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'], //first row for male names
    ['Akosua', 'Adwoa', 'Abenna', 'Akua', 'Yaa', 'Afua', 'Ama'] //second row for remales names
];
document.forms['bform'].addEventListener("submit", birthMark);
// alert(maleFemaleName[][])
function birthMark(e) {
    e.preventDefault(); //prevent form from submitting
    var gender = document.forms['bform'].elements[1].checked ? 0 : 1; //this will give me the row index
    var d = new Date(document.forms['bform'].elements[0].value); //this will give us the column index
    var chosenname = maleFemaleName[gender][d.getDay()]; //choose a name based on the row, column values
    alert(chosenname); //alert the name value chosen
}