@props([
    'dotClass' => '',
    'dotActiveClass' => 'isActive'
])

<div
    {{ $attributes->merge(['class' => 'carousel__dots']) }}
    aria-label="Paginering för slider"
>
    <template
        x-for="i in dotsCount"
        :key="i"
    >
        <button
            aria-controls="carousel__slidesHolder"
            :aria-label="'Gå till slide ' + i"
            type="button"
            class="carousel__dot {{ $dotClass }}"
            :class="{ '{{ $dotActiveClass }}': activeDot === i }"
            @click="goTo(i - 1)"
        >
            {!! $slot ?? null !!}
        </button>
    </template>
</div>
