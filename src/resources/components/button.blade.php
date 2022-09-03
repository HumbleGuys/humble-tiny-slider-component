@props([
    'direction' => 'next'
])

<button 
    type="button"
    @click="{{ $direction }}"
    {{ $attributes }}
>
    {!! $slot !!}
</button>