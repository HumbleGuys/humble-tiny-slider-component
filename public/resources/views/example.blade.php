@php
$slides = collect([
    [
        'title' => 'Slide 1',
        'bg' => 'hotpink'
    ],

    [
        'title' => 'Slide 2',
        'bg' => 'purple'
    ],

    [
        'title' => 'Slide 3',
        'bg' => 'skyblue'
    ],
])   
@endphp

<x-layout>
    <x-tinySlider::base :slides="$slides">
        <x-tinySlider::slides>
            @foreach ($slides as $slide)
                <x-tinySlider::slide 
                    :index="$loop->index"
                    style="background-color: {{ $slide['bg'] }};padding:10rem;"    
                >
                    <h1 style="margin:0;">
                        {{ $slide['title'] }}
                    </h1>
                </x-tinySlider::slide>
            @endforeach
        </x-tinySlider::slides>

        <div>
            <x-tinySlider::button direction="prev">
                Prev
            </x-tinySlider::button>

            <x-tinySlider::button direction="next">
                Next
            </x-tinySlider::button>
        </div>

        <div>
            <x-tinySlider::counter />
        </div>
    </x-tinySlider::base>
</x-layout>