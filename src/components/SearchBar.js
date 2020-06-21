import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyle} size={30} name="search" />
            <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#e7e4e4',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 13,
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: "center",
        fontSize: 35,
        marginHorizontal: 13,
    }
});

export default SearchBar;