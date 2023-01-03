gsap.registerPlugin(MotionPathPlugin)

gsap.to('.item', {
    duration: 55,
    motionPath:{
        path: document.querySelector(".yourPath"),
        align: '.yourPath',
        alignOrigin: [.5, .5],  // Разы Левый верхний . Правый нижний угол 
        autoRotate: true
    } 
})