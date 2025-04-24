export const contactAnimation = {
    hidden: {
        opacity: 0,
        y: -20,
        filter: 'blur(5px)'
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0)',
        transition: { delay: custom * .25, duration: .35, ease: 'easeInOut' }
    })
};

export const mapAnimation = {
    hidden: {
        opacity: 0,
        x: 40,
        filter: 'blur(5px)'
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        filter: 'blur(0)',
        transition: { delay: custom * .25, duration: .4, ease: 'easeInOut' }
    })
}