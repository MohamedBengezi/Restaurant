import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const resp = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Toronto'
                }
            });
            setResults(resp.data.businesses);
        } catch (err) {
            console.log(err);
            setError('Something Went Wrong');
        }
    };

    //intial search to fill page. useEffect makes this search run one time
    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, error];
};