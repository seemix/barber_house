export const barberCardAnimation = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * .3, duration: .35, ease: 'easeInOut' }
    })
}