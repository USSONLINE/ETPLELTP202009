var fs = require('fs');

try {
    var data = fs.readFileSync('inputHtml.html', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}
