![Gopher image](/logo.png)

# T3DSO1104_KEY_REST_INTERACE
Control the buttons and keys from Lecroy T3DSO1104 via NodeJS.
For example you can set a interval to take  snapshot from channel one each minute and save it to a CSV.
Or to trigger the math functions via an ESP8266



# FEATURES
* Simulate button presses via LAN interface
* easy to use call






# SETUP THE SCOPE
* connect the dso with ethernet to you network
* set the ip or enable dhcp (remeber ip)
* set autheficiation/password to none (disbaled)


# SETUP
* clone this repo
* run `npm install` in the `./src` directory
* edit the `./src/server.js` to your needs.
* open `./src/server.js` and change the dso ip in `131 var dso_ip = "<SCOPE IP>";`
* run it via `node ./src/server.js` and show you scope


# USAGE 
To invoke a button press simply call `vpbc("<BUTTON_ID>", function (_ret) { console.log(_ret); })}`.
Replace the BUTTON_ID with the button you want to call.
To get this id you can use the scope webinterface or look at the `vpbc` function on line `13`.

# POSTMAN
To get the http calls i used wireshark. With POSTMAN i checked if calls are working.
I exported (`./DSO.postman_collection.json`) the POSTMAN collection so you can test raound. 


# VIDEO
This example takes a csv snapshot from channel 3 after 3seconds and save it to the usb drive.
[![Alt text](https://img.youtube.com/vi/KHpLuzzywQc/0.jpg)](https://www.youtube.com/watch?v=KHpLuzzywQc)

