input.onGesture(Gesture.Shake, function () {
    Icono = 0
    if (Icono == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (Icono == 1) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (Icono == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let Icono = 0
basic.showString("Hello Wordl")
basic.showIcon(IconNames.Heart)
basic.showNumber(10)
basic.pause(100)
basic.showNumber(9)
basic.pause(100)
basic.showNumber(8)
basic.pause(100)
basic.showNumber(7)
basic.pause(100)
basic.showNumber(6)
basic.pause(100)
basic.showNumber(5)
basic.pause(100)
basic.showNumber(4)
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
basic.showNumber(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Heart)
    } else {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showIcon(IconNames.Heart)
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showIcon(IconNames.Heart)
            } else {
                basic.clearScreen()
            }
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -20) {
        basic.showString("<")
    }
    if (input.acceleration(Dimension.X) > 20) {
        basic.showString(">")
    }
    if (input.acceleration(Dimension.Y) > 20) {
        basic.showString("v")
    }
    if (input.acceleration(Dimension.Y) < -20) {
        basic.showString("^")
    }
})
