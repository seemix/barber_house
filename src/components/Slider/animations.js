export const buttonAnimation = {
    hidden: {
        y: 20,
        opacity: 0,
        scale: 0.8,
        filter: 'blur(5px)',
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0)',
        transition: { delay: custom * .3, duration: .4, ease: 'easeInOut'  }
    })
};
export const headerAnimation = {
    hidden: {
        x: -30,
        opacity: 0,
        filter: 'blur(10px)'
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        filter: 'blur(0)',
        transition: { delay: custom * .2, duration: .4, ease: 'easeInOut'  }
    })
};