input.onButtonPressed(Button.A, function () {
    callibot.motor(KMotor.beide, KDir.vorwärts, 100)
})
input.onButtonPressed(Button.B, function () {
    callibot.motorStop(KMotor.beide, KStop.Frei)
})
basic.forever(function () {
    basic.setLedColor(Colors.Red)
    basic.pause(500)
    basic.setLedColor(Colors.Off)
    basic.pause(500)
    basic.setLedColor(Colors.Yellow)
    basic.pause(500)
    basic.setLedColor(Colors.Off)
    basic.pause(500)
})
control.inBackground(function () {
	
})
