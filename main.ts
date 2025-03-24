// Pozycja początkowa serwa
input.onButtonPressed(Button.A, function () {
    // Serwo na 125°
    pins.servoWritePin(AnalogPin.P1, 125)
    // Czekaj 5 sekund
    basic.pause(5000)
    // Serwo wraca na 0°
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    // Włączenie przekaźnika (pompa ON)
    pins.digitalWritePin(DigitalPin.P2, 1)
    // Czekaj 15 sekund
    basic.pause(3000)
    // Wyłączenie przekaźnika (pompa OFF)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
// Konfiguracja PWM dla serwa
// pins.analogSetPeriod(AnalogPin.P1, 20)
// Pozycja początkowa serwa
pins.servoWritePin(AnalogPin.P1, 0)
