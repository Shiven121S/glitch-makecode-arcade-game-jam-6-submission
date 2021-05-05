namespace SpriteKind {
    export const Actor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (Jumps >= 1) {
            mySprite.vy = 0 - Math.sqrt(30000)
            Jumps += -1
        }
    }
})
function Set_Colors () {
    color.setColor(1, color.rgb(15, 42, 63))
    color.setColor(2, color.rgb(32, 57, 79))
    color.setColor(3, color.rgb(246, 214, 189))
    color.setColor(4, color.rgb(195, 163, 138))
    color.setColor(5, color.rgb(153, 117, 119))
    color.setColor(6, color.rgb(129, 98, 113))
    color.setColor(7, color.rgb(78, 73, 95))
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "How To Play") {
        game.setDialogFrame(img`
            6666666666666666666666
            6222222222222222222226
            6122222222222222222216
            6112222222222222222116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            6113333333333333333116
            611ffffffffffffffff116
            61ffffffffffffffffff16
            6ffffffffffffffffffff6
            6666666666666666666666
            `)
        game.showLongText("Move with WASD or the ARROW KEYS. Shoot with SPACE or Z. Glitch and un-glitch time with X or ENTER. Reach the flag to progress. Destroy enemies to collect XP. This can be used to automatically level up, and strengthen you.", DialogLayout.Center)
    } else if (option == "Play") {
        color.FadeToBlack.startScreenEffect(500)
        timer.after(1000, function () {
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            tiles.setSmallTilemap(tilemap`level1`)
            mySprite = sprites.create(img`
                6 6 6 6 5 5 5 5 
                6 2 2 2 2 2 2 5 
                6 2 5 2 2 5 2 5 
                6 2 6 2 2 6 2 5 
                7 2 7 2 2 7 2 6 
                7 2 7 2 2 7 2 6 
                7 2 2 2 2 2 2 6 
                7 7 7 7 6 6 6 6 
                `, SpriteKind.Actor)
            sprites.setDataString(mySprite, "Type", "Player")
            tiles.placeOnRandomTile(mySprite, img`
                            myTile0
                            `)
            controller.moveSprite(mySprite, 65, 0)
            for (let index2 = 0; index2 < 4; index2++) {
                mySprite2 = sprites.create(img`
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
                    `, SpriteKind.Actor)
            }
            mySprite.ay = 500
            textSprite.destroy()
            Jumps = 3
            color.clearFadeEffect()
            Set_Colors()
            Game_Started = true
        })
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Jumps = 0
let textSprite: TextSprite = null
let Game_Started = false
Game_Started = false
Set_Colors()
blockMenu.showMenu(["Play", "How To Play"], MenuStyle.List, MenuLocation.BottomHalf)
scene.setBackgroundColor(2)
blockMenu.setColors(2, 3)
textSprite = textsprite.create("GLITCH", 0, 3)
textSprite.setPosition(55, 18)
textSprite.setMaxFontHeight(10)
game.onUpdate(function () {
    if (Game_Started) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            Jumps = 3
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (controller.B.isPressed()) {
            mySprite.setImage(img`
                6 6 6 6 5 5 5 5 
                6 2 2 2 2 2 2 5 
                6 2 5 2 2 5 2 5 
                6 2 6 2 2 6 2 5 
                7 2 6 2 2 6 2 6 
                7 2 7 2 2 7 2 6 
                7 2 2 2 2 2 2 6 
                7 7 7 7 6 6 6 6 
                `)
            controller.moveSprite(mySprite, 45, 0)
            for (let value of sprites.allOfKind(SpriteKind.Actor)) {
                if (sprites.readDataString(value, "Type") != "Player") {
                    value.setVelocity(0, 0)
                    value.ay = 0
                }
            }
        } else {
            mySprite.setImage(img`
                4 4 4 3 3 3 3 3 
                4 2 2 2 2 2 2 3 
                4 2 4 2 2 4 2 3 
                5 2 5 2 2 5 2 3 
                5 2 5 2 2 5 2 3 
                5 2 6 2 2 6 2 4 
                5 2 2 2 2 2 2 4 
                5 5 5 5 5 4 4 4 
                `)
            controller.moveSprite(mySprite, 65, 0)
            for (let value2 of sprites.allOfKind(SpriteKind.Actor)) {
                if (sprites.readDataString(value2, "Type") != "Player") {
                    value2.setVelocity(sprites.readDataNumber(value2, "VX"), sprites.readDataNumber(value2, "VY"))
                    value2.ay = sprites.readDataNumber(value2, "Gravity")
                }
            }
        }
    }
})
