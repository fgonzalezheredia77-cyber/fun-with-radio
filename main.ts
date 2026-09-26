input.onButtonPressed(Button.A, function () {
    radio.sendString("hola feo jijiji")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("hola feo jijiji")
    serial.writeLine("101010101012455code error")
})
radio.setGroup(1)
basic.forever(function () {
	
})
