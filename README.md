Clone repository on your device 

Open terminal on top level in folder and use command: npm install

Start server by opening termina on top level in  folder and using command: npm run watch   or  json-server --watch data/db.json --port 5000   (this will use json server as backend so posible error will ocure if json server is not installed  posible solution: npm install -g json-server  )

Start project by opening terminal on top level in  folder and using command: npm start

Tech used 

-ReactJs

-Json server   i use json-server for this project as main backend simply to show how my  data schema   folder/data/db.json

-Firebase Realtime firebase and Firestore snapshot   i simply wanted to include them so i can show i have experience working with them  folder/src/utils/api/api.js  
uncomment line of code from 13 to 23 to get data from Firebase and Firestore data will be visible in brower console

-Axios as tool to get data from json server

-Used React Context API as main store so i can avoid prop driling (I know i did not need to use Context API for this app but i used it to show that i know this state menagment)

-Used .env for sensitive data (i know that .env shoud not be commited to github)

-Used React code optimization such as 
--Made components reusable 
--optional chaining operator
--Use null as first state value 
--Most of components are sidefect free

-progessbar will look different in mozzila browser becouse mozila dont support <progess> CSS webkit 

ps I used English and Bosnian language since i dont speak Germina 
