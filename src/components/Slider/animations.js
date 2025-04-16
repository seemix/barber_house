export const buttonAnimation = {
    hidden: {
        y: 20,
        opacity: 0,
        scale: 0.8
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut'  }
    })
};
export const headerAnimation = {
    hidden: {
        y: 30,
        opacity: 0,
        filter: 'blur(10px)'
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        filter: 'blur(0)',
        transition: { delay: custom * .3, duration: .4, ease: 'easeInOut'  }
    })
};