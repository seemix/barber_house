export const buttonAnimation = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut'  }
    })
};
export const headerAnimation = {
    hidden: {
        y: 30,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, duration: 0.4, ease: 'easeInOut'  }
    })
};