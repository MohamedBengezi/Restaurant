import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    return (
        <View>
            <Text>List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;