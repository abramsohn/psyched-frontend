let baseURL;

if (process.env.NODE_ENV === 'development') {
    baseURL = 'https://psyched-api.herokuapp.com/';
} else {
    baseURL = 'http://localhost:3004';
}

export default baseURL