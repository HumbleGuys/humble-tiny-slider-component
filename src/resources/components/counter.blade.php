@props([
    'currentClass' => '',
    'totalClass' => '',
    'seperatorClass' => '',
    'seperatorText' => '/',
    'forceTwoDigits' => false
])

<div {{ $attributes }}>
    @if (empty($current))
        <span 
            class="{{ $currentClass }}"
            x-text="{{ !empty($forceTwoDigits) ? 'forceTwoDigits(currentSlide)' : 'currentSlide' }}"
        ></span>
    @else
        {!! $current !!}
    @endif

    @if (empty($seperator))
        <span class="{{ $seperatorClass }}">
            {{ $seperatorText }}
        </span>
    @else
        {!! $seperator !!}
    @endif

    @if (empty($total))
        <span 
            class="{{ $totalClass }}"
            x-text="{{ !empty($forceTwoDigits) ? 'forceTwoDigits(slideCount)' : 'slideCount' }}"
        ></span>
    @else
        {!! $total !!}
    @endif
</div>