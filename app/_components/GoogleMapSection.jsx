import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '10px'
};


function GoogleMapSection({ coordinates }) {

    const [center, setCenter] =useState({
        lat: -1.2675001,
        lng: 36.812022
    })

    useEffect(() => {
        coordinates && setCenter(coordinates)
    },[coordinates])

    const [map, setMap] = React.useState(null)
    // const { isLoaded } = useJsApiLoader({
    //     id:'google-map-script',
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY
    // })

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>

        </div>
    )
}

export default GoogleMapSection