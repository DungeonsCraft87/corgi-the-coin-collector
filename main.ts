controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myCorg.maxMoveVelocity += 30
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myCorg.verticalMovement()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.setGameOverEffect(false, effects.bubbles)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myCorg.verticalMovement(false)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myCorg.maxMoveVelocity += -30
})
info.onScore(50, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Spike: Sprite = null
let Coin: Sprite = null
let myCorg: Corgio = null
myCorg = corgio.create(SpriteKind.Player)
myCorg.addToScript("bark")
myCorg.horizontalMovement()
myCorg.updateSprite()
scene.cameraFollowSprite(myCorg)
tiles.setCurrentTilemap(tilemap`level10`)
scene.setBackgroundColor(10)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    Coin = sprites.create(assets.image`myImage3`, SpriteKind.Projectile)
    animation.runImageAnimation(
    Coin,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 d d d 5 5 f . . . 
        . . f 5 5 5 5 4 4 4 5 5 5 f . . 
        . . f 5 d 4 5 5 5 5 5 5 5 f . . 
        . . f 5 d 4 5 5 5 5 5 5 5 f . . 
        . . f 5 d 4 5 5 5 5 5 5 5 f . . 
        . . f 5 d 4 5 5 5 5 5 5 5 f . . 
        . . f 5 d 4 5 5 5 5 5 5 5 f . . 
        . . f 5 d 4 5 5 5 5 5 5 5 f . . 
        . . f 5 d 4 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 4 4 5 5 5 5 f . . 
        . . . f 5 5 5 d d 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 d 5 f . . . . 
        . . . f 5 5 5 5 5 4 5 5 f . . . 
        . . . f 5 d 4 5 5 5 5 5 f . . . 
        . . . f 5 d 4 5 5 5 5 5 f . . . 
        . . . f 5 d 4 5 5 5 5 5 f . . . 
        . . . f 5 d 4 5 5 5 5 5 f . . . 
        . . . f 5 d 4 5 5 5 5 5 f . . . 
        . . . f 5 d 4 5 5 5 5 5 f . . . 
        . . . f 5 d 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 4 5 5 f . . . 
        . . . . f 5 5 5 5 d 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    Spike = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
    tiles.placeOnTile(Spike, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
info.setLife(20)
info.startCountdown(300)
music.play(music.createSong(assets.song`mySong1`), music.PlaybackMode.UntilDone)
