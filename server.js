const express = require('express');
const path = require('path');
const app = express();
const PORT = 8001;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve start.png from parent workspace root if requested at /
app.get('/start.png', (req, res) => {
    const possiblePaths = [
        path.join(__dirname, 'start.png'),
        path.join(__dirname, '..', 'start.png')
    ];
    // Try local first, then parent
    res.sendFile(possiblePaths[0], (err) => {
        if (err) {
            res.sendFile(possiblePaths[1], (err2) => {
                if (err2) res.status(404).end();
            });
        }
    });
});

// Route for main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for readers page
app.get('/Readers/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Readers', 'index.html'));
});

// Route for readers with query parameters
app.get('/Readers/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Readers', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🎵 Quran Kareem Server is running on http://localhost:${PORT}`);
    console.log(`📖 Access the application at: http://localhost:${PORT}`);
    console.log(`🔊 Enhanced with beautiful audio player and modern UI!`);
    console.log(`\n✨ Features:`);
    console.log(`   • 233 Quran readers`);
    console.log(`   • Modern audio player with controls`);
    console.log(`   • Speed control (0.75x - 2x)`);
    console.log(`   • Volume control and mute`);
    console.log(`   • Progress seeking`);
    console.log(`   • Auto-next and repeat functions`);
    console.log(`   • Beautiful responsive design`);
    console.log(`   • Download functionality`);
    console.log(`\n🚀 Press Ctrl+C to stop the server`);
});
