const setLocalStorageItem = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

const getLocalStorageItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

const removeLocalStorageItem = (key) => {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        return true;
    } else return false;
};

const clearLocalStorage = () => {
    localStorage.clear();
};

export { setLocalStorageItem, clearLocalStorage, getLocalStorageItem, removeLocalStorageItem }
