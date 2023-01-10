GROUND_Y = 4
player_y = GROUND_Y - 1
y_velocity = 0

def on_forever():
    global player_y, y_velocity
    
    led.unplot(2, player_y)
    if player_y < GROUND_Y - 1:
        y_velocity += 1
        player_y += y_velocity
    
    for x in range(5):
        led.plot(x, GROUND_Y)
basic.forever(on_forever)
