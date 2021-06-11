let Temp = 0
input.onButtonPressed(Button.A, function () {
    Temp = input.temperature()
    basic.showNumber(Temp)
    music.playMelody("C5 B C5 B C5 B C5 B ", 140)
})
input.onButtonPressed(Button.AB, function () {
    led.plotBarGraph(
    input.temperature(),
    50
    )
    music.playMelody("C5 B A G F E D C ", 140)
})
input.onButtonPressed(Button.B, function () {
    Temp = input.temperature()
    whaleysans.showNumber(Temp)
    music.playMelody("C D C D C D C D ", 140)
})
