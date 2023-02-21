document.addEventListener('deviceready', function () {
  console.log('Device is ready!');
  console.log('Phaser Version: ' + phaser.VERSION);
  var config = {
    type: phaser.WEBGL,
    parent: 'game',
    scene: {
      preload: preload,
      create: create,
    },
  };

  var game = new phaser.Game(config);

  function preload() {
    this.load.atlas('sheet', 'img/sheet.png', 'img/sheet.json');
  }

  function create() {
    this.anims.create({
      key: 'plane',
      repeat: -1,
      frameRate: 10,
      frames: this.anims.generateFrameNames('sheet', {
        start: 1,
        end: 3,
        prefix: 'planeBlue',
        suffix: '.png',
      }),
    });

    var plane = this.add.sprite(400, 300, 'sheet').play('plane');

    this.add.image(0, 0, 'sheet', 'background.png').setOrigin(0);
    var plane = this.add.sprite(400, 300, 'sheet').play('plane');
  }
});
