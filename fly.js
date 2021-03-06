var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var dualShock = require('dualshock-controller');

console.log("\n\n Press the 'x' button to take off and the'triangle button to land' ");
/**
* DUALSHOCK Controller Initializaton
* Supports both DUALSHOCK 3 and DUALSHOCK 4
**/
var controller = dualShock({ 
    config: "dualshock4-generic-driver",
    /* if using ds3 uncomment next line and comment line above */
    //config : "dualShock3",
    accelerometerSmoothing: true,
    analogStickSmoothing: false
});

/**
* Event handler for error
**/
controller.on('error', function(data) {
    console.log("error: " + error); 
    
});

/**
* Event handler for x button press
* Makes the drone take off the ground
**/
controller.on('x:press', function(data) {
    console.log("Drone has taken off");
    client.takeoff();
});

/**
* Event handler for right joytick move
* Moves the drone left or right on a hortizontal axis
* Moves the drone forward and backward on a horizontal axis
**/
controller.on('right:move', function(data) {
    //0 to 127 to 255
    var leftOrRight = data.x /255;
    var forwardOrBack = data.y /255;

    if (forwardOrBack>=0 && forwardOrBack <=0.4) {
        console.log("going forward: " + forwardOrBack);
        client.front(forwardOrBack*2);
    }else if (forwardOrBack<=1 && forwardOrBack >=0.6) {
        console.log("going backwards:" + forwardOrBack);
        client.back((forwardOrBack - 0.5)*2);
    }

    if(leftOrRight <= 0.4){
    	var leftRightSpeed = (leftOrRight+0.0001)*2; 
    	console.log("going left");
    	client.left(1);
    }else if(leftOrRight >= 0.6){
    	var leftRightSpeed = (leftOrRight - 0.6)*2;
    	console.log("going right");
    	client.right(1);
    }else{
    	client.stop();
    }
});

/**
* Event handler for right joytick move
* Moves the drone left or right on a hortizontal axis
**/
controller.on('left:move', function(data) {
    //0 to 127 to 255
    var leftOrRight = data.x /255;

    if(leftOrRight <= 0.4){
    	var leftRightSpeed = (leftOrRight+0.0001)*2; 
    	console.log("turning counterClockwise");
    	client.counterClockwise(1);
    }else if(leftOrRight >= 0.6){
    	var leftRightSpeed = (leftOrRight - 0.6)*2;
    	console.log("turning clockwise");
    	client.clockwise(1);
    }else{
    	client.stop();
    }
});

/**
* Event handler for circle button press
* Stops the drone, and makes it hover in place
**/
controller.on('circle:press', function(data) {
    client.stop();
});

/**
* Event handler for left trigger press
* Moves the drone down when pressed
**/
controller.on('l2:press', function(data) {
    console.log("going down");    
    client.down(1);
});

/**
* Event handler for left trigger release
* Stops the drone, and makes it hover in place
**/
controller.on('l2:release',function(data){
	client.stop();
});

/**
* Event handler for right trigger press
* Moves the drone down when pressed
**/
controller.on('r2:press', function(data) {
    console.log("going up");
    client.up(1);
});

/**
* Event handler for right trigger release
* Stops the drone, and makes it hover in place
**/
controller.on('r2:release', function(data) {
    client.stop();
});

/**
* Event handler for triangle button press
* Stops the drone, makes it hover, and lands the drone
**/
controller.on('triangle:press', function(data) {
    client.stop();
    console.log("Drone is landing");
    client.land();
    console.log("Drone has landed");
});