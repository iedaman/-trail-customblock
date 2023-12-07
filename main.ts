let i = 0
basic.forever(function () {
    i = 0
    for (let index = 0; index < 5; index++) {
        animations.blink(i, i, 100)
        i += 1
    }
})
