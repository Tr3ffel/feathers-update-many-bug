# feathers-update-many-bug

1. npm run dev
2. POST http://localhost:3032/users | in Postman
```
{
	"email": "test@test.de",
	"password": "1337",
	"name": "Test"
}
```
3. Open http://localhost:3032/ | in browser
4. Open Developer-Tools and click „Login"
5. POST http://localhost:3032/authentication  | in Postman
```
{
	"strategy": "local",
	"email": "test@test.de",
	"password": "1337"
}
```
6. POST http://localhost:3032/some-service (include Beaer Token) | in Postman
7. Look into Developer-Tools
