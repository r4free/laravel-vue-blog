<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/event',function (){


    $options = array(
        'cluster' => 'us2',
        'encrypted' => false
    );

    $pusher = new Pusher\Pusher(
        '651f6f46402365e40b70',
        'cb7ea31899c6282bc658',
        '551066',
        $options
    );

    $data['message'] = 'hello world';
    $pusher->trigger('my-channel', 'my-event', $data);
////    dd($pusher);
//    sendEvent('product','store-product',['name'=>'rafael']);

//    broadcast('test',new \App\Events\TestEvent('asdfasd'));
});

Route::get('/admin', function () {
    return view('admin');
});

Auth::routes();

// Route::get('/sitema', 'HomeController@index')->name('home');
