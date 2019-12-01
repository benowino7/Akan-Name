function _f() {
    return document.forms['form'];
}
var a, b, c;
_f()['btn'].addEventListener('click', function (e) {
    e.preventDefault();
    checkEmpty();
});

function checkEmpty() {
    function _v(a) {
        return _f()[a].value;
    }
    var d, m, y, g;
    d = _v('day');
    m = _v('month');
    y = _v('year');
    g = _v('g');
    if (d == '' && m == '' && y == '' && g == '') {
        alert('Your day, month and year of birth and gender are needed to calculate your Akan name');
        return 0;
    } else if (d == '') {
        alert('Provide your day date of birth eg 01 for first day of the month');
        return 0;
    } else if (m == '') {
        alert('Provide your month date of birth eg 12 for December');
        return 0;
    } else if (y == '') {
        alert('Provide your year date of birth eg 2019');
        return 0;
    } else if (g == '') {
        alert('Provide your gender');
        return 0;
    } else {
        ben(d, m, y, g);
    }
}

function ben(d, m, y, g) {
    d = parseInt(d);
    m = parseInt(m);
    y = parseInt(y);
    var cc = (y - 1) / 100 + 1;
    var formula = parseInt(((26 * (m + 1) / 10)) + ((5 * y / 4)) + ((cc / 4) - 2 * cc - 1) + d) % 7;
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (m < 1 || m > 12 || m == 2 && d > 29) {
        alert("INVALID MONTH");
        return 0;
    } else if (d < 1 || d > 31) {
        alert("INVALID DAY");
        return 0;
    }

    if (g == 'm') {
        g = male;
    } else if (g == 'f') {
        g = female;
    } else {
        alert("Unsupported gender");
        return 0;
    }

    for (var a = 0; a < 7; a++) {
        if (Math.ceil(formula) == (a)) {
            document.getElementById("results").innerHTML = ("Day of birth: " + day[a] + "<br/> Akan name is " + g[a]);     
            return 0;
        }
    }

}