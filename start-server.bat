@echo off
echo ===============================================
echo    🎵 Quran Kareem Enhanced Server Launcher
echo ===============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed

REM Check if package.json exists
if not exist "package.json" (
    echo ❌ package.json not found
    echo Make sure you're running this from the project directory
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo 🚀 Starting Quran Kareem Server on port 8001...
echo 📖 The application will open at http://localhost:8001
echo.
echo Press Ctrl+C to stop the server
echo ===============================================

REM Start the server
npm start

pause
