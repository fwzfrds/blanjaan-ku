var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 5,
    breakpoints: {
        600: {
            perPage: 2,
            width: '90vw',
            height: '120px',
            gap: 5
        }
    },
    width: '1149px',
    height: '220px',
    autoplay: true,
    gap: 28,
    pagination: false
});

splide.mount();