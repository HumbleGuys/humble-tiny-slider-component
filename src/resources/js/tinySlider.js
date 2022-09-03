import { tns } from 'tiny-slider';

export default ({ slideCount, settings }) => ({
    slideCount: slideCount,

    carousel: null,

    settings: settings || {},

    isPaused: false,

    timePerSlide: null,

    currentSlide: 1,

    switchingSlide: false,

    dotsCount: null,

    activeDot: 1,

    init () {
        this.carousel = tns({
            container: this.$el.querySelector('.carousel__slidesHolder'),
            mouseDrag: true,
            controls: false,
            nav: false,
            autoplayButtonOutput: false,
            ...this.settings
        });

        this.carousel.events.on('indexChanged', info => {
            if (this.currentSlide !== info.displayIndex) {
                this.switchingSlide = true;

                this.$nextTick(() => {
                    this.switchingSlide = false;
                });
            }

            this.currentSlide = info.displayIndex;

            this.activeDot = Math.ceil(info.displayIndex / info.slideBy);
        });

        this.carousel.events.on('transitionEnd', info => {
            if (this.isPaused) {
                this.pause();
            }
        });

        this.carousel.events.on('newBreakpointEnd', info => {
            this.setDotsCount(info);

            this.activeDot = Math.ceil(info.displayIndex / info.slideBy);
        });

        this.setDotsCount(this.carousel.getInfo());

        this.timePerSlide = this.settings?.autoplayTimeout || 5000;
    },

    setDotsCount(slideInfo) {
        this.dotsCount = Math.ceil(slideInfo.slideCount / slideInfo.slideBy);
    },

    prev () {
        this.goTo('prev');
    },

    next () {
        this.goTo('next');
    },

    goTo (index) {
        if (!this.isPaused) {
            this.carousel.pause();
            this.carousel.play();
        }

        if (index !== 'next' && index !== 'prev' && (this.settings?.slideBy === 'page')) {
            index = index * this.carousel.getInfo().slideBy;
        }

        this.carousel.goTo(index);
    },

    toggleAutoplay () {
        if (this.isPaused) {
            this.play();
        } else {
            this.pause();
        }
    },

    pause () {
        this.isPaused = true;
        this.carousel.pause();
    },

    play () {
        this.isPaused = false;
        this.carousel.play();
    },

    forceTwoDigits (number) {
        return number > 9 ? number : `0${number}`;
    }
});
