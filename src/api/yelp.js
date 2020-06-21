import axios from 'axios'
import api_key from '../../api_key'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${api_key}`
    }
});