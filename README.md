## Pocketchange
This is a work in progress. I am to create a React App that displays the price of certain cryptocurrencies of your choosing.

#To run in Development:
1. git clone repository
2. npm install inside root
3. npm install inside react-app/
4. npm start inside root (this will start the express backend server port **3001**)
5. npm start inside react-app/ ( this will start the dev build inport 3000)
6. Go to localhost:3000

#To run in Production:
1. git clone repository
2. npm install inside root
3. npm install inside react-app/
6. npm run build inside react-app/
4. npm start inside root (this will start the express backend server port **3001**)
6. Go to localhost:3001

**NOTE** You can change the port for the express server by running PORT=WHAT_EVER_PORT npm start
You must then also change the port number in the proxy section of  /react-app/package.json
