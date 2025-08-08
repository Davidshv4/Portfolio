@echo off
SETLOCAL
cd /d "%~dp0"
REM Prefer bundled Node if available, else system Node

IF EXIST "node_modules\" (
  REM no deps required; continue
)

REM
SET NODE_EXE=node
IF EXIST "C:\Program Files\nodejs\node.exe" SET NODE_EXE="C:\Program Files\nodejs\node.exe"
IF EXIST "%ProgramFiles%\nodejs\node.exe" SET NODE_EXE="%ProgramFiles%\nodejs\node.exe"

%NODE_EXE% serve-devflix.js

ENDLOCAL

