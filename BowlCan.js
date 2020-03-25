document.getElementById("texten").innerHTML = "x" + getQueryVarible("text") + "y";



if (getQueryVarible("text") == "tips") {
    document.getElementById("texten").innerHTML = "<p>Testing - Tips</p>";
}

if (getQueryVarible("text") == "result") {
    document.getElementById("texten").innerHTML = "<p>Testing - Result</p>";
}

if (getQueryVarible("text") == "more") {
    document.getElementById("texten").innerHTML = "<p>Testing - More</p>";
}


function getQueryVarible(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
