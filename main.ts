let GROUND_Y = 4
let player_y = GROUND_Y - 1
let y_velocity = 0
basic.forever(function on_forever() {
    
    led.unplot(2, player_y)
    if (player_y < GROUND_Y - 1) {
        y_velocity += 1
        player_y += y_velocity
    }
    
    for (let x = 0; x < 5; x++) {
        led.plot(x, GROUND_Y)
    }
})
