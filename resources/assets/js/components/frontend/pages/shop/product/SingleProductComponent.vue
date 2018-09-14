<template>
<div class="col-md-4 col-sm-4">
    <div class="single-product">
        <div class="product-img">
            <a href="single-product.html">		
                <img :src="'/storage/products/'+product.image" alt="" v-if="product.image" />		
                <img :src="'/storage/products/10-07-2018-mais-um.png'" alt="" v-else />		
                <img class="secondary-img" src="img/product/2.jpg" alt="" />		</a>
            <span class="tag-line">new</span>
            <div class="product-action">
                <div class="button-top">
                    <a href="#" data-toggle="modal" data-target="#productModal"><i class="fa fa-search"></i></a>
                    <a href="#"><i class="fa fa-heart"></i></a>
                </div>
                <div class="button-cart">
                    <button @click="addProductToCart(product)"><i class="fa fa-shopping-cart"></i> add to cart</button>
                </div>
            </div>
        </div>
        <div class="product-content">
            <h3><a href="single-product.html">{{product.name}}</a></h3>
            <div class="price">
                <span>{{product.price}}</span>
                <span class="old">$90.11</span>
            </div>
        </div>
    </div>
</div>
</template>]
<script>
export default {
  props: {
    product: ""
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cartAddProduct", product);
    }
  }
};
</script>
<style lang="scss">
@media screen and (min-width: 380px) {
  .product-img {
    height: 200px;
  }
}
.product-img {
  img {
    width: 100%;
  }
}
</style>


