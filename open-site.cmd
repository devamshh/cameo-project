@echo off
cd /d "%~dp0"
start "Cameo local server" /min node local-server.js
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:8080/index.html"
