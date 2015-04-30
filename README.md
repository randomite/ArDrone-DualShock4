Use this script to control an ARDrone 2.0 with a DUALSHOCK 4 Controller.

##Installation:

1.Install the Ar-Drone module from npm:
````bash
npm install ar-drone
````

2.Install the dualshock module from npm:
````bash
npm install dualshock-controller
````

3.Clone my repo onto your computer
````bash
git clone https://github.com/randomite/ArDrone-DualShock4.git
````

##Usage
1. Connect your computer to drone's wifi network
2. Connect your controller to you computer
  1. You can use the usb cable
  2. Or you can use bluetooth
    1. For [mac] (http://www.mactrast.com/2013/10/use-playstation-4-dualshock-4-controller-play-games-mac/)
    2. For [pc] (http://www.gamepur.com/news/12584-how-pair-ps4s-dualshock-4-controller-pc-bluetooth.html) 
    3. For [linux \(ubuntu)] (http://askubuntu.com/questions/427311/how-to-setup-dual-shock-4-controller-with-ubuntu-13-10)
3. Inside the repo that you cloned above:
````bash
node fly.js
````
##DualShock Controls
| Button        | Result           |
| :-------------: |:-------------:|
| x      | takeoff |
| triangle      | land  |
| r2 | increase altitude       |
| l2 | decrease altitude |
| right joystick - right |move right horizontally |
| right joystick - left |move left horizontally |
| right joystick - up |move forward|
| right joystick - down |move backward|
| left joystick - left |move counter-clockwise |
| left joystick - right |move clockwise |

##TODO
1. Video Stream from drone's built in camera
2. Use DualShock touchpad for more controls

Feel free to fork and submit a pull request!
