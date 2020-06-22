import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults();


    const filterResultsByPrice = (price) => {
        //filter results by price, where price is '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <SafeAreaView >
            <ScrollView >
                <View>
                    <SearchBar
                        term={term}
                        onTermChange={setTerm}
                        onTermSubmit={() => searchApi(term)}
                    />
                    {error ? <Text>{error}</Text> : null}

                    <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                    <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                    <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
                    <ResultsList results={filterResultsByPrice('$$$$')} title="Ballin Out" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;