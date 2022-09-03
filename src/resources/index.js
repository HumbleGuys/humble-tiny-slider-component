import './css/index.css';

import tinySlider from './js/tinySlider';

document.addEventListener('alpine:init', () => {
    window.Alpine.data('tinySlider', tinySlider);
})

