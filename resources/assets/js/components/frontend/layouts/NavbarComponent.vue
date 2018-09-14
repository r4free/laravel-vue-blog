<template>
	<header class="header-pos">
            <!-- header-bottom-area start -->
            <div class="header-bottom-area">
                <div class="container">
                    <div class="inner-container">
                        <div class="row">
                            <div class="col-md-2 col-sm-4 col-xs-5">
                                <div class="logo">
                                    <a href="index.html"><img src="site/img/logo-white-text.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-md-8 hidden-xs hidden-sm">
                                <div class="main-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="#" @click.prevent="$router.push({name:'admin.product.index'})">Admin</a>
                                                <ul>
                                                    <li><a href="index.html">home version 1</a></li>
                                                    <li><a href="index-2.html">home version 2</a></li>
                                                    <li><a href="index-3.html">home version 3</a></li>
                                                </ul>
                                            </li>
                                            <li><router-link :to="{name:'shop'}">Shop</router-link></li>
                                            <li><a href="blog.html">blog</a></li>
                                            <li class="static"><a href="shop.html">shop</a>
                                                <div class="mega-menu">
                                                    <div class="mega-left">
                                                        <span>
                                                            <a href="shop.html" class="mega-title">WOMEN CLOTH </a>
                                                            <a href="shop.html">casual shirt</a>
                                                            <a href="shop.html">rikke t-shirt</a>
                                                            <a href="shop.html">mia top </a>
                                                            <a href="shop.html">muscle tee </a>
                                                        </span>
                                                        <span>
                                                            <a href="shop.html" class="mega-title">MEN CLOTH </a>
                                                            <a href="shop.html">casual shirt</a>
                                                            <a href="shop.html">rikke t-shirt</a>
                                                            <a href="shop.html">mia top </a>
                                                            <a href="shop.html">muscle tee </a>
                                                        </span>
                                                        <span>
                                                            <a href="shop.html" class="mega-title">WOMEN JEWELRY </a>
                                                            <a href="shop.html">necklace </a>
                                                            <a href="shop.html">chunky short striped </a>
                                                            <a href="shop.html">samhar cuff</a>
                                                            <a href="shop.html">nail set </a>
                                                        </span>
                                                        <span>
                                                            <a href="shop.html" class="mega-title">WOMEN JEWELRY </a>
                                                            <a href="shop.html">necklace </a>
                                                            <a href="shop.html">chunky short striped </a>
                                                            <a href="shop.html">samhar cuff</a>
                                                            <a href="shop.html">nail set </a>
                                                        </span>
                                                        <span>
                                                            <a href="shop.html" class="mega-title">WOMEN JEWELRY </a>
                                                            <a href="shop.html">necklace </a>
                                                            <a href="shop.html">chunky short striped </a>
                                                            <a href="shop.html">samhar cuff</a>
                                                            <a href="shop.html">nail set </a>
                                                        </span>
                                                    </div>
                                                    <div class="mega-right">
                                                        <span class="mega-menu-img">
                                                            <a href="shop.html"><img alt="" src="site/img/1.jpg"></a>
                                                        </span>
                                                    </div>
                                                </div>                                      
                                            </li>
                                            <li><a href="shop.html">cloth</a>
                                                <div class="mega-menu mega-menu-2">                                         
                                                    <span>
                                                        <a href="shop.html" class="mega-title">WOMEN CLOTH </a>
                                                        <a href="shop.html">casual shirt</a>
                                                        <a href="shop.html">rikke t-shirt</a>
                                                        <a href="shop.html">mia top </a>
                                                        <a href="shop.html">muscle tee </a>
                                                    </span>
                                                    <span>
                                                        <a href="shop.html" class="mega-title">MEN CLOTH </a>
                                                        <a href="shop.html">casual shirt</a>
                                                        <a href="shop.html">rikke t-shirt</a>
                                                        <a href="shop.html">mia top </a>
                                                        <a href="shop.html">muscle tee </a>
                                                    </span>
                                                    <span>
                                                        <a href="shop.html" class="mega-title">WOMEN JEWELRY </a>
                                                        <a href="shop.html">necklace </a>
                                                        <a href="shop.html">chunky short striped </a>
                                                        <a href="shop.html">samhar cuff</a>
                                                        <a href="shop.html">nail set </a>
                                                    </span>
                                                    <span class="mega-menu-img">
                                                        <a href="shop.html"><img alt="" src="site/img/1.jpg"></a>
                                                    </span>
                                                </div>                                          
                                            </li>
                                            <li><a href="#">pages</a>
                                                <ul>
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="blog-2-column.html">blog 2 column</a></li>
                                                    <li><a href="blog-full-width.html">blog full width</a></li>
                                                    <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                                    <li><a href="single-blog.html">single blog</a></li>
                                                    <li><a href="single-blog-video.html">single blog video</a></li>
                                                    <li><a href="cart.html">shopping cart</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="shop.html">shop</a></li>
                                                    <li><a href="product-details.html">product details</a></li>
                                                    <li><a href="shop-full-width.html">shop full width</a></li>
                                                    <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                    <li><a href="404.html">404 error</a></li>
                                                </ul>                                               
                                            </li>                                           
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-8 col-xs-7 header-right">
                                <my-cart></my-cart>
                                <div class="user-meta">
                                    <a href="#"><i class="fa fa-cog"></i></a>
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Wish list</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Testimonial</a></li>
                                        <li>
                                            <a href="#" @click.prevent="logout()" v-if="logged">Sair</a>
                                            <a href="#" @click.prevent="$router.push('/login')" v-else>Log in</a>
                                        </li>
                                    </ul>                               
                                </div>
                                <div class="header-search">
                                    <i class="fa fa-search"></i>
                                    <div class="header-form">
                                        <form action="#">
                                            <input type="text" placeholder="search" />
                                            <button><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header-bottom-area end -->
            <!-- mobile-menu-area start -->
            <div class="mobile-menu-area visible-xs visible-sm">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mobile-menu">
                                <nav id="dropdown">
                                    <ul>
                                        <li><a href="index.html">Home</a>
                                            <ul>
                                                <li><a href="index.html">Homepage Version 1</a></li>
                                                <li><a href="index-2.html">Homepage Version 2</a></li>
                                                <li><a href="index-3.html">Homepage Version 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="blog.html">blog</a></li>
                                        <li><a href="shop.html">Shop</a>
                                            <ul>
                                                <li><a href="#">WOMEN CLOTH</a>
                                                    <ul>
                                                        <li><a href="shop.html">casual shirt</a></li>
                                                        <li><a href="shop.html">rikke t-shirt</a></li>
                                                        <li><a href="shop.html">mia top </a></li>
                                                        <li><a href="shop.html">muscle tee</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">MEN CLOTH</a>
                                                    <ul>
                                                        <li><a href="shop.html">casual shirt</a></li>
                                                        <li><a href="shop.html">rikke t-shirt</a></li>
                                                        <li><a href="shop.html">mia top </a></li>
                                                        <li><a href="shop.html">muscle tee</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">WOMEN JEWELRY</a>
                                                    <ul>
                                                        <li><a href="shop.html">necklace </a></li>
                                                        <li><a href="shop.html">chunky short striped</a></li>
                                                        <li><a href="shop.html">samhar cuff </a></li>
                                                        <li><a href="shop.html">nail set</a></li>
                                                    </ul>
                                                </li>                                           
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">Footwear </a></li>
                                        <li><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="about.html">about</a></li>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-2-column.html">blog 2 column</a></li>
                                                <li><a href="blog-full-width.html">blog full width</a></li>
                                                <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                                <li><a href="single-blog.html">single blog</a></li>
                                                <li><a href="single-blog-video.html">single blog video</a></li>
                                                <li><a href="cart.html">shopping cart</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                                <li><a href="contact.html">contact</a></li>
                                                <li><a href="login.html">login</a></li>
                                                <li><a href="shop.html">shop</a></li>
                                                <li><a href="product-details.html">product details</a></li>
                                                <li><a href="shop-full-width.html">shop full width</a></li>
                                                <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                <li><a href="404.html">404 error</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>
            <!-- mobile-menu-area end -->               
        </header>
</template>

<script>
import MyCart from "./navbar/MyCartComponent";
export default {
  name: "NavbarComponent",

  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    logged() {
      return this.$store.state.auth.authenticated;
    }
  },
  components: {
    MyCart
  }
};
</script>

<style lang="css" scoped>
</style>