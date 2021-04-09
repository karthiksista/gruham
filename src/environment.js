let BASE_URL = 'http://localhost:4000'

if (process.env.REACT_APP_ENV === 'development') {
    BASE_URL = 'http://localhost:4000'
}

if (process.env.REACT_APP_ENV === 'production') {
    BASE_URL = 'https://gruham-be.herokuapp.com'
}

export { BASE_URL }