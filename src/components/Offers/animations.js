export const offerTextAnimation = {
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
export const offerImageAnimation = {
    hidden: {
        opacity: 0,
        filter: 'blur(20px)',
    },
    visible: custom => ({
        opacity: 1,
        filter: 'blur(0)',
        transition: { delay: custom * .3, duration: .5, ease: 'easeInOut' }
    })
};