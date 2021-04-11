let baseURL;

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3004';
} else {
    baseURL = 'https://psyched-api.herokuapp.com';
}

export default baseURL