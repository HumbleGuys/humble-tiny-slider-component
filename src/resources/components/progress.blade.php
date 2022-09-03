@props([
    'barClass' => 'carouselProgress__bar ab100',
    'pausedClass' => 'isPaused'
])

<div {{ $attributes->merge(['class' => 'carouselProgress']) }}>
    <div
        x-show="!switchingSlide"
        :class="{ {{ $pausedClass }}: isPaused }"
        :style="{ animationDuration: timePerSlide + 'ms' }"
        class="{{ $barClass }}"
    ></div>
</div>