import react, { useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl';

const App = () => {

  const REACT_APP_MAPBOX_TOKEN = 'Your token'
  
  const [ viewport, setViewport ] = useState({
    latitude: 37.532600,
    longitude: 127.024612,
    zoom: 12
  });

  return (
    <div className="Mapbox">
      <Map
        {...viewport}
        mapboxAccessToken={REACT_APP_MAPBOX_TOKEN}
        onMove={e => setViewport(e.viewState)}
        style={{width: "600px", height:"400px" }}
        mapStyle="mapbox://styles/polarislsj/clbueti1r001414t1npzeqehk"
        >
      </Map>

      {/* <Map
        {...viewport}
        mapboxAccessToken={REACT_APP_MAPBOX_TOKEN}

        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: "100vw", height:"100vh" }}
        mapStyle="mapbox://styles/polarislsj/clbueti1r001414t1npzeqehk"
      /> */}
    </div>
  );
};

export default App;