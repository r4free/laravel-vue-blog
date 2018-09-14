<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * @var Category
     */
    private $category;
    private $perPage = 10;

    /**
     * CategoryController constructor.
     */
    public function __construct(Category $category)
    {
        $this->category = $category;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json($this->category->getResults($request->filter));
    }

    public function show($id){
        return response()->json($this->category->find($id),201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        return response()->json($this->category->create($request->all()), 201);
    }


    public function update(CategoryRequest $request, $id)
    {
        if (!$category = $this->category->find($id))
            return response()->json(['error' => 'not found'], 404);
        $category->update($request->all());

        return response()->json($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        sleep(180);

        if (!$category = $this->category->find($id))
            return response()->json(['message' => 'not found']);
        $category->delete();
        return response()->json(['message' => 'item deletado com sucesso'], 404);
    }

    public function products($id)
    {
        if(!$category = $this->category->find($id))
           return response()->json(['message'=>'category not found'],404);

        $products = $category->products()->paginate($this->perPage);

        return response()->json([
            'category'=>$category,
            'products'=>$products
        ],201);
    }
}
