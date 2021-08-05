import { Main } from '../../components/Main';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { MapLayout } from '../../_layouts/Map';

export const Map = () => {
  return (
    <MapLayout>
      <Navbar />
      <Sidebar />
      <Main
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `calc(100vh - 2.5rem)` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `calc(100vh - 2.5rem)` }} />}
      />
    </MapLayout>
  );
};
