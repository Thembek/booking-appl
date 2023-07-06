import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Amenities = () => {
    const services = [
        {
            id: "0",
            name: "room service",
        },
        {
            id: "2",
            name: "free wifi",
        },
        {
            id: "3",
            name: "Family rooms",
        },
        {
            id: "4",
            name: "Free Parking",
        },
        {
            id: "5",
            name: "Swimming pool",
        },
        {
            id: "6",
            name: "Restaurant",
        },
    ];

    return(
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: '600' }}>
                Most Popular Facilities
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                { services.map((item, index) => (
                    <View
                        style={{
                            margin: 10,
                            backgroundColor: '#007FFF',
                            paddingHorizontal: 11,
                            paddingVertical: 5,
                            borderRadius: 25,
                        }}
                        key={index}
                    >
                        <Text style={{ textAlign: 'center', color: 'white' }}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Amenities;