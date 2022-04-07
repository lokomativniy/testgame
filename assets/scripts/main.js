const config = {
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 600,
    height: 900,
  },
  scene: new GameScene(),
};
const game = new Phaser.Game(config);
