import Map from './map.html.twig';
import 'leaflet/dist/leaflet';
import './map';

export default {
  title: 'Design System/Atoms/Map',
  args: {
    lat: 44.9202345,
    lng: 8.6239312,
    text: 'Alps Trips',
  },
};

export const Default = ({ lat, lng, text }) =>
  Map({
    lat,
    lng,
    text,
  });
