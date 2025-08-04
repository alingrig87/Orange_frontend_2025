# Git Initial Configuration

## Steps

1. **Open Git Bash**

2. Run the following commands one by one:

```bash
git config --global user.name "Andrei Popescu"
```

- **Explanation**: This command sets your Git username globally. It means Git will use "Andrei Popescu" as your name for all commits made on your machine, unless overridden in a specific repository.

```bash
git config --global user.email "andrei.popescu@gmail.com"
```

- **Explanation**: This sets your email address globally in Git. It will be associated with all your commits and is used by GitHub (or other platforms) to link commits to your profile.

```bash
git config --global --list
```

- **Explanation**: This command lists all global configuration settings currently set in Git (like your username and email). It helps verify that the previous commands were executed correctly.
