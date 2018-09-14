<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'description', 'image', 'category_id'
    ];

    public function getResults($data)
    {
        $page = isset($data['total'])?$data['total']:9;
        if (!isset($data['filter']) && !isset($data['name']) && !isset($data['description']))
            return $this->with('category')->orderBy('created_at','desc')->paginate($page);


        return $this->where(function ($query) use ($data) {
            if (isset($data['filter'])) {
                $query->where('name', 'LIKE', "%{$data['filter']}%")
                    ->orWhere('name', $data['filter'])
                    ->orWhere('description', 'LIKE',"%{$data['filter']}%");

            }
            if (isset($data['name']))
                $query->where('name', $data['name']);

            if (isset($data['description']))
                $query->where('name', 'LIKE', "{$data['description']}");


        })->paginate($page);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
