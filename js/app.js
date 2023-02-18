function checkForm() {
    var cssStyle = getComputedStyle(document.body);
    //alert(document.getElementById("fname").value == "");
    if (document.getElementById("fname").value == "") {
        document.getElementById("fname").value = url('../images/icon-error.svg');
        document.getElementById("fname").style.borderColor = hsl(0, 100%, 74%);
        
    }
}