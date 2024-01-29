export const barberCardAnimation = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * .25, duration: .25, ease: 'easeInOut' }
    })
}
export const barberPictureAnimation = {
    hidden: {
        opacity: 0,
        filter: 'blur(150px)',
        scale: .9
    },
    visible: custom => ({
        opacity: 1,
        filter: 'blur(0)',
        scale: 1,
        transition: { delay: custom * .3, duration: .2, ease: 'easeInOut' }
    })
};