<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ApiCategoryTest extends TestCase
{
    use DatabaseMigrations;

    public function testCreateCategory()
    {
        $response = $this->post('api/v1/category',['name'=>'teste teste']);
        $response->assertStatus(201);
    }

    public function testIndexCategory()
    {
        $this->get('/api/vi/category')->assertStatus(200);

    }
}
