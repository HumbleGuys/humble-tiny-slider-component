@props([
    'playingClass' => 'isPlaying',
    'pausedClass' => 'isPaused',
])

<button
    :class="[isPaused ? '{{ $pausedClass }}' : '{{ $playingClass }}']"
    type="button"
    @click="toggleAutoplay"
    {{ $attributes }}
>
    @if (!empty($playing))
        <template x-if="!isPaused">
            <span>
                {{ $playing ?? null }}
            </span>
        </template>
    @endif

    @if (!empty($paused))
        <template x-if="isPaused">
            <span>
                {{ $paused ?? null }}
            </span>
        </template>
    @endif

    {{ $slot ?? null }}
</button>
