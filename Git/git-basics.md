# Git Basics

## Git 

A one of many Version Control System (VCS). Git is a very useful tool to use for just about anything. It let's you know what's been changed, who changed, and why. And the best part of all is — When you changed the layout of a page a few days ago but changed to another one on the same file. Oops... I can't go back to that design but Git can make that happen. Magic! 

## Installing Git

**Download Git** <br />
https://git-scm.com/downloads

## Git be my best friend :)

**Basic commands** <br />

To start a new repository in any existing folder on your computer — this will be your **working directory**: 

```
git init
```
Creates a hidden `.git` folder — this is the Git repository skeleton, Git can track any changes I made in the working directory. To be specific, nothing is tracked yet. 

If your working directory is not an empty directory: <br />

*Need to track and do initial commit to the existing files in your working directory to trigger version-controlling.*

```
$ git add . 
or
$ git add filename.extension
$ git add LICENSE //if you need one
$ git commit -m "initial commit message"
```
Will cover on 'git add .' later on.

<br />

To **clone** an existing repo:

```
$ git clone https://github.com/username/repository-name.git
```
The above URL is your **remote origin** – it's where all files are originally downloaded from. <br />
When you clone an existing repository, the '.git' folder already exists in the download of all files in the remote repo to your computer inside a new folder named with the exact same name as the repo.

<br />

The **3 states** in Git: <br />

1. Modified – Git can track any files you edit in your working directory<br />
2. Staged - Anything you stage becomes "ready to be commited"<br />
3. Commited - Anything in the commited state is saved as a snapshot<br />

To check for **status** of your project:

```
git status
```
When you type 'git status' command in the command-line: <br />

- Untracked files - any new file that has never ever been added or commited is shown as `directory/filename.extension`
- Any modified files are shown in red as `modified: directory/filename.extension` 
- Any staged files are shown in green as `modified: directory/filename.extension`

***Tip:***
If you're not sure of any of the states above, just type `git status` and see what's going on. Check, and double-check just like checking pixels before handing off to developers is not a bad habit right?

<br />

To **stage** modified files:

- Stages *all and everything* in your *working directory*
  ```
  git add -A .
  or
  git add --all
  ```

- Stages *any new, modified, and deleted* file and subdirectory in *current directory*
  ```
  git add . 
  ```

- Stages *any new, modified file and directory* (excluding deleted ones)
  ```
  git add --ignore-removal .
  ```

- Stages *any modified and deleted file and directory* (excluding new ones)
  ```
  git add -u
  or
  git add -update
  ```

- Stages the changes made in *a file* for next commit.
  ```
  git add filename.extension
  ```

- Stages all changes made in *a directory* for next commit.
  ```
  git add directoryname
  ```

- Multiple stages at the same time
  ```
  git add filename filename directoryname/filename
  ```

- Stages all modified files with a specific extension in a specific directory
  ```
  git add directoryname/*.extension
  ```

<br />

To **commit** staged changes:

```
git commit 
```
A default command-line text editor will open – write **commit message**.

There is a shortcut using `-m`:
```
git commit -m "write commit message"
```

<br />

**About Git Branch**

Git's default branch name is called `master`. Everytime you commit `master` branch points to the last commit.
Ok I get it till here but what?? checkpoints? revision? a pointer? what exacly is branching? 

<br />

To **push** – transfer commits from your local repository to a remote repository:

```
git push origin branchname
```



