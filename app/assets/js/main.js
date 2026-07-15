
        let testimonialSwiper;

        function initSwiper() {
            if (window.innerWidth <= 767) {
                if (!testimonialSwiper) {
                    testimonialSwiper = new Swiper(".testimonialSwiper", {
                        slidesPerView: 1.5,
                        spaceBetween: 16,
                        loop: false,
                        grabCursor: true,
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            520: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                        },
                    });
                }
            } else {
                if (testimonialSwiper) {
                    testimonialSwiper.destroy(true, true);
                    testimonialSwiper = undefined;
                }
            }
        }

        // Init
        initSwiper();

        // On resize
        window.addEventListener("resize", initSwiper);


        // const lenis = new Lenis({
        //     duration: 0.8,
        //     smoothWheel: true,
        // });

        // lenis.on("scroll", ScrollTrigger.update);

        // gsap.ticker.add((time) => {
        //     lenis.raf(time * 1000);
        // });

        //gsap.ticker.lagSmoothing(0);


        window.addEventListener("load", () => {
            gsap.registerPlugin(ScrollTrigger);
            document.querySelectorAll(".counter_nm span").forEach((digit, index) => {
                const finalNumber = parseInt(digit.textContent);

                // Create rolling numbers
                const roller = document.createElement("div");
                roller.classList.add("digit-roller");

                for (let i = 0; i <= 9; i++) {
                    const number = document.createElement("div");
                    number.textContent = i;
                    roller.appendChild(number);
                }

                digit.textContent = "";
                digit.appendChild(roller);

                gsap.set(roller, {
                    yPercent: 0
                });

                gsap.to(roller, {
                    yPercent: -(finalNumber * 10),
                    duration: 1.5 + index * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".counter_block",
                        start: "top 60%",
                        toggleActions: "play none none reset"
                    }
                });
            });

            const swiper1 = new Swiper(".partner_row-1", {
                slidesPerView: "auto",
                spaceBetween: 30,
                loop: true,
                speed: 3000,
                freeMode: true,
                allowTouchMove: true,

                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: false
                }
            });

            const swiper2 = new Swiper(".partner_row-2", {
                slidesPerView: "auto",
                spaceBetween: 25,
                loop: true,
                speed: 3000,
                freeMode: true,
                allowTouchMove: true,

                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true
                },
                breakpoints: {
                    640: {
                        spaceBetween: 20,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                    1024: {
                        spaceBetween: 25,
                    },
                },
            });


            let scrollTimer;

            ScrollTrigger.create({
                trigger: ".global_partners",
                start: "top bottom",
                end: "bottom top",

                onUpdate: (self) => {

                    const velocity = self.getVelocity();

                    // Scrolling down
                    if (velocity > 0) {

                        // Row 1 → RIGHT
                        swiper1.params.autoplay.reverseDirection = true;

                        // Row 2 → LEFT
                        swiper2.params.autoplay.reverseDirection = false;

                    }

                    // Scrolling up
                    else {

                        // Reverse scroll direction
                        swiper1.params.autoplay.reverseDirection = false;
                        swiper2.params.autoplay.reverseDirection = true;

                    }

                    // Increase speed while scrolling
                    swiper1.params.speed = 1000;
                    swiper2.params.speed = 1000;

                    swiper1.autoplay.start();
                    swiper2.autoplay.start();


                    clearTimeout(scrollTimer);

                    scrollTimer = setTimeout(() => {

                        // Normal autoplay direction

                        // Row 1 → LEFT
                        swiper1.params.autoplay.reverseDirection = false;

                        // Row 2 → RIGHT
                        swiper2.params.autoplay.reverseDirection = true;

                        // Normal autoplay speed
                        swiper1.params.speed = 5000;
                        swiper2.params.speed = 5000;

                        swiper1.autoplay.start();
                        swiper2.autoplay.start();

                    }, 200);
                }
            });
        });
        const panoramaSwiper = new Swiper(".mySwiper", {
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            watchSlidesProgress: true,
            initialSlide: 2,
            speed: 0,
            autoplay: false,

            slidesPerView: 2, // default mobile
            spaceBetween: 10,

            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
                479: {
                    slidesPerView: 1.8,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                },
                1320: {
                    slidesPerView: 5,
                    spaceBetween: 12,
                },
                1600: {
                    slidesPerView: 6,
                    spaceBetween: 12,
                },
            },

            on: {
                progress(swiper) {
                    const isMobile = window.innerWidth < 640;

                    swiper.slides.forEach((slide) => {
                        const p = slide.progress;

                        // 🎯 Responsive depth
                        const baseZ = isMobile ? -250 : -500;

                        const rotateY = 12.5 * p;

                        const translateX =
                            0.2654 * p +
                            0.0244 * Math.pow(p, 3);

                        const translateZ =
                            baseZ +
                            30.5 * Math.pow(p, 2) -
                            0.62 * Math.pow(p, 4);

                        slide.style.transform = `
                                translateX(${translateX}px)
                                translateZ(${translateZ}px)
                                rotateY(${rotateY}deg)
                            `;
                    });
                },

                setTransition(swiper, duration) {
                    swiper.slides.forEach((slide) => {
                        slide.style.transitionDuration = `${duration}ms`;
                    });
                }
            }
        });

        const swiper = panoramaSwiper;

        let position = swiper.translate;

        // 🎯 Responsive speed
        function getSpeed() {
            if (window.innerWidth < 640) return 1;   // slow mobile
            if (window.innerWidth < 1024) return 1.5;
            return 2; // desktop
        }

        // 🎯 Continuous motion
        gsap.ticker.add(() => {
            position -= getSpeed();

            if (position <= swiper.maxTranslate()) {
                position = swiper.minTranslate();
            }

            swiper.setTranslate(position);
            swiper.updateProgress(position);
            swiper.updateSlidesProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        });

        // 🎯 Fix on resize
        window.addEventListener("resize", () => {
            swiper.update();
            position = swiper.translate;
        });


        const TAIL_LENGTH = 30;
        const cursor = document.getElementById("cursor");

        let mouseX = 0;
        let mouseY = 0;

        let cursorCircles;
        let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

        function onMouseMove(event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        function onClick(event) {
            for (let i = 0; i < TAIL_LENGTH; i++) {
                cursorHistory[i].x += Math.random() * 100 - 50;
                cursorHistory[i].y += Math.random() * 100 - 50;
            }
        }

        function initCursor() {
            for (let i = 0; i < TAIL_LENGTH; i++) {
                let div = document.createElement("div");
                div.classList.add("cursor-circle");
                cursor.append(div);
            }
            cursorCircles = Array.from(document.querySelectorAll(".cursor-circle"));
        }

        function updateCursor() {
            cursorHistory.shift();
            cursorHistory.push({ x: mouseX, y: mouseY });

            for (let i = 0; i < TAIL_LENGTH; i++) {
                let current = cursorHistory[i];
                let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

                let xDiff = next.x - current.x;
                let yDiff = next.y - current.y;

                current.x += xDiff * 0.35;
                current.y += yDiff * 0.35;
                cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y
                    }px) scale(${i / TAIL_LENGTH})`;
            }
            requestAnimationFrame(updateCursor);
        }

        document.addEventListener("mousemove", onMouseMove, false);
        document.addEventListener("click", onClick, false);

        initCursor();
        updateCursor();


        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            // Check if user has scrolled down more than 50 pixels
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });

        document.addEventListener("DOMContentLoaded", () => {

            gsap.registerPlugin(ScrollTrigger);

            function createScrollTrigger(triggerElement, timeline) {
                ScrollTrigger.create({
                    trigger: triggerElement,
                    start: "top bottom",
                    onLeaveBack: () => {
                        timeline.progress(0);
                        timeline.pause();
                    },
                });

                ScrollTrigger.create({
                    trigger: triggerElement,
                    start: "top 70%",
                    // markers: true,
                    onEnter: () => timeline.play(),
                });
            }

            // Split Text
            document.querySelectorAll("[text-split]").forEach((element) => {
                new SplitType(element, {
                    types: "words, chars",
                    tagName: "span",
                });
            });
            document.querySelectorAll("[letters-hover]").forEach((element) => {
                const chars = element.querySelectorAll(".char");

                chars.forEach((char, i) => {
                    char.addEventListener("mouseenter", () => {
                        gsap.to(char, {
                            y: -16,
                            duration: 0.20,
                            ease: "back.out(2)",
                        });

                        if (chars[i - 1]) {
                            gsap.to(chars[i - 1], {
                                y: -10,
                                duration: 0.20,
                            });
                        }

                        if (chars[i + 1]) {
                            gsap.to(chars[i + 1], {
                                y: -6,
                                duration: 0.18,
                            });
                        }
                    });

                    char.addEventListener("mouseleave", () => {
                        gsap.to([char, chars[i - 1], chars[i + 1]].filter(Boolean), {
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                        });
                    });
                });
            });
            // Animate Letters
            document.querySelectorAll("[letters-slide-up]").forEach((element) => {
                const chars = element.querySelectorAll(".char");

                const tl = gsap.timeline({
                    paused: true,
                });

                tl.from(chars, {
                    yPercent: 100,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: {
                        each: 0.05,
                    },
                });

                createScrollTrigger(element, tl);
            });

            const scrubEachWordElements = document.querySelectorAll("[scrub-each-word]");
            scrubEachWordElements.forEach((element) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        end: "top end",
                        scrub: true,
                    },
                });
                const words = element.querySelectorAll(".word");
                tl.from(words, {
                    opacity: 0.2,
                    duration: 0.2,
                    ease: "power1.out",
                    stagger: { each: 0.05 },
                });
            });

            const textSplitElements = document.querySelectorAll("[text-split]");
            textSplitElements.forEach((element) => {
                gsap.set(element, { opacity: 1 });
            });
        });

        var newswiper = new Swiper(".mySwiper_cube", {
            direction: "vertical",
            effect: "cube",
            grabCursor: true,
            mousewheel: true,
            initialSlide: 1,
        });


        // const boxes = gsap.utils.toArray(".process_box");

        // const offsets = [0, 300, 600, 900];

        // gsap.set(boxes, {
        //     y: (index) => offsets[index]
        // });

        // const tls = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".process_block",
        //         start: "-5% top",
        //         end: "+=1200",
        //         scrub: 1,
        //         pin: true,
        //         anticipatePin: 1,
        //         markers: true
        //     }
        // });

        // tls.to(boxes, {
        //     y: 0,
        //     ease: "none"
        // });
        let processTL;

        function initCardSlider() {

            // Kill previous timeline if exists
            if (processTL) {
                processTL.kill();
                ScrollTrigger.getAll().forEach(t => t.kill());
            }

            if (window.innerWidth <= 767) {

                const boxes = gsap.utils.toArray(".process_box");

                // Initial positions
                gsap.set(boxes, {
                    y: (i) => i * 300,
                    zIndex: (i) => boxes.length + i
                });

                processTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".process_block",
                        start: "top top",
                        end: "+=2200",
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        // markers: true
                    }
                });

                // Loop instead of hardcoding
                boxes.forEach((box, i) => {

                    if (i === 0) {
                        processTL.to(box, { y: 0, duration: 0.5 });
                    } else {

                        processTL.from(box, {
                            y: 300,
                            opacity: 0
                        });

                        // Animate previous cards
                        boxes.slice(0, i).forEach((prevBox, index) => {
                            processTL.to(prevBox, {
                                scale: 1 - (0.06 * (i - index)),
                                y: -(20 * (i - index))
                            }, "<");
                        });

                        // Bring current card
                        processTL.to(box, {
                            y: 0,
                            opacity: 1,
                            duration: 0.5
                        }, "<");
                    }
                });

            }
        }

        // Init once
        initCardSlider();

        // Debounced resize
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                initCardSlider();
            }, 300);
        });

        const buttons = document.querySelectorAll("a.theme_button");

        buttons.forEach((button) => {
            const spotlight = button.querySelector(".button__spotlight");

            button.addEventListener("mousemove", (e) => {
                const rect = button.getBoundingClientRect();

                gsap.to(spotlight, {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    scale: 30,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            button.addEventListener("mouseleave", (e) => {
                const rect = button.getBoundingClientRect();

                gsap.to(spotlight, {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    scale: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
        gsap.set(".popup", {
            scale: 0.6,
            y: 80,
            opacity: 0
        });

        // const tl = gsap.timeline({ paused: true });

        // tl.to(".popup-overlay", {
        //     autoAlpha: 1,
        //     duration: 0.2
        // })
        //     .to(".popup", {
        //         scale: 1,
        //         y: 0,
        //         opacity: 1,
        //         duration: 0.6,
        //         ease: "back.out(1.7)"
        //     }, 0);

        // document.getElementById("openPopup").onclick = () => {
        //     tl.play();
        // };

        // document.getElementById("closePopup").onclick = () => {
        //     tl.reverse();
        // };

        // document.querySelector(".popup-overlay").onclick = (e) => {
        //     if (e.target.classList.contains("popup-overlay")) {
        //         tl.reverse();
        //     }
        // };
        const sections = document.querySelectorAll(".portfolio_box");
        const cursorproject = document.querySelector(".custom-cursor");

        const xTo = gsap.quickTo(cursorproject, "x", {
            duration: 0.2,
            ease: "power3.out"
        });

        const yTo = gsap.quickTo(cursorproject, "y", {
            duration: 0.2,
            ease: "power3.out"
        });

        sections.forEach((section) => {
            section.addEventListener("mouseenter", () => {
                gsap.to(cursorproject, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.out"
                });
            });

            section.addEventListener("mouseleave", () => {
                gsap.to(cursorproject, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.out"
                });
            });

            section.addEventListener("mousemove", (e) => {
                xTo(e.clientX);
                yTo(e.clientY);
            });
        });


        document.querySelectorAll(".testimonial_box").forEach((box) => {
            const video = box.querySelector("video");
            const button = box.querySelector(".playBtn");

            // Skip if video or button doesn't exist
            if (!video || !button) return;

            button.addEventListener("click", () => {

                // Pause all other videos
                document.querySelectorAll(".testimonial_box").forEach((item) => {
                    const otherVideo = item.querySelector("video");
                    const otherBtn = item.querySelector(".playBtn");

                    if (!otherVideo || !otherBtn) return;

                    if (otherVideo !== video) {
                        otherVideo.pause();

                        gsap.to(otherBtn, {
                            scale: 1,
                            opacity: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });

                        otherBtn.style.pointerEvents = "auto";
                    }
                });

                // Toggle current video
                if (video.paused) {
                    video.play();

                    gsap.to(button, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                        onComplete: () => {
                            button.style.pointerEvents = "none";
                        }
                    });
                } else {
                    video.pause();
                }
            });

            video.addEventListener("pause", () => {
                button.style.pointerEvents = "auto";

                gsap.to(button, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });

            video.addEventListener("ended", () => {
                button.style.pointerEvents = "auto";

                gsap.to(button, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
        });
        document.addEventListener("DOMContentLoaded", () => {
            const menuBtn = document.getElementById("menu-toggle");
            const mobileMenu = document.getElementById("mobile-menu");
            const siteHeader = document.querySelector(".site_header ");

            menuBtn.addEventListener("click", () => {
                menuBtn.classList.toggle("active");
                siteHeader.classList.toggle("active");

                if (mobileMenu) {
                    mobileMenu.classList.toggle("open");
                }

                const expanded = menuBtn.classList.contains("active");
                menuBtn.setAttribute("aria-expanded", expanded);
            });
        });