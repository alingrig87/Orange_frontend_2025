# 📘 Git Bash Documentation – Basic Commands and Working with Files/Directories

## 🧰 Table of Contents

1. [Navigation and Exploration Commands](#navigation-and-exploration-commands)
   - pwd
   - ls and ls -la
   - cd, cd .., cd /c, cd /d
2. [Managing Directories and Files](#managing-directories-and-files)
   - mkdir
   - rmdir, rm -r
   - touch
3. [Relative and Absolute Paths](#relative-and-absolute-paths)
4. [Command Parameters](#command-parameters)
5. [Autocomplete: Tab Key](#autocomplete-tab-key)
6. [Clearing the Terminal](#clearing-the-terminal)
   - clear or Ctrl + L
7. [Practice Exercises](#practice-exercises)

---

## Navigation and Exploration Commands

### 🔹 `pwd` – Print Working Directory

Displays the full (absolute) path of the current directory.

#### Example 1:

```bash
$ pwd
/c/Users/student/Documents
```

#### Example 2:

After navigating:

```bash
$ cd /c/Users/student/Desktop
$ pwd
/c/Users/student/Desktop
```

👉 _Useful for knowing your current location in the file system._

---

### 🔹 `ls` and `ls -la` – List Files/Directories

- `ls`: lists visible files/directories.
- `ls -la`: also shows hidden files (starting with a dot `.`).

#### Example 1:

```bash
$ ls
Documents  Pictures  test.txt
```

#### Example 2:

```bash
$ ls -la
drwxr-xr-x 1 user user 512 Aug 6 12:00 .
drwxr-xr-x 1 user user 512 Aug 6 11:00 ..
-rw-r--r-- 1 user user   0 Aug 6 12:00 .gitignore
-rw-r--r-- 1 user user 123 Aug 6 12:00 test.txt
```

---

### 🔹 `cd`, `cd ..`, `cd /c`, `cd /d` – Change Directory

- `cd` – enter a directory
- `cd ..` – move one level up
- `cd /c` – access C: drive
- `cd /d` – access D: drive

#### Examples:

```bash
$ cd Documents
$ pwd
/c/Users/student/Documents

$ cd ..
$ pwd
/c/Users/student

$ cd /d
$ pwd
/d
```

---

## Managing Directories and Files

### 🔹 `mkdir` – Make Directory

Creates a new directory.

#### Example 1:

```bash
$ mkdir project
```

#### Example 2:

```bash
$ mkdir -p course/git/bash
```

👉 Creates the full directory structure if it doesn’t exist.

---

### 🔹 `rmdir` and `rm -r` – Remove Directories

- `rmdir` – removes only empty directories
- `rm -r` – removes directories and contents recursively

#### Example:

```bash
$ rmdir project
```

```bash
$ rm -r course
```

⚠️ _Be careful with `rm -r`, it deletes without confirmation!_

---

### 🔹 `touch` – Create Empty File

#### Example 1:

```bash
$ touch test.txt
```

#### Example 2:

```bash
$ touch report.md document.docx
```

---

## Relative and Absolute Paths

- **Absolute path**: starts with `/` and leads directly to a location.
- **Relative path**: based on the current directory.

#### Example:

```bash
$ cd /c/Users/student
$ cd Documents  # relative path
$ cd /c/Users/student/Documents  # absolute path
```

---

## Command Parameters

Parameters are options that modify command behavior.

#### Example:

```bash
$ ls -l     # detailed listing
$ mkdir -p  # create nested directories
```

---

## Autocomplete: Tab Key

Use the `Tab` key to auto-complete file and command names.

#### Example:

```bash
$ cd Doc<Tab>
# automatically completes to "Documents" or similar
```

---

## Clearing the Terminal

### 🔹 `clear` or `Ctrl + L`

Clears the terminal window without deleting the command history.

#### Example:

```bash
$ clear
```
