# Install & Setup mongoDB

## Install 'mongodb' with homebrew


### 1. Open terminal & update brew
```
brew update
```

### 2. Open terminal & update brew
```
brew install mongodb
```

### 3. Create 'db' directory where the Mongo data files will go.
```
sudo mkdir -p /data/db
```

### 4. Make sure the `/data/db` directory has the right permissions
```
sudo chown -R `id -un` /data/db

> Enter password: //local pwd
```

### 5. Check for mongodb and run
```
// check mongodb version
mongo --version

// to run Mongo server open a tab in terminal
// (do not close this tab) and type:
mongod
// to stop running Mongo server press
Ctrl + c

// to run Mongo shell, this let's you access data in MongoDB
//  open another tab in terminal and type:
mongo
// to exti Mongo shell type in terminal:
quit()
```
