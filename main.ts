function macheEtwas () {
    for (let Index = 0; Index <= Binärzahl.length - 1; Index++) {
        if (parseFloat(Binärzahl.substr(Index, 1)) == 0) {
            if (Binärzahl.substr(Index, 1).includes(" ")) {
            	
            } else {
                basic.setLedColor(0x000000)
                music.playTone(523, music.beat(BeatFraction.Sixteenth))
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.pause(1500)
            }
        }
        if (parseFloat(Binärzahl.substr(Index, 1)) == 1) {
            basic.setLedColor(0xffffff)
            music.playTone(523, music.beat(BeatFraction.Sixteenth))
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1500)
        }
    }
    basic.setLedColor(0x000000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    control.reset()
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    aGedrueckt = 1
    basic.pause(2000)
    basic.showNumber(3)
    basic.pause(750)
    basic.showNumber(2)
    basic.pause(750)
    basic.showNumber(1)
    basic.pause(750)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(750)
    macheEtwas()
})
function sendeNachricht () {
    aGedrueckt = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    while (aGedrueckt == 0) {
        basic.showIcon(IconNames.ArrowWest)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
    }
}
let aGedrueckt = 0
let Binärzahl = ""
Binärzahl = "0010100"
sendeNachricht()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (aGedrueckt == 1) {
            control.reset()
        }
    }
})
