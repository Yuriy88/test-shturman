/*popup*/
document.addEventListener("DOMContentLoaded", function (event) {
    var delay_popup = 3000;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

    document.getElementById('close').onclick = function () {
        document.getElementById('overlay').style.display = 'none';
    };
});


/*close/open mobile nav menu*/
function openNav() {
    document.getElementById("navMenu").style.width = "300px";
}
function closeNav() {
    document.getElementById("navMenu").style.width = "0";
}