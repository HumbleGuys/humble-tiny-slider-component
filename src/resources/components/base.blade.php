@props([
    'slides',
    'settings' => null
])

<div
    x-data="tinySlider({
        slideCount: {{ $slides->count() }},
        settings: {{ json_encode($settings ?? null) }}
    })"
    {{ $attributes->merge(['class' => 'carousel']) }}
>
    {!! $slot !!}
</div>

@once
    @push('head')
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-tiny-slider-component/public/resources/dist/assets/index.a49c1ff4.css') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-tiny-slider-component/public/resources/dist/assets/index.0f847ced.js') }}"></script>
    @endpush   
@endonce 