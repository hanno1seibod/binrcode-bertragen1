function macheEtwas () {
    BinärzahlZahl = 0
    for (let Index = 0; Index <= Binärzahl.length - 1; Index++) {
        basic.pause(1500)
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        if (parseFloat(Binärzahl.substr(Index, 1)) == 0) {
            basic.setLedColor(0x000000)
        } else {
            basic.setLedColor(0xffffff)
        }
    }
    basic.pause(5000)
    basic.setLedColor(0x000000)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    aGedrueckt = 1
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    macheEtwas()
})
function sendeNachricht () {
    aGedrueckt = 0
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    }
    while (aGedrueckt == 0) {
        basic.showIcon(IconNames.ArrowSouthWest)
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
let BinärzahlZahl = 0
let Binärzahl = ""
Binärzahl = "1101011000000011110101110011"
sendeNachricht()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        control.reset()
    }
})
