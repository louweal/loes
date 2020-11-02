document.addEventListener("DOMContentLoaded", function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const sendState = urlParams.get('success');

    if(sendState === "true") {
        // show succes message
       document.getElementById("send-succes").classList.remove("hide");
        // hide form
        document.getElementById("contact-form").classList.add("hide");
    }
});
