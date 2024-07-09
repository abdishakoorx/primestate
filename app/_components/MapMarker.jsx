import { MarkerF, OverlayView } from '@react-google-maps/api'
import React from 'react'
import MarkerListingItem from './MarkerListingItem'

function MapMarker({ item, isSelected, onSelect, onClose }) {
    if (!item.coordinates || !item.coordinates.lat || !item.coordinates.lng) {
        return null; // Don't render the marker if coordinates are invalid
    }

    return (
        <div>
            <MarkerF
                position={item.coordinates}
                onClick={onSelect}
                icon={{
                    url: '/pin.png',
                    scaledSize: {
                        width: 70,
                        height: 70
                    }
                }}
            >
                {isSelected && (
                    <OverlayView
                        position={item.coordinates}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div>
                            <MarkerListingItem
                                item={item}
                                closeHandler={onClose}
                            />
                        </div>
                    </OverlayView>
                )}
            </MarkerF>
        </div>
    )
}

export default MapMarker