import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';  

export default function Map(props) {
    const [markers, setMarkers] = useState([]);  

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate;  
        setMarkers([...markers, coords]);  
    };

    return (
        <MapView
            style={styles.map}
            region={props.location}  
            mapType='satellite'
            onLongPress={showMarker}  
        >
            {markers.map((marker, index) => (
                <Marker
                    key={index}  
                    coordinate={marker}  
                    title={`Marker ${index + 1}`}  
                    description={`Lat: ${marker.latitude}, Lon: ${marker.longitude}`}  
                />
            ))}
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    },
});


