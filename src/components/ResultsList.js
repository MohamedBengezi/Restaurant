import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';


const ResultsList = ({ title, results, navigation }) => {
    //if we don't have any results don't show the section title
    if (!results.length) return null;

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Results', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        marginBottom: 10
    }
});

//To give this component the `navigation` prop
export default withNavigation(ResultsList);