let map;
// initMap is now async
async function initMap() {
    const position = { lat: -25.344, lng: 131.031 };
    // Request libraries when needed, not in the script tag.
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: position,
        zoom: 8,
        mapId: "DEMO_MAP_ID",
    });

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
      });
}
initMap();
// window.initMap = initMap;