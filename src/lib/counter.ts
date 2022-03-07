
export const animateValue = (setValue:(v:number) => void, start:number, end:number, duration:number) => {
    
    const frameDuration = 1000/60;
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = start;

    const counter = () => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(end * progress);
        
        if(start !== currentCount) setValue(currentCount);

        if( frame < totalFrames ) {
            window.requestAnimationFrame(counter);
        }
    };
    window.requestAnimationFrame(counter);
}

const easeOutQuad = (t:number) => t * ( 2 - t );

