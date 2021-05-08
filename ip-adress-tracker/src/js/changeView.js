import { UI } from './UI';

export function changeLocation({lat, lng, ip}, map) {
  map.flyTo([lat, lng]);

  const marker = L.marker([lat, lng], {
    title: 'IP: ' + ip
  }).addTo(map);
  marker.bindPopup('IP: ' + ip).openPopup();

  L.circle([lat, lng], {
    color: 'red',
    fillColo: '#f03',
    fillOpacity: 0.5,
    radius: 200
  }).addTo(map);
}

export function changeContent({ ip, isp, location }) {
  UI.ipContent.textContent = ip;
  UI.locationContent.textContent = `${location.city}, ${location.country} ${location.postalCode}`;
  UI.timezone.textContent = location.timezone;
  UI.ispContent.textContent = isp;
}