@props([
    'slideId' => null
])

<div {{ $attributes }}>
    <div 
        id="{{ $slideId }}"
        class="carousel__slidesHolder"
    >
        {!! $slot !!}
    </div>
</div>
