export const contactAnimation = {
    hidden: {
        opacity: 0,
        y: -20,
        filter: 'blur(2px)',

    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0)',
        transition: { delay: custom * .25, duration: .3, ease: 'easeInOut' }
    })
};

export const mapAnimation = {
    hidden: {
        opacity: 0,
        x: 40
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * .2, duration: .3, ease: 'easeInOut' }
    })
}