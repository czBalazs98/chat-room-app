# Chat Room Application
Chat application where you can chat in different chat rooms. 
To send messages to the chat rooms users have to register an account or 
log in to it if already have one. The application uses Firebase authentication.
It's just a practice project, I didn't deploy it anywhere, but you can run it locally
and test it, maybe it can be a good learning material or example for you.
Check the backend part of the application here: https://github.com/czBalazs98/chat-room-service

## Build
Run `ng build` to build the application.

## To Run the Application:
- Clone the backend application from here: https://github.com/czBalazs98/chat-room-service
- Run the backend wth the help of the instructions in its own README.md
- Run the application with the following command: `ng serve --proxy-config proxy.conf.json`

## Technologies used
- [angular](https://github.com/angular/angular)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) for common styling
- [ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd) for the notification component
- [primeng](https://github.com/primefaces/primeng) for the chips and dialog components
- [rxjs](https://github.com/ReactiveX/rxjs) for websocket communication
- [angularfire](https://github.com/angular/angularfire) for Firebase authentication
