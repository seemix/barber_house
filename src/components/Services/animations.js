export const cardAnimation = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * .25, duration: .35, ease: 'easeInOut' }
    })
};

export const highLightAnimation = {
    hidden: {
        opacity: 0,
        x: -30,
        filter: 'blur(10px)'
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        filter: 'blur(0)',
        transition: { delay: custom * .25, duration: .5, ease: 'easeInOut' }
    })
}