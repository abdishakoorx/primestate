import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapMarker from './MapMarker';

const containerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '10px'
};

function GoogleMapSection({ coordinates, listing, center }) {
    const [mapCenter, setMapCenter] = useState({
        lat: -1.2675001,
        lng: 36.812022
    })
    const [selectedPin, setSelectedPin] = useState(null)

    useEffect(() => {
        if (center) {
            setMapCenter(center);
        } else if (coordinates) {
            setMapCenter(coordinates);
        }
    }, [center, coordinates])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY
    })

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        let hasValidCoordinates = false;
        listing.forEach((item) => {
            try {
                const coordinates = JSON.parse(item.coordinates);
                bounds.extend(new window.google.maps.LatLng(coordinates.lat, coordinates.lng));
                hasValidCoordinates = true;
            } catch (error) {
                console.error("Error parsing coordinates for item:", item.id, error);
            }
        });
        if (hasValidCoordinates) {
            map.fitBounds(bounds);
        } else {
            map.setCenter(mapCenter);
            map.setZoom(14);
        }
    }, [listing, mapCenter])

    const onUnmount = React.useCallback(function callback(map) {
        // Any cleanup code can go here
    }, [])

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {listing.map((item, index) => {
                    const coordinates = JSON.parse(item.coordinates);
                    return (
                        <MapMarker
                            key={index}
                            item={{ ...item, coordinates }}
                            isSelected={selectedPin && selectedPin.id === item.id}
                            onSelect={() => setSelectedPin(item)}
                            onClose={() => setSelectedPin(null)}
                        />
                    );
                })}
            </GoogleMap>
        </div>
    ) : <></>
}

export default GoogleMapSection