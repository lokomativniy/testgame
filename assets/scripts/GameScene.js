class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    preloadGame.apply(this, arguments);
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

  //////////////  create   //////////////

  create() {
    this.getBackGround();
    this.getDarkOverlay();
    this.getEmotions();
    this.lexy = this.add.sprite(300, 600, "lexy").setScale(0);
    this.getTweensLexy();
    this.getEmotionsPlay();
    this.timedEvent1 = this.time.delayedCall(2000, this.eventIntro1, [], this);
  }

  ///////////////    intro    //////////////

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

    this.tweens.add({
      targets: this.cursorHand,
      delay: 2000,
      depth: 3,
    });
    this.timedEvent3 = this.time.delayedCall(
      200,
      this.onEventTutorial,
      [],
      this
    );
  }

  //////////////   onEventTutorial  /////////////

  onEventTutorial() {
    this.getDressSprite();
    this.choosenPinkDress();
    this.choosenShortsDress();
  }

  /////////////  ivents with dresses   /////////

  getDressSprite() {
    this.showCursorTimer();
    this.pinkDressSprite = this.add
      .sprite(150, 750, "pinkDressSprite")
      .setScale(0.5)
      .setInteractive();
    this.pinkDressSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.pinkDressSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.shortsDressSprite = this.add
      .sprite(450, 750, "shortsDressSprite")
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
        .sprite(150, 750, "pinkDressHover")
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
        .sprite(450, 750, "shortsDressHover")
        .setScale(0.95);
      this.tweens.add({
        targets: this.shortsDressSprite2,
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
      .sprite(450, 750, "braunBagSprite")
      .setScale(0)
      .setInteractive();
    this.braunBagSprite.on("pointerover", function () {
      this.setFrame(1);
    });
    this.braunBagSprite.on("pointerout", function () {
      this.setFrame(2);
    });
    this.blueBagSprite = this.add
      .sprite(150, 750, "blueBagSprite")
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

  update() {}
}
