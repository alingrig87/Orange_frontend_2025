// Web Storage (localStorage & sessionStorage) - starter code
// TODO: Learn about localStorage and sessionStorage

// localStorage (persists until manually cleared):
// localStorage.setItem("username", "John");
// localStorage.setItem("theme", "dark");
// localStorage.setItem("settings", JSON.stringify({
//     notifications: true,
//     autoSave: false
// }));

// Reading from localStorage:
// const username = localStorage.getItem("username");
// const theme = localStorage.getItem("theme");
// const settings = JSON.parse(localStorage.getItem("settings"));

// Removing from localStorage:
// localStorage.removeItem("username");
// localStorage.clear(); // Remove all items

// sessionStorage (cleared when tab closes):
// sessionStorage.setItem("sessionData", "temporary data");
// const sessionData = sessionStorage.getItem("sessionData");
// sessionStorage.removeItem("sessionData");

// Checking storage availability:
// function isStorageAvailable(type) {
//     try {
//         const storage = window[type];
//         const test = '__storage_test__';
//         storage.setItem(test, test);
//         storage.removeItem(test);
//         return true;
//     } catch (e) {
//         return false;
//     }
// }

// Storage event (listen for changes):
// window.addEventListener('storage', (e) => {
//     console.log('Storage changed:', e.key, e.oldValue, e.newValue);
// });

// TODO: Add your storage examples here
