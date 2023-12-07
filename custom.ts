
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/
/**
 * Animation blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an LED at a particular interval (ms)
     * @param x horizontal led coordinate
     * @param y vartical led coordinate
     * @param interval time in milli seconds between blinks
     */
    //% block="blink|x $x |y $y |every $interval |ms"
    //% x.min=0 x.max=4 y.min=0 y.max=4 interval.min=0 x.defl=2 y.defl=2 interval.defl=100
    export function blink(x:number, y:number, interval:number): void {
        led.plot(x, y)
        basic.pause(interval)
        led.unplot(x, y)
    }
}
