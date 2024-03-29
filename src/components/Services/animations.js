export const cardAnimation = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut' }
    })
};