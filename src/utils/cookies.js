const saveAuthToCookie = (value) => {
    document.cookie = `til_auth=${value}`;
}
  
const saveUserToCookie = (value) => {
    document.cookie = `til_user=${value}`;
}

const getAuthFromCookie = () => {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}
  
const getUserFromCookie = () => {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}
  
const deleteCookie = (value) => {
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

const deleteAllClear = () => {
    deleteCookie('til_auth');
    deleteCookie('til_user');
}
  
export {
    saveAuthToCookie,
    saveUserToCookie,
    getAuthFromCookie,
    getUserFromCookie,
    deleteAllClear,
};
  