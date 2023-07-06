import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable, StyleSheet, Dimensions,  } from 'react-native';

const PropertyCard = ({
    rooms,
    children,
    property,
    adults,
    selectedDates,
    availableRooms,
}) => {
    const { width, height } = Dimensions.get("window");
    const navigation = useNavigation();
    return(
        <View>
            <Pressable
                onPress={() => navigation.navigate("Info", {
                    name: property.name,
                    rating: property.rating,
                    oldPrice: property.oldPrice,
                    newPrice: property.newPrice,
                    photos: property.photos,
                    availableRooms: property.rooms,
                    adults: adults,
                    children: children,
                    rooms: rooms,
                    selectedDates: selectedDates,
                })}

                style={{ margin: 15, flexDirection: 'row', backgroundColor: 'white' }}
            >
                <View>
                    <Image style={{ height: height / 4, width: width -280 }} source={{ uri: property.image }}/>
                </View>

                <View style={{ padding: 10 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{ width: 200}}>{property.name}</Text>
                        <AntDesign name="hearto" size={24} color={red} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 6,
                            marginTop: 7,
                        }}
                    >
                        <MaterialIcons name="stars" size={24} color="yellow" />
                        <Text>{property.rating}</Text>\
                        <View
                            style={{
                                backgroundColor: '#6CB4EE',
                                paddingHorizontal: 3,
                                paddingVertical: 5,
                                width: 100,
                            }} 
                        >
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>
                                GENIUS LEVEL
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={{
                            width: 210,
                            marginTOp: 6,
                            color: 'gray',
                            fontWeight: 'bold',
                        }}
                    >
                        {property.address.length > 50
                            ? property.address.substr(0, 50)
                            : property.address
                        }
                    </Text>

                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: '500' }}>
                        Price for 1 Night and adults
                    </Text>
                    <View
                        style={{
                            marginTop: 5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <Text
                            style={{
                                color: 'red',
                                fontSize: 18,
                                textDecorationLine: 'line-through',
                            }}
                        >
                            { property.oldPrice * adults }
                        </Text>
                        <Text style={{ fontSize: 18 }}>
                            Rs { propertu.newPrice * adults }
                        </Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: '#6082B6',
                            paddingVertical: 2,
                            marginTop: 2,
                            borderRadius: 5,
                            width: 150,
                            paddingHorizontal: 3,
                        }}
                    >
                        <Text style={{ textAlign: 'center', color: 'white'}}>Limited Time Deal</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};