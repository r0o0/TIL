# Git Subtrees

Let's say you have three repositories which you want to group them into one repository:
- RepoA
- RepoB
- RepoC

### 1. Create a new repository and clone it.
Let's call this repository parentRepo.

### 2. Add the remotes of repos you want to put in parentRepo.

```
git remote add repoA git@github.com:username/repoA.git

... add all other repos the same way
```

### 3. Add them to parentRepo using git subtrees

"git subtrees": `git subtree add`

"set folder name": `--prefix=[folder-name]`

"repo you want to add with branch you are pulling code from": `[repo-name] master`


```
git subtree add --prefix=folderA/ repoA master
```


### 4. Push
```
git push
```





