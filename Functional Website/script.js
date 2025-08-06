
  gsap.from("header ", {
    y: -100,
    opacity: 0,
    duration: 2,
  });

  gsap.from(".center .box .title h1", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.5,

  });

  gsap.from(".center .box .text p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8,
  });

  gsap.from(".center .demo button", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1.1,
    stagger: 0.2,
  });

  gsap.from(".brand .b", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 1.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".brand .b",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".Second .eye h4", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".Second .eye h4",
     // start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".Second .eye p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".Second .eye p",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".founder .photo", {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: ".founder .photo",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".word .pro .pp", {
    opacity: 0,
    x: -50,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".word .pro",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".word .pro .pho", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".word .pro",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".word .center .box", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".word .center .box",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".abox div", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".abox ",
      start: " 90%",
      toggleActions: "play reverse play reverse"
    }
  });

  
