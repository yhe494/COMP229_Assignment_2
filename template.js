export default (message) => { 
    const jsonString = JSON.stringify({ message: message });
    return `
        <!doctype html>
        <html lang="en"> 
        <head>
            <meta charset="utf-8">
            <title>Online Market Application</title>
        </head>
        <body>
            <div id="root">${jsonString}</div>
        </body>
        </html>
    `;
};
