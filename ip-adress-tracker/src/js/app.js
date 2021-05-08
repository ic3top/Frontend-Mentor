import L from './plugins/leaflet/leaflet';
import {
  UI
} from './UI';
import { fetchByQuery } from './api';
import { changeLocation, changeContent} from './changeView';
import { changeLoader } from './changeLoader';
import { setError, removeError } from './validate';
import './plugins/leaflet/leaflet.css';
import '../scss/style.scss';
import './plugins/leaflet/images/marker-shadow.png';

let map = L.map('map', {
  center: [34.08057, -118.07285],
  zoom: 13
});

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=iAcDIl5s3AmpqexjAscV', {
  attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> 
  <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
  crossOrigin: true
}).addTo(map);

L.marker([34.08057, -118.07285]).addTo(map);
L.circle([34.08057, -118.07285], {
  color: 'red',
  fillColo: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(map);

UI.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = UI.input.value.trim()
  if (query) {
    changeLoader(true);
    fetchByQuery(query)
      .then(({location, ip, isp}) => {
        changeLocation({ lat: location.lat, lng: location.lng, ip }, map);
        changeContent({ ip, isp, location });
        UI.input.value = '';
        changeLoader(false);  
      })
      .catch(err => {
        setError(err.message);
        changeLoader(false);  
      });
    return;  
  }
  setError('Invalid query...');
});

UI.input.addEventListener('input', removeError);
