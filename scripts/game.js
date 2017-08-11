
// create a PlayCanvas application
var canvas = document.getElementById('application');
var app = new pc.Application(canvas, { 
	mouse: new pc.Mouse(window),
	keyboard: new pc.Keyboard(window)
});
app.start();

// fill the available space at full resolution
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// ensure canvas is resized when window changes size
window.addEventListener('resize', function() {
    app.resizeCanvas();
});

// create box entity
var cube = new pc.Entity('cube');
cube.addComponent('model', {
    type: 'box'
});

//create player
var player = new pc.Entity();
player.addComponent('model', {
  type: 'box'
});

// create camera entity
var camera = new pc.Entity('camera');
camera.addComponent('camera', {
    clearColor: new pc.Color(0.1, 0.1, 0.1)
});

// create directional light entity
var light = new pc.Entity('light');
light.addComponent('light');

//populate player
player.addComponent("rigidbody", {
	type: "dynamic",
	mass: 1,
	restitution: 0.5
});

player.addComponent("collision", {
	type: "box",
	halfExtents: new pc.Vec3(0.5, 0.5, 0.5)
});

app.systems.script.addComponent(player,
{
scripts:
[
    {url: 'movement.js', name: 'movement'}
]
});

// add to hierarchy
app.root.addChild(cube);
app.root.addChild(player);
app.root.addChild(camera);
app.root.addChild(light);

player.setPosition(0, 0, 2);

// set up initial positions and orientations
cube.setPosition(0, 0, 0);
cube.setLocalScale(10,10,1);
camera.setPosition(0, -10, 10);
camera.setEulerAngles(45,0,0);
light.setEulerAngles(45, 0, 0);

// register a global update event
app.on('update', function (deltaTime) {
    //cube.rotate(10 * deltaTime, 20 * deltaTime, 30 * deltaTime);
});
