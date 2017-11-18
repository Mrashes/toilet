alterMapsSrc = function () {
    const initalNode = document.getElementById('googleMapsNode');
    const key = process.env.mapsKey || "AIzaSyC8bLOv4xelVAZYHzBrbV_2Haw_TlT_5Ag";
    let src = "https://maps.googleapis.com/maps/api/js?key="+key+"&libraries=places"
    console.log(src)
}
alterMapsSrc()