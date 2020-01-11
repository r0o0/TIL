# Git Fork Workflow-

### 1. Fork the repository you want to work on.
### 2. Clone the forked repo
  ```
  git clone <the-forked-repo-url>
  ```
### 3. Sync the forked repo with the original repo
  ```
  git remote add upstream <url-of-original-repo>
  ```
### 4. On a collaboration project, always work on a different branch (never on master branch)
  ```
  git checkout -b <branch-name>
  git add <file(s)>
  git commit -m 'commit message'
  git push origin <branch-name>
  ```
### 5. Go to github an create a new pull request
### 6. If you are done working on <branch-name> it's time to clean up
  ```
  git branch -d <branch name>
  git push origin master
  git push --delete origin <branch name>
  ```
### 7. Keep your fork in Sync with the original repo
  Your forked repo doesn't sync automatically with its original.
  ```
  git pull upstream master
  git push origin master
  ```

Now repeat steps 4-7

# Using the fetch method

1. Fork repository you want to work on
2. Clone forked repository
3. Add remote url
`git remote add <name> <url>`
3. Fetch remote branches
`git fetch --all`
4. Create feature branch locally
`git checkout -b <branch-name> --no-track upstream/develop`
Note: --no-track upstream/develop -- means to not track the feature branch in upstream/develop
Tip: To check tracking branches run __`git branch -vv`__
5. git push
Note: A message will appear to set upstream origin. Complete the setting then use `git push` afterwards.