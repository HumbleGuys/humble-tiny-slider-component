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
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-tiny-slider-component/public/resources/dist/style.css?v=0.0.2') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-tiny-slider-component/public/resources/dist/humble-tiny-slider-component.umd.js?v=0.0.2') }}"></script>
    @endpush   
@endonce 