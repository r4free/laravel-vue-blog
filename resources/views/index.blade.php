<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Home One || RELAXSHOP</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="shortcut icon" type="image/x-icon" href="site/img/favicon.ico">
        <!-- Place favicon.ico in the root directory -->
        
        <!-- google fonts  -->
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,900' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Raleway:400,500,700,300,800' rel='stylesheet' type='text/css'>
    <meta name="csrf-token" content="{{ csrf_token() }}">


        <!-- all css here -->
        <!-- bootstrap v3.3.6 css -->
        <link rel="stylesheet" href="site/css/bootstrap.min.css">
        <!-- animate css -->
        <link rel="stylesheet" href="site/css/animate.css">
        <!-- jquery-ui.min css -->
        <link rel="stylesheet" href="site/css/jquery-ui.min.css">
        <!-- meanmenu css -->
        <link rel="stylesheet" href="site/css/meanmenu.min.css">
        <!-- owl.carousel css -->
        <link rel="stylesheet" href="site/css/owl.carousel.css">
        <!-- nivo-slider css -->
        <link rel="stylesheet" href="site/lib/css/nivo-slider.css">
        <!-- font-awesome css -->
        <link rel="stylesheet" href="site/css/font-awesome.min.css">
        <!-- style css -->
        <link rel="stylesheet" href="site/style.css">
        <!-- responsive css -->
        <link rel="stylesheet" href="site/css/responsive.css">
        <!-- modernizr js -->
        {{-- <script src="site/js/vendor/modernizr-2.8.3.min.js"></script> --}}
    <link rel="stylesheet" href="{{mix('css/app.css')}}">

    {{-- admin css --}}
        
    </head>
    <body>
     <div id="app">
           <router-view></router-view>
     </div>
        
        <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
        
    
        <!-- all js here -->
        <!-- jquery latest version -->
        <script src="site/js/vendor/jquery-1.12.0.min.js"></script>
        <!-- bootstrap js -->
        <script src="site/js/bootstrap.min.js"></script>
        <!-- owl.carousel js -->
        <script src="site/js/owl.carousel.min.js"></script>
        <!-- meanmenu js -->
        <script src="site/js/jquery.meanmenu.js"></script>
        <!-- jquery-ui js -->
        <script src="site/js/jquery-ui.min.js"></script>
        <!-- nivo.slider js -->
        <script src="site/lib/js/jquery.nivo.slider.pack.js"></script>       
        <script src="site/lib/js/nivo-active.js"></script>       
        <!-- wow js -->
        <script src="site/js/wow.min.js"></script>
        <!-- plugins js -->
        <script src="site/js/plugins.js"></script>
        <!-- main js -->
        <script src="site/js/main.js"></script>
        
        {{-- admin css --}}
        <script src="admin/js/custom.js"></script>
        
    </body>
</html>



