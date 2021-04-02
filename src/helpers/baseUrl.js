let baseURL;

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3004';
} else {
    baseURL = 'production URL';
}

export default baseURL