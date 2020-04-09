# MusicApp API
A simple modeling system example to manage artists with albums
# Features!
1. Create, update, delete, list Artist.
2. Create, update, delete, list Albums
3. Add album to specific Artist
4. Remove album from specific artist

# About the project!
This sample was developed using:

| Technology | Site |
| ------ | ------ |
| TypeScript | [Web Site](https://www.typescriptlang.org/ "site") |
| Express  | [Web Site](https://expressjs.com/es/ "site") |
| Mongoose| [Web Site](https://mongoosejs.com/ "site") |
| Jest | [Web Site](https://jestjs.io/ "site") |
| NodeJS | [Web Site](https://nodejs.org/es/ "site") |

# Usage !
## Running the service 
Go to folderroot  and execute **npm install** 
after the installation finish execute **npm start**

### Consuming the service using postman
1. Please use the collection **MusicApp.postman_collection.json** attached in the source code, use this collection for consume the service using Postman
2. To execute the different features follow below instructions :

| Feature | Uri | Verb |
| ------ | ------ |------ |
| Get All Albums | [http://localhost:2500//api/v1/albums](http://localhost:2500/api/v1/albums "site") | GET|
| Get album | [http://localhost:2500/api/v1/albums/{id}](http://localhost:2500/api/v1/albums/{id} "site") |GET|
| Create album | [http://localhost:2500/api/v1/albums](http://localhost:2500/api/v1/albums "site") | POST |
| Update album | [http://localhost:2500/api/v1/albums/{id}](http://localhost:2500/api/v1/albums/{id} "site") | UPDATE |
| Delete Album | [http://localhost:2500/api/v1/albums/{id}](http://localhost:2500/api/v1/albums/{id} "site") | DELETE|
| Get All Artists | [http://localhost:2500/api/v1/artists](http://localhost:2500//api/v1/artists "site") | GET|
| Get artist | [http://localhost:2500/api/v1/artists/{id}](http://localhost:2500/api/v1/artists/{id} "site") |GET|
| Create artis | [http://localhost:2500/api/v1/artists](http://localhost:2500/api/v1/artists "site") | POST |
| Add album to Artist | [http://localhost:2500/api/v1/artists/{id}/albums](http://localhost:2500/api/v1/artists/{id}/albums "site") | POST |
| Update artist | [http://localhost:2500/api/v1/artists/{id}](http://localhost:2500/api/v1/artists/{id} "site") | UPDATE |
| Delete artist | [http://localhost:2500/api/v1/artists/{id}](http://localhost:2500/api/v1/artists/{id} "site") | DELETE|
| Delete Album from Artist  | [http://localhost:2500/api/v1/artists/{id}/albums/{id}](http://localhost:2500/api/v1/artists/{id}/albums/{id} "site") | DELETE|
# Documentation
You can find the RestAPI documentation on the follow link:
**[https://documenter.getpostman.com/view/2424147/SzYexGY8](https://documenter.getpostman.com/view/2424147/SzYexGY8 "site")**

# About the architecture
**MusicApp** was developed using the N layer oriented architecture, providing the follow benefits:

1. Other applications will be able to reuse the functionality exposed by your layers.
2. You will be able to distribute your layers over multiple physical tiers. 
3. This can make a very good impact on your application by improving performance (sometimes), scalability and fault tolerance.
4. The maintenance of your application is easier because of the low coupling between layers.
5. Adding more functionality to your application is made easier.
6. Layers make your application more testable.

# Useful commands

**npm run lint** Executes lint verification
**npm test** Executes the Jest tests

# Notes


