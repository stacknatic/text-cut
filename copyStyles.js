// copyStyles.js
var fs = require('fs');
var path = require('path');
var src = path.join(__dirname, 'src', 'styles.css'); // Path to the source styles file
var dest = path.join(__dirname, 'dist', 'styles.css'); // Path to the destination
fs.copyFile(src, dest, function (err) {
    if (err) {
        console.error('Error copying file:', err);
    }
    else {
        console.log('styles.css was copied to dist folder');
    }
});
