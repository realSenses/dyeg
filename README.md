<<<<<<< HEAD
![Imgur](https://i.imgur.com/1jGo96l.png)

True That! is an app designed to unite the fun of playing games with friends and fresh, modern technology. Following in the footsteps of popular games such as Jack Box Party Games, our drive was to create a real-time game that requires very little set up, and no personal information to play! 
=======

The use of gifs in our society has become more popular over the years, conversations have become easier to understand and text messages are given more context with a simple moving image. For this reason, we believe that True That! is able to bring another fun and original game experience for the users. With the use of the Giphy API and Socket.io, users are able to search, select and share gifs during the course of the game they're playing with other connected users . The main game mode that True That! brings to the party consists of the use of themed prompts in which the other participants have to react to with a chosen Gif within the time limit. Overall, True That! is capable of delivering users a great local or online game experience that is fun, funny, and completely easy to handle. 
>>>>>>> 8ad91600e65d95885e2a64776fe610981fdd29a8

## How It Works

True That! utilizes Socket.io, React, MongoDB, and Node.js/Express.js to bring you a real-time gaming experience. Players join a unique game room with a specific key. This ensures that players have a mutual space to play without intereference from outside users. Socket.io allows real-time data flow to show you who is in the room with you as they join.

A judge is selected out of the player pool, and once everyone is in the room, the judge is able to officially start the game. The timer starts when the judge picks a theme for the round, and a prompt is then randomly generated from our prompt database. The players each have 45 seconds to query the Giphy API for a gif that they think the judge will love, and submit it for further examination. At the end of the search session, the gifs are anonymously revealed for all to see. The judge picks their favorite gif for the prompt, and a winner is chosen! Points are divvied accordingly, and a new round is started with the new judge.

## Our site is live at https://truethat.app/

