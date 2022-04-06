// import bg1 from "../assets/sprites/bg1.jpg";

class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
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
    this.load.image("blueBagHover", "assets/sprites/bluebaghover.png");
    this.load.image("braunBagHover", "assets/sprites/braunbaghover.png");
    this.load.image("necklaceHover", "assets/sprites/necklaceHover.png");
    this.load.image(
      "choperSpriteHover",
      "assets/sprites/choperSpriteHover.png"
    );
    this.load.image(
      "makeupLensesSpriteHover",
      "assets/sprites/makeupLensesSpriteHover.png"
    );
    this.load.image(
      "makeupSpriteHover",
      "assets/sprites/makeupSpriteHover.png"
    );

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
    this.load.spritesheet(
      "braunBagSprite",
      "assets/sprites/braunBagSprite.png",
      { frameWidth: 250, frameHeight: 276 }
    );
    this.load.spritesheet("blueBagSprite", "assets/sprites/blueBagSprite.png", {
      frameWidth: 250,
      frameHeight: 276,
    });
    this.load.spritesheet(
      "necklaceSprite",
      "assets/sprites/necklaceSprite.png",
      {
        frameWidth: 250,
        frameHeight: 276,
      }
    );
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

  getCursorHand() {
    this.cursorHand = this.add.sprite(0, 0, "cursorHand").setOrigin(-0.01);
    this.cursorHand.depth = -4;
  }
  getBackGround() {
    this.background = this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    this.background.depth = -4;
  }
  getDarkOverlay() {
    this.darkOverlay = this.add
      .sprite(0, 0, "rectangle")
      .setOrigin(0, 0)
      .setScale(1);
    this.darkOverlay.depth = -3;
  }
  getEmotions() {
    this.emotions = this.add
      .sprite(300, 600, "emotions", "emotion1")
      .setScale(1.3);
  }
  getEmotionsPlay() {
    const frames = this.anims.generateFrameNames("emotions", {
      prefix: "emotion",
      start: 2,
      end: 1,
    });
    this.anims.create({
      key: "emotion",
      frames,
      delay: 500,
      frameRate: 3,
      repeat: 1,
    });
    this.emotions.play("emotion");
  }
  getEmotionsPlay1() {
    const frames = this.anims.generateFrameNames("emotionFlirty", {
      prefix: "emotion",
      start: 2,
      end: 1,
    });
    this.anims.create({
      key: "emo",
      frames,
      delay: 200,
      frameRate: 3,
      repeat: 1,
    });
    this.emotionFlirty.play("emo");
  }
  getEmotionsPlay2() {
    const frames = this.anims.generateFrameNames("emotionFlirty", {
      prefix: "emotion",
      start: 3,
      end: 3,
    });
    this.anims.create({
      key: "emot",
      frames,
      delay: 0,
      frameRate: 3,
      repeat: 1,
    });
    this.emotionFlirty.play("emot");
  }

  getHeadEmotionsPlay() {
    this.heademotions = this.add
      .sprite(250, 265, "heademotions", "heademotion1")
      .setScale(1.08);
    this.heademotions.depth = -1;
    const frames = this.anims.generateFrameNames("heademotions", {
      prefix: "heademotion",
      start: 1,
      end: 2,
    });
    this.anims.create({
      key: "heademotion",
      frames,
      delay: 200,
      frameRate: 3,
      repeat: 1,
    });
    this.heademotions.play("heademotion");
  }
  getRosesPlay() {
    this.rosesSprite = this.add
      .sprite(300, 400, "rosesSprite", "roses1")
      .setScale(1.3);
    this.rosesSprite.depth = 0;
    const frames = this.anims.generateFrameNames("rosesSprite", {
      prefix: "roses",
      start: 1,
      end: 12,
    });
    this.anims.create({
      key: "roses",
      frames,
      frameRate: 5,
      repeat: 0,
      onComplete: () => {
        frames.destroy();
      },
    });
    this.rosesSprite.play("roses");
  }
  getTweensLexy() {
    this.tweens.add({
      targets: [this.lexy, this.lexy1],
      scale: 1,
      ease: "Liner",
      duration: 100,
    });
  }
  getEmotionMakeupPlay() {
    this.emotionMakeup = this.add
      .sprite(250, 265, "emotionMakeup", "makeup1")
      .setScale(1.07);
    this.emotionMakeup.depth = -1;
    this.heademotions.destroy();
    const frames = this.anims.generateFrameNames("emotionMakeup", {
      prefix: "makeup",
      start: 2,
      end: 1,
    });
    this.anims.create({
      key: "makeup",
      frames,
      delay: 200,
      frameRate: 3,
      repeat: 1,
    });
    this.emotionMakeup.play("makeup");
  }
  getEmotionLensesMakeup() {
    this.emotionLensesMakeup = this.add
      .sprite(250, 265, "emotionLensesMakeup", "makeup1")
      .setScale(1.07);
    this.emotionLensesMakeup.depth = -1;
    this.heademotions.destroy();
    const frames = this.anims.generateFrameNames("emotionLensesMakeup", {
      prefix: "makeup",
      start: 2,
      end: 1,
    });
    this.anims.create({
      key: "makeup",
      frames,
      delay: 200,
      frameRate: 3,
      repeat: 1,
    });
    this.emotionLensesMakeup.play("makeup");
  }
  getCursor() {
    const hand = this.add.sprite(500, 800, "cursorHand");
    hand.depth = 2;
    this.tweens.add({
      targets: hand,
      x: 200,
      duration: 1000,
      ease: "Power",
      yoyo: true,
      onComplete: () => {
        hand.destroy();
      },
    });
  }
  showCursorTimer() {
    this.cursorTimer = this.time.addEvent({
      delay: 5000,
      callback: onEvent,
      callbackScope: this,
      loop: true,
    });
    function onEvent() {
      this.getCursor();
    }
  }

  ////////  create   ///////

  create() {
    this.getBackGround();
    this.getDarkOverlay();
    this.getEmotions();
    this.lexy = this.add.sprite(300, 600, "lexy").setScale(0);
    this.getTweensLexy();
    this.getEmotionsPlay();
    this.timedEvent1 = this.time.delayedCall(2000, this.eventIntro1, [], this);
  }

  /////////////////////////////

  eventIntro1() {
    this.lexy.destroy();
    this.emotions.destroy();
    this.emotionFlirty = this.add
      .sprite(300, 600, "emotionFlirty", "emotion1")
      .setScale(1.3);
    this.getEmotionsPlay1();
    this.lexy1 = this.add.sprite(300, 600, "lexy1").setScale(0);
    this.getTweensLexy();
    this.timedEvent2 = this.time.delayedCall(2000, this.eventIntro2, [], this);
  }

  eventIntro2() {
    this.lexy1.destroy();
    this.getEmotionsPlay2();
    this.tweens.add({
      targets: this.emotionFlirty,
      scale: 1.2,
      ease: "liner",
      duration: 250,
    });
    this.topBar = this.add.sprite(300, 30, "topBar").setScale(0);
    this.getDressSprite();

    this.tweens.add({
      targets: this.cursorHand,
      delay: 2000,
      depth: 3,
    });
    this.timedEvent3 = this.time.delayedCall(
      2000,
      this.onEventTutorial,
      [],
      this
    );
  }

  //////////////   onEventTutorial  /////////////

  onEventTutorial() {
    this.choosenPinkDress();
    this.choosenShortsDress();
  }

  /////////////  ivents with dresses   /////////

  getDressSprite() {
    this.showCursorTimer();
    this.pinkDressSprite = this.add
      .sprite(150, 750, "pinkDressSprite", 2)
      .setScale(0.5)
      .setInteractive();
    this.pinkDressSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.pinkDressSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.shortsDressSprite = this.add
      .sprite(450, 750, "shortsDressSprite", 2)
      .setScale(0.5)
      .setInteractive();
    this.shortsDressSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.shortsDressSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.tweens.add({
      targets: [this.shortsDressSprite, this.pinkDressSprite, this.topBar],
      scale: 1,
      ease: "Liner",
      duration: 250,
    });
  }

  choosenDress() {
    this.cursorTimer.destroy();
    this.getRosesPlay();
    this.getEmotionsPlay1();
    this.emotionFlirty.destroy();
    this.getHeadEmotionsPlay();
    this.darkOverlay.destroy();
    this.topBar.destroy();
    this.progressbar1 = this.add.sprite(300, 30, "progressbar1");
    this.getBagsSprite();
    this.choosenBlueBag();
    this.choosenBraunBag();
  }

  choosenPinkDress() {
    this.pinkDressSprite.on("pointerdown", () => {
      this.choosenDress();
      this.bodyPinkDress = this.add
        .sprite(297, 615, "bodyPinkDress")
        .setScale(1.2);
      this.bodyPinkDress.depth = -2;
      this.pinkDressSprite.destroy();
      this.shortsDressSprite.destroy();
      this.pinkDressSprite2 = this.add
        .sprite(150, 750, "pinkDressHover", 2)
        .setScale(0.95);
      this.tweens.add({
        targets: this.pinkDressSprite2,
        scale: 0.949,
        duration: 1200,
        onComplete: () => {
          this.shortsDressSprite.destroy();
          this.pinkDressSprite2.destroy();
        },
      });
    });
  }

  choosenShortsDress() {
    this.shortsDressSprite.on("pointerdown", () => {
      this.choosenDress();
      this.bodyshortsdress = this.add
        .sprite(293, 615, "bodyshorts")
        .setScale(1.19);
      this.bodyshortsdress.depth = -2;
      this.shortsDressSprite.destroy();
      this.pinkDressSprite.destroy();
      this.shortsDressSprite2 = this.add
        .sprite(450, 750, "shortsDressHover", 2)
        .setScale(0.95);
      this.tweens.add({
        targets: this.shortsDressSprite,
        scale: 0.949,
        duration: 1200,
        onComplete: () => {
          this.pinkDressSprite.destroy();
          this.shortsDressSprite2.destroy();
        },
      });
    });
  }

  //////////////   ivents with bags    ////////////

  getBagsSprite() {
    this.showCursorTimer();
    this.braunBagSprite = this.add
      .sprite(450, 750, "braunBagSprite", "bluebag1")
      .setScale(0)
      .setInteractive();
    this.braunBagSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.braunBagSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.blueBagSprite = this.add
      .sprite(150, 750, "blueBagSprite", "braunbag1")
      .setScale(0)
      .setInteractive();
    this.blueBagSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.blueBagSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.tweens.add({
      targets: [this.braunBagSprite, this.blueBagSprite],
      delay: 1500,
      scale: 1,
      ease: "Liner",
      duration: 500,
    });
  }

  choosenBags() {
    this.cursorTimer.destroy();
    this.getRosesPlay();
    this.heademotions.destroy();
    this.getHeadEmotionsPlay();
    this.progressbar1.destroy();
    this.progressbar2 = this.add.sprite(300, 30, "progressbar2");
    this.getAccessoriesSprite();
    this.choosenNecklace();
    this.choosenChoker();
    this.container.depth = -2;
  }

  choosenBlueBag() {
    this.blueBagSprite.on("pointerdown", () => {
      if (this.bodyshortsdress) {
        this.bodyshortsdress.destroy();
        this.bodyShortsBlueBag = this.add
          .sprite(295, 606, "bodyShortsBlueBag")
          .setScale(1.221);
        this.container = this.add.container(0, 0, this.bodyShortsBlueBag);
      }
      if (this.bodyPinkDress) {
        this.bodyPinkDress.destroy();
        this.braunBagSprite.destroy();
        this.bodyPinkBlueBag = this.add
          .sprite(297, 605, "bodyPinkBlueBag")
          .setScale(1.221);
        this.container = this.add.container(0, 0, this.bodyPinkBlueBag);
      }

      this.blueBagSprite.destroy();
      this.blueBagSprite2 = this.add
        .sprite(150, 750, "blueBagHover")
        .setScale(0.95);
      this.tweens.add({
        targets: this.blueBagSprite2,
        scale: 0.949,
        ease: "liner",
        duration: 1200,
        onComplete: () => {
          this.blueBagSprite2.destroy();
          this.braunBagSprite.destroy();
        },
      });
      this.choosenBags();
    });
  }

  choosenBraunBag() {
    this.braunBagSprite.on("pointerdown", () => {
      if (this.bodyshortsdress) {
        this.bodyshortsdress.destroy();
        this.bodyShortsBraunBag = this.add
          .sprite(293, 615, "bodyShortsBraunBag")
          .setScale(1.19);
        this.container = this.add.container(0, 0, this.bodyShortsBraunBag);
      }
      if (this.bodyPinkDress) {
        this.bodyPinkDress.destroy();
        this.bodyPinkBraunBag = this.add
          .sprite(297, 615, "bodyPinkBraunBag")
          .setScale(1.2);
        this.container = this.add.container(0, 0, this.bodyPinkBraunBag);
      }
      this.braunBagSprite.destroy();
      this.blueBagSprite.destroy();
      this.braunBagSprite2 = this.add
        .sprite(450, 750, "braunBagHover")
        .setScale(0.95);
      this.tweens.add({
        targets: this.braunBagSprite2,
        scale: 0.949,
        ease: "liner",
        duration: 1200,
        onComplete: () => {
          this.blueBagSprite.destroy();
          this.braunBagSprite2.destroy();
        },
      });
      this.choosenBags();
    });
  }

  //////////   with accessories  /////////////

  getAccessoriesSprite() {
    this.showCursorTimer();
    this.necklaceSprite = this.add
      .sprite(450, 750, "necklaceSprite")
      .setScale(0)
      .setInteractive();
    this.necklaceSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.necklaceSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.chokerSprite = this.add
      .sprite(150, 750, "chokerSprite")
      .setScale(0)
      .setInteractive();
    this.chokerSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.chokerSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.tweens.add({
      targets: [this.necklaceSprite, this.chokerSprite],
      delay: 1500,
      scale: 1,
      ease: "Liner",
      duration: 500,
    });
  }

  choosenAccessories() {
    this.cursorTimer.destroy();
    this.getRosesPlay();
    this.heademotions.destroy();
    this.getHeadEmotionsPlay();
    this.progressbar2.destroy();
    this.progressbar3 = this.add.sprite(300, 30, "progressbar3");
    this.getMakeupSprite();
    this.choosenRegularMakeup();
    this.choosenLensesMakeup();
    this.container.depth = -2;
  }

  choosenNecklace() {
    this.necklaceSprite.on("pointerdown", () => {
      this.necklace = this.add.sprite(300, 320, "necklace").setScale(1.1);
      if (this.bodyShortsBlueBag) {
        this.container = this.add.container(0, 0, [
          this.bodyShortsBlueBag,
          this.necklace,
        ]);
      }
      if (this.bodyShortsBraunBag) {
        this.container = this.add.container(0, 0, [
          this.bodyShortsBraunBag,
          this.necklace,
        ]);
      }
      if (this.bodyPinkBlueBag) {
        this.container = this.add.container(0, 0, [
          this.bodyPinkBlueBag,
          this.necklace,
        ]);
      }
      if (this.bodyPinkBraunBag) {
        this.container = this.add.container(0, 0, [
          this.bodyPinkBraunBag,
          this.necklace,
        ]);
      }
      this.necklaceSprite.destroy();
      this.chokerSprite.destroy();
      this.necklaceSprite2 = this.add
        .sprite(450, 750, "necklaceHover")
        .setScale(0.95);
      this.tweens.add({
        targets: this.necklaceSprite2,
        scale: 0.949,
        ease: "liner",
        duration: 1200,
        onComplete: () => {
          this.necklaceSprite2.destroy();
          this.chokerSprite.destroy();
        },
      });
      this.choosenAccessories();
    });
  }

  choosenChoker() {
    this.chokerSprite.on("pointerdown", () => {
      this.choker = this.add.sprite(302, 276, "choker").setScale(0.6);
      if (this.bodyShortsBlueBag) {
        this.container = this.add.container(0, 0, [
          this.bodyShortsBlueBag,
          this.choker,
        ]);
      }
      if (this.bodyShortsBraunBag) {
        this.container = this.add.container(0, 0, [
          this.bodyShortsBraunBag,
          this.choker,
        ]);
      }
      if (this.bodyPinkBlueBag) {
        this.container = this.add.container(0, 0, [
          this.bodyPinkBlueBag,
          this.choker,
        ]);
      }
      if (this.bodyPinkBraunBag) {
        this.container = this.add.container(0, 0, [
          this.bodyPinkBraunBag,
          this.choker,
        ]);
      }
      this.chokerSprite.destroy();
      this.necklaceSprite.destroy();
      this.chokerSprite2 = this.add
        .sprite(150, 750, "choperSpriteHover")
        .setScale(0.95);
      this.tweens.add({
        targets: this.chokerSprite2,
        scale: 0.949,
        ease: "liner",
        duration: 1200,
        onComplete: () => {
          this.necklaceSprite.destroy();
          this.chokerSprite2.destroy();
        },
      });
      this.choosenAccessories();
    });
  }

  //////////   ivents with makeup   //////////

  getMakeupSprite() {
    this.showCursorTimer();
    this.makeupLensesSprite = this.add
      .sprite(450, 750, "makeupLensesSprite")
      .setScale(0)
      .setInteractive();
    this.makeupLensesSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.makeupLensesSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.makeupSprite = this.add
      .sprite(150, 750, "makeupSprite")
      .setScale(0)
      .setInteractive();
    this.makeupSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.makeupSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.tweens.add({
      targets: [this.makeupLensesSprite, this.makeupSprite],
      delay: 1500,
      scale: 1,
      ease: "Liner",
      duration: 500,
    });
  }

  choosenMakeup() {
    this.cursorTimer.destroy();
    this.heademotions.destroy();
    this.getRosesPlay();
    this.progressbar3.destroy();
    this.progressbar4 = this.add.sprite(300, 30, "progressbar4");
    this.eventfinalScene = this.time.delayedCall(
      3000,
      this.getFinalScene,
      [],
      this
    );
  }

  choosenRegularMakeup() {
    this.makeupSprite.on("pointerdown", () => {
      this.getEmotionMakeupPlay();
      this.makeupSprite.destroy();
      this.makeupLensesSprite.destroy();
      this.makeupSprite2 = this.add
        .sprite(150, 750, "makeupSpriteHover")
        .setScale(0.95);
      this.tweens.add({
        targets: this.makeupSprite2,
        scale: 0.949,
        ease: "liner",
        duration: 1200,
        onComplete: () => {
          this.makeupLensesSprite.destroy();
          this.makeupSprite2.destroy();
          this.container.add(this.emotionMakeup);
        },
      });
      this.choosenMakeup();
    });
  }

  choosenLensesMakeup() {
    this.makeupLensesSprite.on("pointerdown", () => {
      this.getEmotionLensesMakeup();
      this.makeupLensesSprite.destroy();
      this.makeupSprite.destroy();
      this.makeupLensesSprite2 = this.add
        .sprite(450, 750, "makeupLensesSpriteHover")
        .setScale(0.95);
      this.tweens.add({
        targets: this.makeupLensesSprite2,
        scale: 0.949,
        ease: "liner",
        duration: 1200,
        onComplete: () => {
          this.makeupSprite.destroy();
          this.makeupLensesSprite2.destroy();
          this.container.add(this.emotionLensesMakeup);
        },
      });
      this.choosenMakeup();
    });
  }

  /////////////    final  ////////////

  getFinalScene() {
    this.progressbar4.destroy();
    this.nightClub = this.add.sprite(0, 0, "nightclub").setOrigin(0, 0);
    this.nightClub.depth = -4;
    if (
      this.container.exists(this.bodyShortsBlueBag) ||
      this.container.exists(this.bodyShortsBraunBag)
    ) {
      this.getLoseScene();
    }
    if (
      this.container.exists(this.bodyPinkBlueBag) ||
      this.container.exists(this.bodyPinkBraunBag)
    ) {
      this.getAmazingScene();
    }
  }

  getLoseScene() {
    this.getSadMan();
    if (this.container.exists(this.emotionLensesMakeup)) {
      this.emotionLensesMakeup1 = this.add
        .sprite(250, 265, "emotionLensesMakeup", "makeup1")
        .setScale(1.07);
      const frames = this.anims.generateFrameNames("emotionLensesMakeup", {
        prefix: "makeup",
        start: 3,
        end: 3,
      });
      this.anims.create({
        key: "make",
        frames,
        delay: 3000,
        frameRate: 3,
        repeat: 1,
      });
      this.emotionLensesMakeup1.play("make");
      this.container.add(this.emotionLensesMakeup1).setScale(0.9).x = -400;
      this.getTweensContainer();
    }
    if (this.container.exists(this.emotionMakeup)) {
      this.emotionMakeup1 = this.add
        .sprite(250, 265, "emotionMakeup", "makeup1")
        .setScale(1.07);
      const frames = this.anims.generateFrameNames("emotionMakeup", {
        prefix: "makeup",
        start: 3,
        end: 3,
      });
      this.anims.create({
        key: "make",
        frames,
        delay: 3000,
        frameRate: 3,
        repeat: 1,
      });
      this.emotionMakeup1.play("make");
      this.container.add(this.emotionMakeup1).setScale(0.9).x = -400;
      this.getTweensContainer();
    }
  }

  getAmazingScene() {
    this.getJoyMan();
    if (this.container.exists(this.emotionLensesMakeup)) {
      this.emotionLensesMakeup1 = this.add
        .sprite(250, 265, "emotionLensesMakeup", "makeup1")
        .setScale(1.07);
      const frames = this.anims.generateFrameNames("emotionLensesMakeup", {
        prefix: "makeup",
        start: 2,
        end: 2,
      });
      this.anims.create({
        key: "make",
        frames,
        delay: 3000,
        frameRate: 3,
        repeat: 1,
      });
      this.emotionLensesMakeup1.play("make");
      this.container.add(this.emotionLensesMakeup1).setScale(0.9).x = -400;
      this.getTweensContainer();
    }
    if (this.container.exists(this.emotionMakeup)) {
      this.emotionMakeup1 = this.add
        .sprite(250, 265, "emotionMakeup", "makeup1")
        .setScale(1.07);
      const frames = this.anims.generateFrameNames("emotionMakeup", {
        prefix: "makeup",
        start: 2,
        end: 2,
      });
      this.anims.create({
        key: "make",
        frames,
        delay: 3000,
        frameRate: 3,
        repeat: 1,
      });
      this.emotionMakeup1.play("make");
      this.container.add(this.emotionMakeup1).setScale(0.9).x = -400;
      this.getTweensContainer();
    }
  }

  getMan() {
    this.man = this.add.sprite(350, 460, "man", "man1").setScale(1.05);
    this.man.depth = -3;
    this.man.x = 700;
    this.tweens.add({
      targets: this.man,
      x: 350,
      ease: "Power1",
      duration: 2000,
      delay: 200,
    });
  }

  getSadMan() {
    this.paulSad = this.add.sprite(300, 400, "paulSad").setScale(0);
    this.getMan();
    const frames = this.anims.generateFrameNames("man", {
      prefix: "man",
      start: 3,
      end: 3,
    });
    this.anims.create({
      key: "man",
      frames,
      delay: 2000,
      frameRate: 3,
      repeat: 1,
    });
    this.man.play("man");
    this.tweens.add({
      targets: this.paulSad,
      duration: 200,
      ease: "Power1",
      scale: 1,
      delay: 2000,
      completeDelay: 3000,
      onComplete: () => {
        this.getButtonRetry();
      },
    });
  }

  getJoyMan() {
    this.paul = this.add.sprite(300, 400, "paul").setScale(0);
    this.getMan();
    const frames = this.anims.generateFrameNames("man", {
      prefix: "man",
      start: 2,
      end: 2,
    });
    this.anims.create({
      key: "man",
      frames,
      delay: 2000,
      frameRate: 3,
      repeat: 1,
    });

    this.man.play("man");
    this.tweens.add({
      targets: this.paul,
      duration: 200,
      ease: "Power1",
      scale: 1,
      delay: 2000,
      completeDelay: 3000,
      onComplete: () => {
        this.getSwipetoPlay();
        this.getArrow();
      },
    });
  }

  getButtonRetry() {
    this.darkOverlay = this.add
      .sprite(0, 0, "rectangle")
      .setOrigin(0, 0)
      .setInteractive();
    this.darkOverlay.on("pointerup", this.openLink, this);
    this.buttonBg = this.add.sprite(300, 400, "buttonBg").setInteractive();
    this.text = this.add.sprite(300, 400, "buttonTxt").setScale(1.1);
    this.containerButton = this.add.container(0, 0, [
      (this.buttonBg, this.text),
    ]);
    this.tweens.add({
      targets: this.text,
      alpha: 0.5,
      duration: 1000,
      ease: "power",
      yoyo: true,
      repeat: -1,
    });
    this.buttonBg.on("pointerover", function () {
      this.setTint(0x99ff99);
    });
    this.buttonBg.on("pointerout", function () {
      this.clearTint();
    });
    this.buttonBg.on("pointerup", this.openLink, this);
  }

  getSwipetoPlay() {
    this.background = this.add
      .sprite(0, 0, "bg")
      .setOrigin(0, 0)
      .setInteractive();
    this.background.on("pointerup", this.openLink, this);
    this.buttonBg = this.add.sprite(300, 400, "buttonBg").setInteractive();
    this.swiper = this.add.sprite(300, 400, "swiper").setScale(1.1);
    this.swiperContainer = this.add.container(0, 0, [
      (this.buttonBg, this.swiper),
    ]);
    this.tweens.add({
      targets: this.swiper,
      alpha: 0.5,
      duration: 1000,
      ease: "power",
      yoyo: true,
      repeat: -1,
    });
    this.buttonBg.on("pointerover", function () {
      this.setTint(0x99ff99);
    });
    this.buttonBg.on("pointerout", function () {
      this.clearTint();
    });
    this.buttonBg.on("pointerup", this.openLink, this);
  }

  getTweensContainer() {
    this.tweens.add({
      targets: this.container,
      x: -50,
      ease: "Power1",
      duration: 2000,
      delay: 200,
    });
  }

  getTweensMan() {
    this.tweens.add({
      targets: this.man,
      x: 350,
      ease: "Power1",
      duration: 2000,
      delay: 200,
    });
  }

  openLink() {
    const url = "https://apps.apple.com/us/app/id1491717191";
    const s = window.open(url, "_blank");
    window.location.href = url;
    if (s && s.focus) {
      s.focus();
    } else if (!s) {
    }
  }

  getArrow() {
    this.arrow = this.add.sprite(250, 500, "arrow").setScale(2);
    this.tweens.add({
      targets: this.arrow,
      x: 350,
      alpha: 5,
      ease: "Power1",
      duration: 500,
      yoyo: true,
      repeat: -1,
    });
  }

  // resize(width, height) {
  //   this.background.height = height;
  //   this.background.width = width;
  // }
  // scaleSprite(
  //   sprite,
  //   availableSpaceWidth,
  //   availableSpaceHeight,
  //   padding,
  //   scaleMultiplier
  // ) {
  //   this.scale = this.getSpriteScale(
  //     sprite._frame.width,
  //     sprite._frame.height,
  //     availableSpaceWidth,
  //     availableSpaceHeight,
  //     padding
  //   );
  //   sprite.scale.x = scale * scaleMultiplier;
  //   sprite.scale.y = scale * scaleMultiplier;
  // }
  // getSpriteScale(
  //   spriteWidth,
  //   spriteHeight,
  //   availableSpaceWidth,
  //   availableSpaceHeight,
  //   minPadding
  // ) {
  //   this.ratio = 1;
  //   this.currentDevicePixelRatio = window.devicePixelRatio;

  //   this.widthRatio =
  //     (spriteWidth * currentDevicePixelRatio + 2 * minPadding) /
  //     availableSpaceWidth;
  //   this.heightRatio =
  //     (spriteHeight * currentDevicePixelRatio + 2 * minPadding) /
  //     availableSpaceHeight;
  //   if (widthRatio > 1 || heightRatio > 1) {
  //     ratio = 1 / Math.max(widthRatio, heightRatio);
  //   }
  //   return ratio * currentDevicePixelRatio;
  // }

  update() {
    // this.cursorHand.x = game.input.mousePointer.x;
    // this.cursorHand.y = game.input.mousePointer.y;
  }
}
