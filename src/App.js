import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            {
                apiKey: 'AIzaSyAg8dzIAAXapd3KmJ5hlAcfvSqrelucFWQ',
                authDomain: 'authentication-1b23c.firebaseapp.com',
                databaseURL: 'https://authentication-1b23c.firebaseio.com',
                projectId: 'authentication-1b23c',
                storageBucket: 'authentication-1b23c.appspot.com',
                messagingSenderId: '1065248914106'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text>An App!</Text>
            </View>
        );
    }
}
export default App;