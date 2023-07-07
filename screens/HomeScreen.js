import React, { useLayoutEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ModalFooter } from 'react-native-modals';
import { ModalButton } from 'react-native-modals';
import { ModalTitle } from 'react-native-modals';
import { SlideAnimation } from 'react-native-modals';
import { ModalContent } from 'react-native-modals';
import DatePicker from 'react-native-date-ranges';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, Alert, Button, TextInput, ScrollView, Pressable, StyleSheet } from 'react-native';

import Header from '../components/Header';

const HomeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [selectedDates, setSelectedDates] = useState();
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Booking.com",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#003580',
                height: 110,
                borderBottomColor: 'transparent',
                shadowColor: 'transparent',
            },
            headerRight: () => (
                <Ionicons
                    name="notifications-outline"
                    size={24}
                    color='white'
                    style={{ marginRight: 12 }}
                />
            )
        })
    }, []);

    const customButton = (onConfirm) => {
        return (
            <Button 
                onPress={onConfirm}
                style={{
                    container: { width: '80%', marginHorizontal: '3%' },
                    text: { fontSize: 20 },
                }}
                primary
                title="Submit"
            />
        );
    };

    console.log(route.params);

    const searchPlaces = (place) => {
        if(!route.params || !selectedDates) {
            Alert.alert(
                "Invalid Details",
                "Please enter all the details",
                [
                    {
                        text: "Cancle",
                        onPress: () => console.log("OK Pressed"),
                        style: 'cancel'
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }

        if(route.params && selectedDates){
            navigation.navigate("Places", {
                rooms: rooms,
                adults: adults,
                children: children,
                selectedDates: selectedDates,
                place: place,
            })
        }
    };

    return(
        <>
            <View>
                <Header/>

                <ScrollView>
                    <View
                        style={{
                            margin: 20,
                            borderColor: "#FFC72C",
                            borderWidth: 3,
                            borderRadius: 6,
                        }}
                    >
                        <Pressable
                            onPress={() => navigation.navigate("Search")}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                paddingHorizontal: 10,
                                borderColor: "#FFC72C",
                                borderWidth: 2,
                                paddingVertical: 15,
                            }}
                        >
                            <Feather name="search" size={24} color="black" />
                            <TextInput 
                                placeholderTextColor="black"
                                placeholder={
                                    route?.params ? route.params.input : "Enter your destination"
                                }
                            />
                        </Pressable>

                        <Pressable
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                gap: 10,
                                paddingHorizontal: 10,
                                borderColor: "#FFC72C",
                                borderWidth: 2,
                                paddingVertical: 15,
                            }}
                        >
                            <Feather name="calendar" size={24} color="black" />
                            <DatePicker 
                                style={{
                                    width: 350,
                                    height: 30,
                                    borderRadius: 0,
                                    borderWidtg: 0,
                                    borderColor: 'transparent'
                                }}
                                customStyles={{
                                    placeholderText: {
                                        fontSize: 15,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 'auto',
                                    },
                                    headerStyle: {
                                        backgroundColor: '#003580',
                                    },
                                    contentText: {
                                        fontSize: 15,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 'auto',
                                    },
                                    headerStyle: {
                                        backgroundColor: '#003580',
                                    },
                                    contentText: {
                                        fontSIze: 15,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 'auto',
                                    }
                                }}
                                selectedBgColor = "#0047AB"
                                customButton={(onConfirm) => customButton(onConfirm)}
                                onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                                allowFontScaling={false}
                                placeholder={"Select Your Dates"}
                                mode={"range"}
                            />
                        </Pressable>

                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                paddingHorizontal: 10,
                                borderColor: "#FFC72C",
                                borderWidth: 2,
                                paddingVertical: 15,
                            }}
                        >
                            <Ionicons name="person-outline" size={24} color="black" />
                            <TextInput 
                                placeholderTextColor="red"
                                placeholder={`${rooms} room • ${adults} adults • ${children} Children`}
                            />
                        </Pressable>

                        <Pressable
                            onPress={() => searchPlaces(route?.params.input)}
                            style={{
                                paddingVertical: 10,
                                borderColor: "#FFC72C",
                                borderWidth: 2,
                                paddingVertical: 15,
                                backgroundColor: '#2a52be',
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: 'white',
                                }}
                            >
                                Search
                            </Text>
                        </Pressable>
                    </View>

                    <Text
                        style={{ marginHorizontal: 20, fontSize: 17, fontWeight: '500' }}
                    >
                        Travel More, spend less
                    </Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable
                            style={{
                                width: 200,
                                height: 150,
                                marginTop: 10,
                                backgroundColor: "#003580",
                                borderRadius: 10,
                                padding: 20,
                                marginHorizontal: 20, 
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    marginVertical: 7,
                                }}
                            >
                                Genius
                            </Text>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>
                                You are at genius level, one in our loyalty program
                            </Text>
                        </Pressable>

                        <Pressable
                            style={{
                                width: 200,
                                height: 150,
                                marginTop: 10,
                                borderColor: "#E0E0E0",
                                borderWidth: 2,
                                borderRadius: 10,
                                padding: 20,
                                marginHorizontal: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    marginVertical: 7,
                                }}
                            >
                                15% Discounts
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                Complete 5 stays to unlock level 2
                            </Text>
                        </Pressable>

                        <Pressable
                            style={{
                                width: 200,
                                height: 150,
                                marginTop: 10,
                                borderColor: "#E0E0E0",
                                borderWidtg: 2,
                                borderRadius: 10,
                                padding: 20,
                                marginHorizontal: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    marginVertical: 7,
                                }}
                            >
                                10% Discounts
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                Enjoy Discounts at participating at properties worldwide
                            </Text>
                        </Pressable>
                    </ScrollView>

                    <Pressable
                        style={{
                            marginTop: 40,
                            justifyContent: 'center',
                            alignIitems: 'center',
                        }}
                    ></Pressable>
                </ScrollView>
            </View>
        </>
    );
};

export default HomeScreen;