import { MarkerF, OverlayView } from '@react-google-maps/api'
import React from 'react'
import MarkerListingItem from './MarkerListingItem'

function MapMarker({ item, isSelected, onSelect, onClose }) {
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