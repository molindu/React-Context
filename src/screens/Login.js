import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LoginContext } from '../Contexts/LoginContext';

const windowWidth = Dimensions.get('window').width;

export default function Login() {
    const { username, setUsername, password, setPassword, setShowProfile } = useContext(LoginContext);
    return (
        <View style={styles.loginContainer}>
            <TextInput
                placeholder='User Name ...'
                value={username}
                onChangeText={setUsername}
                style={styles.inputStyle}
            />
            <TextInput
                placeholder='Password ...'
                value={password}
                onChangeText={setPassword}
                style={styles.inputStyle}
            />
            <TouchableOpacity
                onPress={() => {
                    if (username !== "" && password !== "") {
                        setShowProfile(true);
                    }
                    // if (showProfile) {
                    //     setShowProfile(false);
                    // }
                }}
                style={[styles.inputStyle, styles.Button]}
            >
                <Text style={{ color: '#fff' }}>LOGIN</Text>
            </TouchableOpacity>
            {/* {showProfile && <Text style={{ marginTop: 20, }}>{username}</Text>} */}
        </View>
    )
}

const styles = StyleSheet.create({

    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        width: windowWidth * 0.9,
        borderColor: '#269',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        height: 50,
    },
    Button: {
        backgroundColor: '#269',
        justifyContent: 'center',
        alignItems: 'center',
    },
})