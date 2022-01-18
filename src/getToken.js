function getToken() {
    console.log(localStorage)
    return localStorage.getItem('token');
}

export default getToken();