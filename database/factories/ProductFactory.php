<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Product::class, function (Faker $faker) {
    return [
        'name'=>$faker->unique()->word,
        'description'=>$faker->text(),
        'category_id'=>$faker->numberBetween(1,50)
    ];
});
