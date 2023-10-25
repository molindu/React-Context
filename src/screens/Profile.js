import React, { useContext } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LoginContext } from '../Contexts/LoginContext';

const windowWidth = Dimensions.get('window').width;

export default function Profile() {
    const { username, password } = useContext(LoginContext);

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.headerText}>Profile </Text>
            <Text style={styles.text}>Username : {username}</Text>
            <Text style={styles.text}>Password : {password}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: '600'
    },
    text: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: '500'
    },
})