<?php
//sleep(3);

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$this->middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



$this->group(['prefix'=>'v1','namespace'=>'Api\v1','middleware'=>['api.block.web']],function (){

    $this->post('signup','AuthApiController@register');


    $this->apiResource('category','CategoryController')->only(['show','index']);
    $this->apiResource('product','ProductController')->only(['show','index']);

    $this->group(['middleware'=>['api.block.web','jwt.auth']],function(){

        $this->get('auth-refresh','AuthApiController@refreshToken');
        $this->get('me','AuthApiController@getAuthenticatedUser');
        $this->apiResource('category','CategoryController')->only(['update','store','destroy']);

        $this->get('category/{id}/products','CategoryController@products');

        $this->apiResource('product','ProductController')->only(['update','store','destroy']);


    });
    $this->post('auth','AuthApiController@authenticate');




});


