import Map from "./Map.js";

export default () => {
    const mapIdWrapper = document.getElementById('yamapsId');
    const mediaQuery = window.matchMedia('(max-width: 992px)').matches;

    if(!mapIdWrapper) return;

    let coords,
        center,
        data = mapIdWrapper.dataset.coords;

    data ? (coords = Array.from(data.split(', '))) : (coords = [55.795464, 49.108049]);
    mediaQuery ? (center = coords) : (center = [55.795464, 49.108049]);

    const map = new Map('yamapsId', {
        // map center:
        center: center,
        // map zoom value:
        zoom: 14,
        // placemarks:
        coords: [
            coords
        ],
        // map control elements:
        controls: [

        ]
    })
}
