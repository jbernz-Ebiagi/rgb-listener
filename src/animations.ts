import { RGB } from './types'

export const flash = (rgb:RGB):RGB => {
    const brightness = Math.abs(0.5 - process.uptime()%1)*2
    return {
        r: rgb.r*brightness,
        g: rgb.g*brightness,
        b: rgb.b*brightness
    }
}