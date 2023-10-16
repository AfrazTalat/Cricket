function randomizeSwitches() {
    const switch1 = document.getElementById("switch1");
    const switch2 = document.getElementById("switch2");
    const switch3 = document.getElementById("switch3");
     }
    // Function to handle changes in switch1
    switch1.addEventListener("change", function() {
        if (!switch1.checked) {
            // When switch1 is turned off, turn switch2 on
            switch2.checked = true;
        }
    });

    // Function to handle changes in switch3
    switch3.addEventListener("change", function() {
        if (switch3.checked) {
            // When switch3 is turned on, turn switch2 off
            switch2.checked = false;
        }
    });
    switch2.addEventListener("change", function() {
        if (switch2.checked) {
            // When switch3 is turned on, turn switch2 off
            switch1.checked = false;
        }
    });
    switch1.addEventListener("change", function() {
        if (switch1.checked) {
            // When switch3 is turned on, turn switch2 off
            switch2.checked = false;
        }
    });
    switch3.addEventListener("change", function() {
        if (switch3.checked) {
            // When switch3 is turned on, turn switch2 off
            switch2.checked = false;
        }
    });
    switch2.addEventListener("change", function() {
        if (switch2.checked) {
            // When switch3 is turned on, turn switch2 off
            switch3.checked = false;
        }
    });
    randomizeSwitches();

    function freepal(){
        window.alert("Your IP has been sent!");
    }