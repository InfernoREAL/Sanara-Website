let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText);
        document.getElementById("cmdLaunched").innerHTML = response.commandsLastMonth;
        document.getElementById("serverCount").innerHTML = response.serverCount;
    }
}
xmlhttp.open("GET", "https://api.zirk.eu/bots.php?name=Sanara&small=true", true);
xmlhttp.send();
let xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("githubStars").innerHTML = JSON.parse(this.responseText).stargazers_count;
    }
}
xmlhttp2.open("GET", "https://api.github.com/repos/xwilarg/sanara", true);
xmlhttp2.send();