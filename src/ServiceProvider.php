<?php

namespace HumbleTinySliderComponent;

use Illuminate\Support\ServiceProvider as SupportServiceProvider;

class ServiceProvider extends SupportServiceProvider
{
    public function register(): void
    {
        $this->loadViewsFrom(__DIR__.'/resources', 'tinySlider');
    }

    public function boot(): void
    {
    }
}
