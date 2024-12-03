// // src/utils/crypto.js
// import CryptoJS from "crypto-js";

// const secretKey = "lIpNCz3u91RyzQC3XOl+Fji8PzYsmLciBmut4Q7p77o="; // This is your secret key

// // Encrypt the data
// export const encrypt = (data) => {
//   if (data == null || data === undefined) {
//     console.error("Invalid data to encrypt");
//     return data;
//   }

//   // Generate random initialization vector
//   const ivArray = window.crypto.getRandomValues(new Uint8Array(16)); // 16 bytes IV for AES
//   const iv = CryptoJS.lib.WordArray.create(ivArray);

//   const key = CryptoJS.enc.Base64.parse(secretKey); // Convert the secret key into Base64 format

//   // Encrypt the data using AES encryption with CBC mode and PKCS7 padding
//   const encrypted = CryptoJS.AES.encrypt(data, key, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//   });

//   // Combine IV and encrypted data into a JSON object
//   const jsonObject = {
//     iv: iv.toString(CryptoJS.enc.Base64), // Convert IV to Base64
//     data: encrypted.toString(), // The encrypted data
//   };

//   // Convert the JSON object into a Base64 encoded string to send to the backend
//   return btoa(JSON.stringify(jsonObject)); // Base64 encode the entire object
// };

// // Decrypt the data
// export const decrypt = (base64EncodedJson) => {
//   const decodedJsonString = atob(base64EncodedJson); // Decode the Base64 encoded string
//   const { iv, data } = JSON.parse(decodedJsonString); // Parse the JSON string

//   const key = CryptoJS.enc.Base64.parse(secretKey); // Convert secret key to Base64 format
//   const ivWordArray = CryptoJS.enc.Base64.parse(iv); // Convert IV from Base64 to WordArray

//   // Decrypt the data using AES
//   const decrypted = CryptoJS.AES.decrypt(data, key, {
//     iv: ivWordArray,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//   });

//   return decrypted.toString(CryptoJS.enc.Utf8); // Convert decrypted data to UTF-8 string
// };
