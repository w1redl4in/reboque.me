import * as MainStyles from './styles';
import {
  GoogleMap,
  withScriptjs,
  Marker,
  withGoogleMap,
  WithGoogleMapProps,
  DirectionsRenderer,
} from 'react-google-maps';
import { useState } from 'react';

const origin = { lat: -23.51269, lng: -46.75219 };

const destination = { lat: -23.5009385, lng: -46.7371201 };

export const Main = withScriptjs(
  withGoogleMap((props: WithGoogleMapProps) => {
    const directionService = new google.maps.DirectionsService();
    const [directions, setDirections] = useState<any>();

    console.log('directions', directions);

    directionService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.log('error fetching directions', result);
        }
      }
    );

    return (
      <MainStyles.Container>
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: -23.51269, lng: -46.75219 }}
        >
          <Marker position={origin} />
          <Marker position={destination} />
        </GoogleMap>

        <DirectionsRenderer directions={directions} />
      </MainStyles.Container>
    );
  })
);
