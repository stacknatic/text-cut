// copyStyles.js
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'styles.css'); // Path to the source styles file
const dest = path.join(__dirname, 'dist', 'styles.css'); // Path to the destination

fs.copyFile(src, dest, (err) => {
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log('styles.css was copied to dist folder');
    }
});