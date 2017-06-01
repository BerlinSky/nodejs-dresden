## TODO's:

### Set up the basic express server
### Add dynamic routes
### Utilize Template engine
### Serve Serve static files
### Implement Update and Delete features 
### Add error handling
### Handling file downloading
### Render JSON data
### Organize routes
### Use stream and Middleware
### Integrate mongodb
### Use mongodb virtual properties

### Steps: 
1. Reimport the data file without the "virtual" fields
```
> mongoimport --db test --collection users --drop --file user_list.json
```



1. Install mongodb package 
```
npm i mongodb -S
```
2. Install mongoose package 
```
npm i mongoose -S
```
3. Start the local mongodb instance (installed separately)
```
> mongo
```
4. Import data into the mongodb
```
> mongoimport --db test --collection users --drop --file user_list.json
```
5. Create db.js to manage db connection
6. Update server.js to use db connection
7. Update user-router.js to use mongoose features


