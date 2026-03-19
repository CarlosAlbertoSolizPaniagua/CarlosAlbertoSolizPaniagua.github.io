import fs from 'fs';
import pdfParse from 'pdf-parse/lib/pdf-parse.js';

const targetPDF = 'public/assets/CV_Carlos_Soliz.pdf';

if (fs.existsSync(targetPDF)) {
    const dataBuffer = fs.readFileSync(targetPDF);
    pdfParse(dataBuffer).then(function(data) {
        console.log(data.text);
    }).catch(err => {
        console.error("Error parsing PDF:", err);
    });
} else {
    console.error("File not found:", targetPDF);
}
