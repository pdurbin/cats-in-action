var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create
});

var tapMessage;
var tapCount = 0;
var debug;

function preload() {
    game.load.image('background', 'images/white.png');
    game.load.image('happycat', 'images/happycat.png');
    game.load.image('scaredycat', 'images/scaredycat.png');
    game.load.image('sillycat', 'images/sillycat.png');
}

function create() {

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
    logo.anchor.setTo(0.5, 0.5);

    var instructions = game.add.text(0, 0, 'Tap the cat!', {
        fill: 'black'
    });

    tapMessage = game.add.text(220, 0, '', {
        fill: 'black'
    });

    debug = game.add.text(220, 220, '', {
        fill: 'black'
    });

    var happycat = game.add.sprite(0, 40, 'happycat');
    happycat.scale.setTo(0.2, 0.2);
    happycat.inputEnabled = true;
    happycat.events.onInputDown.add(onTap, this);

    var scaredycat = game.add.sprite(100, 80, 'scaredycat');
    scaredycat.scale.setTo(0.2, 0.2);
    scaredycat.inputEnabled = true;
    scaredycat.events.onInputDown.add(onTap, this);

    var sillycat = game.add.sprite(200, 80, 'sillycat');
    sillycat.scale.setTo(0.2, 0.2);
    sillycat.inputEnabled = true;
    sillycat.events.onInputDown.add(onTap, this);
}

// http://phaser.io/docs/2.6.2/Phaser.Events.html#onInputDown
function onTap(catTapped, pointer) {
    //catTapped.x += 10;
    catTapped.scale.x += .01;
    catTapped.scale.y += .01;
    tapCount++;
    if (tapCount > 1) {
        tapMessage.text = "You've tapped " + tapCount + " times!";
    }
    else {
        tapMessage.text = "You've tapped " + tapCount + " time!";
    }
    //debug.text = catTapped.frameName + " at " + pointer.position;
}
