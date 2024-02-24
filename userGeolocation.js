const geolocationBtn = document.getElementById("geolocation-btn");

geolocationBtn.onclick = () => {
    initGeolocation();
}


const getPositionCoords = () => {
    let res;

    getRequest("/location").then(res => res.json()).then(out => res = out);

    return res;
}

const initGeolocation = () => {
    if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

const success = (position) => {
    console.log(position);

    postPositionCoords(position.coords.latitude, position.coords.longitude);
}

const fail = (e) => {
    console.log(e);
    alert("GEOLOCATION FAILED");
}

const bodyDiv = document.querySelector("body");

bodyDiv.onload = () => {
    initGeolocation();
}

const postPositionCoords = (latitude, longitude) => {
    const sessionId = localStorage.getItem("sessionid")

    const requestBody = {
        latitude: latitude,
        longitude: longitude,
        sessionid: sessionId
    }

    postRequest("location", requestBody).then(() => alert("Location has been shared successfully!"));
}