<?php

namespace App\Http\Controllers\Api\v1;

use App\Events\ProductStore;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * @var Product
     */
    private $product;

    /**
     * ProductController constructor.
     */
    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = $this->product->getResults($request->all(), 10);
        return response()->json($products);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function store(ProductRequest $request)
    {

        $data = $request->all();

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $name = kebab_case($request->name);
            $extension = $request->image->extension();

            $fileName = date("d-m-Y") . "-" . $name . "." . $extension;

            $data['image'] = $fileName;

            $uploaded = $request->image->storeAs('products', $fileName);

            if (!$uploaded)
                return response()->json(['message' => 'upload failed'], 500);

        }

        $product = $this->product->create($data);

        broadcast(new ProductStore($product));

        return response()->json($product, 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!$product = $this->product->find($id))
            return response()->json(['message' => 'not found'], 404);
        return response()->json($product);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, $id)
    {
        if (!$product = $this->product->find($id))
            return response()->json(['message' => "not found {$id}"], 404);

        $data = $request->all();


        if ($request->hasFile('image') && $request->file('image')->isValid()) {

            if ($product->image) {

                if (Storage::exists("products/{$product->image}")) {
                    Storage::delete("products/{$product->image}");
                }
            }


            $name = kebab_case($request->name);
            $extension = $request->image->extension();

            $fileName = date("d-m-Y") . "-" . $name . "." . $extension;


            $data['image'] = $fileName;

            $uploaded = $request->image->storeAs('products', $fileName);

            if (!$uploaded)
                return response()->json(['message' => 'upload failed'], 500);

        }

        $product->update($data);

        broadcast(new ProductStore($product));


        return response()->json($product, 203);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$product = $this->product->find($id))
            return response()->json(['message' => 'not found'], 404);

        if ($product->image) {

            if (Storage::exists("products/{$product->image}")) {
                Storage::delete("products/{$product->image}");
            }
        }

        $product->delete();

        return response()->json(['message' => 'success']);
    }
}
