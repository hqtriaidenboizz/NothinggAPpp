import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
const customStyle = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#919191"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f8f8f8"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f7f7f7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e1e1e1"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "saturation": "0"
            }
        ]
    }
]
const LVLocation = {
    latitude: 16.061362,
    longitude: 108.222391,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

export default function Map() {
    return (
        <View style={styles.container}>
            {/*Render our MapView*/}
            <MapView
                // zoomEnabled={true}
                // zoomControlEnabled={true}
                style={styles.map}
                customMapStyle={customStyle}
                //specify our coordinates.
                initialRegion={LVLocation}
            >
                <Marker coordinate={LVLocation}>
                    <Image source={require('../assets/images/pickLV.png')} style={{ height:80, width: 40, resizeMode:'contain' }}></Image>
                </Marker>
            </MapView>
        </View>
    );
}
//create our styling code:
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});