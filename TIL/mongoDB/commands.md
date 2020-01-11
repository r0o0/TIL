# MongoDB Commands in Mongo Shell

## Login

When using mnogoDB atlas:

1. Click on 'connect' button and choose 'Connect with the Mongo shell'
2. Copy the connection string and paste in terminal. It looks somenthing like below:
    ```
    mongo "mongodb+srv://<mongodb-connection-url>" --username <username>
    ```
    It will prompt you for the username password

## Databases

Once logged in, to list all databases enter: __`show dbs`__
```
database list
client
backend
```


In order to work on a database you need to select one: __`use client`__

Now you can work on client database :)

## Collections

To list of collections: __`show collections`__ or `db.getCollectionNames()`
```
collection list
users
posts
featured
trending
```

To create a collection: __`db.createCollection("newCollectionName");`__

