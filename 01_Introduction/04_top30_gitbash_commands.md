
# 📘 Top 30 Most Commonly Used Git Bash Commands

This document provides a list of the 30 most frequently used Git Bash (or general Unix/Linux shell) commands, each with a brief description and a relevant usage example.

---

## 1. `pwd` – Print Working Directory
Displays the current working directory.
```bash
$ pwd
/c/Users/student/projects
```

## 2. `ls` – List Directory Contents
Lists files and directories.
```bash
$ ls
Documents  Downloads  script.sh
```

## 3. `ls -la` – List All with Details
Lists all files, including hidden ones, with detailed information.
```bash
$ ls -la
-rw-r--r--  1 user user   0 Aug 6 10:00 .gitignore
```

## 4. `cd` – Change Directory
Navigates into a directory.
```bash
$ cd Documents
```

## 5. `cd ..` – Go Up One Directory
Moves one level up in the directory structure.
```bash
$ cd ..
```

## 6. `mkdir` – Make Directory
Creates a new directory.
```bash
$ mkdir new_project
```

## 7. `touch` – Create New File
Creates an empty file.
```bash
$ touch notes.txt
```

## 8. `rm` – Remove File
Deletes a file.
```bash
$ rm old_script.sh
```

## 9. `rm -r` – Remove Directory Recursively
Deletes a directory and all its contents.
```bash
$ rm -r temp_folder
```

## 10. `cp` – Copy File or Directory
Copies files or directories.
```bash
$ cp file.txt backup.txt
```

## 11. `mv` – Move or Rename
Moves or renames files or directories.
```bash
$ mv report.txt archive/
```

## 12. `cat` – Concatenate and Display File Content
Displays file content.
```bash
$ cat README.md
```

## 13. `echo` – Display a Line of Text
Prints a string to the terminal.
```bash
$ echo "Hello, world!"
```

## 14. `clear` – Clear Terminal
Clears the terminal screen.
```bash
$ clear
```

## 15. `history` – Show Command History
Displays the command history.
```bash
$ history
```

## 16. `man` – Manual Pages
Shows the manual/help for a command.
```bash
$ man ls
```

## 17. `grep` – Search Text
Searches for text in files.
```bash
$ grep "error" log.txt
```

## 18. `find` – Find Files
Searches for files and directories.
```bash
$ find . -name "*.sh"
```

## 19. `chmod` – Change Permissions
Changes file permissions.
```bash
$ chmod +x script.sh
```

## 20. `chown` – Change Ownership
Changes the owner of a file.
```bash
$ sudo chown user:user file.txt
```

## 21. `stat` – File Information
Displays detailed info about a file.
```bash
$ stat notes.txt
```

## 22. `basename` – Get Filename from Path
Extracts the filename from a path.
```bash
$ basename /path/to/file.txt
file.txt
```

## 23. `dirname` – Get Directory from Path
Extracts the directory part of a path.
```bash
$ dirname /path/to/file.txt
/path/to
```

## 24. `diff` – Compare Files
Shows differences between two files.
```bash
$ diff old.txt new.txt
```

## 25. `head` – First Lines of File
Displays the first 10 lines of a file.
```bash
$ head data.csv
```

## 26. `tail` – Last Lines of File
Displays the last 10 lines of a file.
```bash
$ tail logs.txt
```

## 27. `wget` – Download from Web
Downloads files from the internet.
```bash
$ wget https://example.com/file.zip
```

## 28. `tar` – Archive Files
Creates or extracts `.tar` archives.
```bash
$ tar -czvf archive.tar.gz folder/
```

## 29. `uname` – System Info
Displays system information.
```bash
$ uname -a
```

## 30. `exit` – Close Terminal Session
Closes the current terminal session.
```bash
$ exit
```

---

✅ *This list is a practical reference for everyday usage in Git Bash or other Unix-like terminals.*
