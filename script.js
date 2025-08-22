Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {videos: ["./0.mp4" , "./2.mp4" , "./3.mp4"]})


gsap.to(".fleftElem",{
    scrollTrigger :{
        trigger:"#featureImg",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1

    },
    y:"-300%",
    ease:Power1
});


let sections = document.querySelectorAll(".fleftElem");

Shery.imageEffect(".fimages", {
    style: 5,
    // config:{OnMouse: {value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section , index){
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                scrub :1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                },
            });
        });
    },
});   



Shery.imageEffect(".img", {
  style: 5,
  // config:{onMouse: {value:1}},
  // debug: true,
  
  // gooey:true,

});



Shery.imageMasker(".fimg  , .secimg" /* Element to target.*/, {
  //Parameters are optional.
  // mouseFollower: true,
  // text: "Shery",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


// gsap.from("#link .links a",{
//   stagger:.3,
//   ease:Expo,
//   y:50,
//   opacity:0,
//   duration:10

// })
