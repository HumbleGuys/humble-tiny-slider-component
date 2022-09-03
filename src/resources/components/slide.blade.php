@props([
    'activeClass' => 'isActive',
    'inactiveClass' => '',
    'index'
])

<div>
    <div
        :class="{ 
            '{{ $activeClass }}': currentSlide === {{ $index + 1 }},
            '{{ $inactiveClass }}': currentSlide !== {{ $index + 1 }}
        }"
        {{ $attributes }}
    >
        {!! $slot !!}
    </div>
</div>