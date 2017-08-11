
// create a PlayCanvas application
var canvas = document.getElementById('application');
var app = new pc.Application(canvas, { 
	keyboard: new pc.Keyboard(window)
});
app.start();

// fill the available space at full resolution
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

//Set gravity
app.systems.rigidbody.setGravity(0, -9.8, 0);

//Load scripts
document.write('<script src="movement.js"></script>');

// ensure canvas is resized when window changes size
window.addEventListener('resize', function() {
    app.resizeCanvas();
});

// create floor entity
var floor = new pc.Entity('floor');
floor.addComponent('model', {
    type: 'box'
});

floor.setLocalScale(10,1,10);

floor.addComponent('collision', {
	type: "box",
	halfExtents: new pc.Vec3(5, 0.5, 5)
});

floor.addComponent('rigidbody', {
	type: "static",
	restitution: 0.5
});

//create player
var player = new pc.Entity();
player.addComponent('model', {
  type: 'box'
});

player.addComponent("rigidbody", {
	type: "dynamic",
	mass: 1,
	restitution: 0.5
});

player.addComponent("collision", {
	type: "box",
	halfExtents: new pc.Vec3(0.5, 0.5, 0.5)
});

// create camera entity
var camera = new pc.Entity('camera');
camera.addComponent('camera', {
    clearColor: new pc.Color(0.1, 0.1, 0.1)
});

// create directional light entity
var light = new pc.Entity('light');
light.addComponent('light');

player.addComponent("script");
player.script.create("movement");

// add to hierarchy
app.root.addChild(floor);
app.root.addChild(player);
app.root.addChild(camera);
app.root.addChild(light);

player.setPosition(0, 0, 0);

// set up initial positions and orientations
floor.setPosition(0, 0, 0);
camera.setPosition(0, 15, 15);
camera.setEulerAngles(-45,0,0);
light.setEulerAngles(-45, 0, 0);

// register a global update event
app.on('update', function (deltaTime) {
    
});
