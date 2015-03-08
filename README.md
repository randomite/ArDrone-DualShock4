Use this script to control an ARDrone 2.0 with a DUALSHOCK 4 Controller.

##Installation:

1. Install the Ar-Drone module from npm:
````bash
npm install ar-drone
````

2. Install the dualshock module from npm:
````bash
npm install dualshock-controller
````

3.Clone my repo onto your computer
````bash
git clone https://github.com/randomite/ArDrone-DualShock4.git
````

##Usage
1. Connect your computer to drone's wifi network
2. Inside the repo that you cloned above:
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
