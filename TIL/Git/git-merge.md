# Git Merge

## Merge Without A Merge Commit

1. Go to the branch you want to merge: <br>
  `git checkout [branch-name]`
2. Rebase for '[branch-name]' to have all the commits from master: <br>
  `git rebsae master`
3. Now checkout to master branch: <br>
  `git checkout master`
4. Merge without merget commit message: <br>
  `git merge --ff-only [branch-name]`
5. Finally push <br>
  `git push`
or
5. If ever there is a new commit in master while you were doing the above commands:
  `git pull --rebase && git push`