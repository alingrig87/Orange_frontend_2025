// Cookies - starter code
// TODO: Learn about working with cookies

// Setting a cookie:
// document.cookie = "username=John; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// Reading cookies:
// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//     return null;
// }

// Using the getCookie function:
// const username = getCookie("username");
// console.log("Username from cookie:", username);

// Setting cookie with expiration:
// function setCookie(name, value, days) {
//     const expires = new Date();
//     expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
//     document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
// }

// Deleting a cookie:
// function deleteCookie(name) {
//     document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
// }

// TODO: Add your cookie examples here
