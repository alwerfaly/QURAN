#!/bin/bash

echo "==============================================="
echo "   🎵 Quran Kareem Enhanced Server Launcher"
echo "==============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed ($(node --version))"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    echo "Make sure you're running this from the project directory"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

echo ""
echo "🚀 Starting Quran Kareem Server on port 8001..."
echo "📖 The application will open at http://localhost:8001"
echo ""
echo "Press Ctrl+C to stop the server"
echo "==============================================="

# Start the server
npm start
