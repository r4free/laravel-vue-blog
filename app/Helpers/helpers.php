<?php

function sendEvent($channel,$event,$data)
{
    $options = array(
        'cluster' => env('PUSHER_APP_CLUSTER'),
        'encrypted' => false
    );
//        dd($channel,$event,$data);
        $pusher = new Pusher\Pusher(
        '651f6f46402365e40b70',
        'cb7ea31899c6282bc658',
        '551066',
        $options
    );

     $pusher->trigger($channel, $event, $data);
}