function preloadGame() {
  const progressBar = this.add.graphics();
  const progressBox = this.add.graphics();
  let width = this.cameras.main.width;
  let height = this.cameras.main.height;
  let loadingText = this.make.text({
    x: width / 2,
    y: height / 2 - 50,
    text: "Loading...",
    style: {
      font: "20px monospace",
      fill: "#ffffff",
    },
  });
  loadingText.setOrigin(0.5, 0.5);

  let percentText = this.make.text({
    x: width / 2,
    y: height / 2 - 5,
    text: "0%",
    style: {
      font: "18px monospace",
      fill: "#ffffff",
    },
  });
  percentText.setOrigin(0.5, 0.5);

  let assetText = this.make.text({
    x: width / 2,
    y: height / 2 + 50,
    text: "",
    style: {
      font: "18px monospace",
      fill: "#ffffff",
    },
  });
  assetText.setOrigin(0.5, 0.5);

  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(150, 270, 320, 50);

  this.load.on("progress", function (value) {
    percentText.setText(parseInt(value * 100) + "%");
    progressBar.clear();
    progressBar.fillStyle(0x44ff55, 1);
    progressBar.fillRect(160, 280, 300 * value, 30);
  });

  this.load.on("fileprogress", function (file) {
    assetText.setText("Load resource: " + file.key);
  });
  this.load.on("complete", function () {
    progressBar.destroy();
    progressBox.destroy();
    loadingText.destroy();
    percentText.destroy();
    assetText.destroy();
  });
  this.load.image("lexy", "assets/sprites/lexy.png");
  for (let i = 0; i < 200; i++) {
    this.load.image("lexy" + i, "assets/sprites/lexy.png");
  }
  this.load.image("bg", "assets/sprites/bg1.jpg");
  this.load.image("rectangle", "assets/sprites/rectangle.png");
  this.load.image("lexy", "assets/sprites/lexy.png");
  this.load.image("lexy1", "assets/sprites/lexy1.png");
  this.load.image("topBar", "assets/sprites/topBar.png");
  this.load.image("topBarBag", "assets/sprites/topBarBag.png");
  this.load.image("pinkDress", "assets/sprites/pinkDress.png");
  this.load.image("shortsDress", "assets/sprites/shortsDress.png");
  this.load.image("progressbar", "assets/sprites/progressbar.png");
  this.load.image("progressbar1", "assets/sprites/progressbar1.png");
  this.load.image("progressbar2", "assets/sprites/progressbar2.png");
  this.load.image("progressbar3", "assets/sprites/progressbar3.png");
  this.load.image("progressbar4", "assets/sprites/progressbar4.png");
  this.load.image("bodyshorts", "assets/sprites/bodyshorts.png");
  this.load.image("bodyPinkDress", "assets/sprites/bodyPinkDress.png");
  this.load.image("bodyShortsBlueBag", "assets/sprites/shortsBlueBag.png");
  this.load.image("bodyShortsBraunBag", "assets/sprites/shortsBraunBag.png");
  this.load.image(
    "shortsBraunNecklace",
    "assets/sprites/shortsBraunNecklace.png"
  );
  this.load.image("choker", "assets/sprites/choker.png");
  this.load.image("necklace", "assets/sprites/necklace.png");
  this.load.image("braunBag", "assets/sprites/necklace.png");
  this.load.image("bodyPinkBlueBag", "assets/sprites/bodyPinkBlueBag.png");
  this.load.image("bodyPinkBraunBag", "assets/sprites/bodyPinkBraunBag.png");
  this.load.image("nightclub", "assets/sprites/nightclub.jpg");
  this.load.image("paul", "assets/sprites/paul.png");
  this.load.image("paulSad", "assets/sprites/paulSad.png");
  this.load.image("buttonBg", "assets/sprites/button.png");
  this.load.image("buttonTxt", "assets/sprites/retry.png");
  this.load.image("arrow", "assets/sprites/arrow.png");
  this.load.image("swiper", "assets/sprites/swiper.png");
  this.load.image("shortsDressHover", "assets/sprites/shortsDressHover.png");
  this.load.image("pinkDressHover", "assets/sprites/pinkDressHover.png");
  this.load.image("blueBagHover", "assets/sprites/blueBagHover.png");
  this.load.image("braunBagHover", "assets/sprites/braunHover.png");
  this.load.image("necklaceHover", "assets/sprites/necklaceHover.png");
  this.load.image("choperSpriteHover", "assets/sprites/choperSpriteHover.png");
  this.load.image(
    "makeupLensesSpriteHover",
    "assets/sprites/makeupLensesSpriteHover.png"
  );
  this.load.image("makeupSpriteHover", "assets/sprites/makeupSpriteHover.png");

  this.load.spritesheet(
    "shortsDressSprite",
    "assets/sprites/shortsDressSprite.png",
    { frameWidth: 250, frameHeight: 276 }
  );
  this.load.spritesheet(
    "pinkDressSprite",
    "assets/sprites/pinkDressSprite.png",
    { frameWidth: 250, frameHeight: 276 }
  );
  this.load.spritesheet("braunBagSprite", "assets/sprites/braunBagSprite.png", {
    frameWidth: 250,
    frameHeight: 276,
  });
  this.load.spritesheet("blueBagSprite", "assets/sprites/bluebagsprite.png", {
    frameWidth: 250,
    frameHeight: 276,
  });
  this.load.spritesheet("necklaceSprite", "assets/sprites/necklaceSprite.png", {
    frameWidth: 250,
    frameHeight: 276,
  });
  this.load.spritesheet("chokerSprite", "assets/sprites/chokerSprite.png", {
    frameWidth: 250,
    frameHeight: 276,
  });
  this.load.spritesheet("chokerSprite", "assets/sprites/chokerSprite.png", {
    frameWidth: 250,
    frameHeight: 276,
  });
  this.load.spritesheet(
    "makeupLensesSprite",
    "assets/sprites/makeupLensesSprite.png",
    {
      frameWidth: 250,
      frameHeight: 276,
    }
  );
  this.load.spritesheet("makeupSprite", "assets/sprites/makeupSprite.png", {
    frameWidth: 250,
    frameHeight: 276,
  });
  this.load.atlas(
    "emotions",
    "assets/sprites/emotions.png",
    "assets/sprites/emotions.json"
  );
  this.load.atlas(
    "emotionFlirty",
    "assets/sprites/emotionFlirty.png",
    "assets/sprites/emotionFlirty.json"
  );
  this.load.atlas(
    "heademotions",
    "assets/sprites/newEmotions.png",
    "assets/sprites/newEmotions.json"
  );
  this.load.atlas(
    "rosesSprite",
    "assets/sprites/rosesSprite.png",
    "assets/sprites/rosesSprite.json"
  );
  this.load.atlas(
    "emotionMakeup",
    "assets/sprites/emotionMakeup.png",
    "assets/sprites/emotionMakeup.json"
  );
  this.load.atlas(
    "emotionLensesMakeup",
    "assets/sprites/emotionLensesMakeup.png",
    "assets/sprites/emotionLensesMakeup.json"
  );
  this.load.atlas("man", "assets/sprites/man.png", "assets/sprites/man.json");
  this.load.image("cursorHand", "assets/sprites/hand.png");
}
