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