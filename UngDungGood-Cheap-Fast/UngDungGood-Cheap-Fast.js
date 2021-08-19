function check(att) {

    switch (att) {
        case ("good"):
            if (document.getElementById("cheap").checked === true && document.getElementById("fast").checked === true) {
                document.getElementById("cheap").checked = false
            }
            break;

        case ("cheap"):
            if (document.getElementById("good").checked === true && document.getElementById("fast").checked === true) {
                document.getElementById("fast").checked = false
            }
            break;

        case ("fast"):
            if (document.getElementById("good").checked === true && document.getElementById("cheap").checked === true) {
                document.getElementById("good").checked = false
            }
            break;
    }



}