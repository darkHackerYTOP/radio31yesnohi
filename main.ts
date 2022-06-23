input.onButtonPressed(Button.A, function () {
    radio.sendString("yes")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("no")
})
radio.setGroup(31)
