import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';  

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    
    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("user credential", userCredential);
            const user = userCredential.user;
            console.log("user details", user);
        })
    }

    useEffect(() => {
        try {
            const unsubscribe = auth.onAuthStateChanged((authUser) => {
                if(authUser) {
                    navigation.replace("Main");
                }
            });
            return unsubscribe;
        } catch (e) {
            console.log(e);
        }
    }, []);

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white',
                paddding: 10,
                alignItems: 'center',
            }}
        >
            <KeyboardAvoidingView>
                <View
                    style={{
                        justifyCOntent: "center",
                        alignItems: 'center',
                        marginTop: 100,
                        
                    }}
                >
                    <Text style={{ color: '#003580', fontSize: 17, fontWeight: '700' }}>
                        Sign In
                    </Text>

                    <Text style={{ marginTop: 15, fontSize: 18, fontWeight: '500' }}>
                        Sign In to your account
                    </Text>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>
                            Email
                        </Text>

                        <TextInput 
                            placeholder="enter your email id"
                            placeholderTextColor={black}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                fontSize: email ? 18 : 18,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                                marginVertical: 10,
                                width: 300,
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 15}}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>
                            Password
                        </Text>

                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor={black}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{
                                fontSize: password ? 18 : 18,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                                marginVertical: 10,
                                width: 300,
                            }}
                        />
                    </View>
                </View>

                <Pressable
                    style={{
                        width: 200,
                        backgroundColor: "#003580",
                        padding: 15,
                        borderRadius: 7,
                        marginTop: 50,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 17,
                            fontWeight: 'bold',
                        }}
                    >
                        Login
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 20 }}
                >
                    <Text style={{ textAlign: 'center', color: 'gray', fontSize: 17 }}>
                        Don't have an account? Sign up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;