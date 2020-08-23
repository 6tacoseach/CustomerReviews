console.log('got to database index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://database/custreviews');

// COMMENT OUT CONNECT FUNCTION ABOVE AND
// UNCOMMMENT FUNCTION BELLOW FOR LOCAL CHANGES
// mongoose.connect('mongodb://localhost/custreviews');