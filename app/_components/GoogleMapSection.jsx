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

    const parseCoordinates = (coordinates) => {
        if (typeof coordinates === 'string') {
            try {
                return JSON.parse(coordinates);
            } catch (error) {
                return null;
            }
        } else if (typeof coordinates === 'object' && coordinates !== null) {
            return coordinates;
        }
        return null;
    };

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        let hasValidCoordinates = false;
        listing.forEach((item) => {
            const coords = parseCoordinates(item.coordinates);
            if (coords && coords.lat && coords.lng) {
                bounds.extend(new window.google.maps.LatLng(coords.lat, coords.lng));
                hasValidCoordinates = true;
            }
        });
        if (hasValidCoordinates) {
            map.fitBounds(bounds);
        } else {
            map.setCenter(mapCenter);
            map.setZoom(14);
        }
    }, [listing, mapCenter])

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={14}
                onLoad={onLoad}
                gestureHandling='greedy'
                // onUnmount={onUnmount}
            >
                {listing && listing.length > 0 ? (
                    listing.map((item, index) => {
                        const coordinates = parseCoordinates(item.coordinates);
                        if (!coordinates) {
                            return null;
                        }
                        return (
                            <MapMarker
                                key={index}
                                item={{ ...item, coordinates }}
                                isSelected={selectedPin && selectedPin.id === item.id}
                                onSelect={() => setSelectedPin(item)}
                                onClose={() => setSelectedPin(null)}
                            />
                        );
                    })
                ) : (
                    <div>No listings to display</div>
                )}
            </GoogleMap>
        </div>
    ) : <></>
}

export default GoogleMapSection