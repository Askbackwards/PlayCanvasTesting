var Movement = pc.createScript('movement');

Movement.attributes.add('playerSpeed', {
    type: 'number',
    default: .5,
    title: 'Player Speed'
});

// initialize code called once per entity
Movement.prototype.initialize = function() {
    this.force = new pc.Vec3();
};

// update code called every frame
Movement.prototype.update = function(dt) {
    var forward = this.entity.forward;
    var right = this.entity.right;
    var app = this.app;

    x = 0;
    z = 0;
    console.log(this.playerSpeed);
    var keyboard = this.app.keyboard;

    if(keyboard !== null){
        if (keyboard.isPressed(pc.KEY_A)) {
            this.entity.translateLocal(-0.1 * dt * this.playerSpeed,0,0);
        }

        if (keyboard.isPressed(pc.KEY_D)) {
            this.entity.translateLocal(0.1 * dt * this.playerSpeed,0,0);
        }

        if (keyboard.isPressed(pc.KEY_W)) {
            this.entity.translateLocal(0,0,-0.1 * dt * this.playerSpeed);
        }

        if (keyboard.isPressed(pc.KEY_S)) {
            this.entity.translateLocal(0,0,0.1 * dt * this.playerSpeed);
        }

        if (keyboard.isPressed(pc.KEY_SPACE)) {
            this.entity.translateLocal(0,0.1 * dt * this.playerSpeed,0);
        }
    }

};