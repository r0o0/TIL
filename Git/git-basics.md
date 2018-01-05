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

To **clone** an existing repo:

```
$ git clone https://github.com/username/repository-name.git
```
The above URL is your **remote origin** – it's where all files are originally downloaded from. <br />
When you clone an existing repository, the '.git' folder already exists in the download of all files in the remote repo to your computer inside a new folder named with the exact same name as the repo.

The **3 states** in Git: <br />

1. Commited <br />
2. Modified <br />
3. Staged <br />

To check for **status** of your project:

```
git status
```
Can check for any modified files

To **stage** modified files:

```
git add . // to add all changes
git add filename.extension // ta add specific change
```

To **commit** staged changes:

```
git commit 
```
A default command-line text editor will open – write **commit message**.

There is a shortcut using `-m`:
```
git commit -m "write commit message"
```






