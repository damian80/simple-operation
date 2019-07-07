function sum() {


// zmienna czyli zapisujemy cos w pamieci Ram,szukaj uchwytu w dokumencie id i zmien na wartosc
let a = document.getElementById("a").value;
let b = document.getElementById("b").value;

if(a == "" || b == "")
{
    document.getElementById("result").innerHTML = "please fill  both of the windows";
}
else{

    a = parseFloat(a);
    b = parseFloat(b);

    let sum = a+b;
    document.getElementById("result").innerHTML = "the sum is:"+ sum;
}

}
function sub() {


    // zmienna czyli zapisujemy cos w pamieci Ram,szukaj uchwytu w dokumencie id i zmien na wartosc
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    if (a == "" || b == "") {
        document.getElementById("result").innerHTML = "please fill  both of the windows";
    }
    else {

        a = parseFloat(a);
        b = parseFloat(b);

        let sum = a - b;
        document.getElementById("result").innerHTML = "the sum is:" + sum;
    }

}
function multi() {


    // zmienna czyli zapisujemy cos w pamieci Ram,szukaj uchwytu w dokumencie id i zmien na wartosc
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    if (a == "" || b == "") {
        document.getElementById("result").innerHTML = "please fill  both of the windows";
    }
    else {

        a = parseFloat(a);
        b = parseFloat(b);

        let sum = a * b;
        document.getElementById("result").innerHTML = "the sum is:" + sum;
    }

}