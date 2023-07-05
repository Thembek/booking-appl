import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
                <Ionicons name="bed-outline" size={24} color="#76d7ea" />
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
                <Ion
            </Pressable>
        </View>
    );
};

export default Header;