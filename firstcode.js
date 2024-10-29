var five = require("johnny-five");
var board = new five.Board({port:"COM5"}); //Make sure you have the correct COM port!


board.on("ready", function() {
        var led = new five.Led(13);
        led.on();
});
