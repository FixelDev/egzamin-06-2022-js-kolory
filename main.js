function generateColors()
{
    var h = document.getElementById("color-input").value;

    document.getElementById("color1").style.backgroundColor = "hsl("+ h + ", 100%, 50%)";
    document.getElementById("color2").style.backgroundColor = "hsl("+ h + ", 80%, 50%)";
    document.getElementById("color3").style.backgroundColor = "hsl("+ h + ", 60%, 50%)";
    document.getElementById("color4").style.backgroundColor = "hsl("+ h + ", 40%, 50%)";
    document.getElementById("color5").style.backgroundColor = "hsl("+ h + ", 20%, 50%)";
}