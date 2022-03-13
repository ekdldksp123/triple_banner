export const animateValue = (
  setValue: (v: number) => void,
  start: number,
  end: number,
  duration: number,
) => {
  const frameDuration = 1000 / 60
  const totalFrames = Math.round(duration / frameDuration)
  const easeOutExpo = (t: number) =>
    t === 1 ? 1 : 1 * (-Math.pow(2, (-10 * t) / 1) + 1)

  let frame = start

  const counter = () => {
    frame++
    const progress = easeOutExpo(frame / totalFrames)
    const currentCount = Math.round(end * progress)

    if (start !== currentCount) {
      setValue(currentCount)
    }

    if (frame < totalFrames) {
      window.requestAnimationFrame(counter)
    }
  }
  window.requestAnimationFrame(counter)
}
