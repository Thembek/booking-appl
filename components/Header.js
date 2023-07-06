import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const iconColor ="#76d7ea";

const Header = () => {
    return (
        <View
            style={{
                backgroundColor: "#003580",
                height: 65,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <Pressable
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 25,
                    padding: 8,
                }}
            >
                <Ionicons name="bed-outline" size={24} color={iconColor} />
                <Text
                    style={{
                        marginLeft: 8,
                        fontWeight: 'bold',
                        color: '#76d7ea',
                        fontSize: 15,
                    }}
                >
                    STAYS
                </Text>
            </Pressable>

            <Pressable
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Ionicons name="ios-airplane-outline" size={26} color={iconColor} />
                <Text
                    style={{
                        marginLeft: 8,
                        fontWeight: "bold",
                        color: 'white',
                        fontSize: 15,
                    }}
                >
                    FLIGHTS
                </Text>
            </Pressable>

            <Pressable
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Ionicons name="car-outline" size={26} color={iconColor} />
                <Text
                    style={{
                        marginLeft: 8,
                        fontWeight: "bold",
                        color: 'white',
                        fontSize: 15,
                    }}
                >
                    CAR RENTAL
                </Text>
            </Pressable>

            <Pressable
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <FontAwesome5 name="uber" size={26} color={iconColor} />
                <Text
                    style={{
                        marginLeft: 8,
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 15,
                    }}
                >
                    TAXI
                </Text>
            </Pressable>
        </View>
    );
};

export default Header;