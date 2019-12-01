 function _f(){return document.forms[0];}
 var a,b,c;
 _f()[5].addEventListener('click', function(e){e.preventDefault(); ben();});
 function ben()
 {
    a = parseInt(_f()[0].value);
    b = parseInt(_f()[1].value);
    c = parseInt(_f()[2].value);
    var dd = a; 
    var mm = b; 
    var yy = c; 
    var cc = (yy - 1) / 100 + 1;
    var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girl = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (document.getElementById("gender").checked) {
        var gender = 'male'; 
}
     else {var gender = 'female';}
    // var gender = document.forms['bform'].elements[1].checked ? [3] : [4];

    if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {alert("INVALID MONTH");}
    else if (dd < 1 || dd > 31) {alert("INVALID DAY");}
    else if (Math.ceil(result) == 1 && gender === 'male'){document.getElementById("outcome").innerHTML = ("Born on Monday ,your akan name is " + boy[1]);}

    if (Math.ceil(result) == 2 && gender === 'male') {document.getElementById("outcome").innerHTML = ("Born on Tuesday ,your akan name is " + boy[2]);}
    else if (Math.ceil(result) == 3 && gender === 'male') {document.getElementById("outcome").innerHTML = ("Born on Wednesday ,your akan name is " + boy[3]);}
    else if (Math.ceil(result) == 4 && gender === 'male') {document.getElementById("outcome").innerHTML = ("Born on Thursday,your akan name is " + boy[4]);}
    else if (Math.ceil(result) == 5 && gender === 'male') {document.getElementById("outcome").innerHTML = ("Born on Friday,your akan name is " + boy[5]);}
    else if (Math.ceil(result) == 6 && gender === 'male') {document.getElementById("outcome").innerHTML = ("Born on Saturday,your akan name is " + boy[6]);}
    else if (Math.ceil(result) == 0 && gender === 'male') {document.getElementById("outcome").innerHTML = ("Born on Sunday,your akan name is " + boy[0]);}
    else if (Math.ceil(result) == 1 && gender === 'female') {document.getElementById("outcome").innerHTML = ("Born on monday ,your akan name is " + girl[1]);}
    else if (Math.ceil(result) == 2 && gender === 'female') {document.getElementById("outcome").innerHTML = ("Born on Tuesday,your akan name is " + girl[2]);}
    else if (Math.ceil(result) == 3 && gender === 'female') {document.getElementById("outcome").innerHTML = ("Born on Wednesday,your akan name is " + girl[3]);}
    else if (Math.ceil(result) == 4 && gender === 'female') {document.getElementById("outcome").innerHTML = ("Born on Thursday,your akan name is " + girl[4]);}
    else if (Math.ceil(result) == 5 && gender === 'female') {document.getElementById("outcome").innerHTML = ("Born on Friday,your akan name is " + girl[5]);}
    else if (Math.ceil(result) == 6 && gender === 'female') {document.getElementById("outcome").innerHTML = ("Born on Saturday,your akan name is " + girl[6]);}
    else if (Math.ceil(result) == 0 && gender === 'female') {document.getElementById("outcome").innerHTML = ("Born on Sunday,your akan name is " + girl[0]);}
    else {alert("enter your information please");}
}
