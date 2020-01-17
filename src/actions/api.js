import axios from 'axios';

const API_KEY = 'c94f52c104c381e14f84ce1191dd71f1';
const BASE_URL = `https://api.themoviedb.org/3`;

export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';

export const fetchPopularData = (data) => {
    return {
        type: FETCH_POPULAR_MOVIES,
        data
    }
}
  
export const fetchPopularMovies = () => {
    return (dispatch) => {
        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`).then(response => {
            dispatch(fetchPopularData(response.data))
        }).catch(error => {
            throw (error);
        })
    }
}