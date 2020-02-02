open command line to the cloned folder and type command npm install to install dependencies

run command npm run vscodePreLaunchTask

then run node dist/server to start server

to check server is started run following command
curl --location --request GET 'http://localhost:3000/api'

Note: you can also use postman to hit the APIs instead of curl

to check task 1, run this command
When this command is run for the first time, Admin user is created then all other users will be normal users
curl --location --request POST 'http://localhost:3000/api/task1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Abhishek",
    "lastName": "Deshmukh"
}'


to check task 2, run this command
curl --location --request DELETE 'http://localhost:3000/api/task2' \
--header 'Content-Type: application/json' \
--data-raw '{
	"category":"Furniture"
}'

to check task 2, run this command
curl --location --request GET 'http://localhost:3000/api/task3'

NOTE: you can find screenshots of output in screenshots folder
