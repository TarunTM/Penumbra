@echo off
setlocal enabledelayedexpansion

:: Define the prefix here; you can change it as desired
set prefix=AR_24_WhiteMangoose_Bayhauz_Auroville

:: Counter to keep track of file numbering
set /a count=1

:: Loop through .CR3, .jpg, and .ARW files in the current directory
for %%f in (*.CR3 *.jpg *.ARW) do (
    :: Get the file extension
    set "ext=%%~xf"

    :: Format the number with leading zeros (e.g., 01, 02, ...)
    set "num=000!count!"
    set "num=!num:~-3!"

    :: Build the new filename
    set "newname=%prefix%_!num!!ext!"

    :: Rename the file
    ren "%%f" "!newname!"

    :: Increment the counter
    set /a count+=1
)

:: Notify user of completion
echo Renaming complete with prefix "%prefix%".
pause
