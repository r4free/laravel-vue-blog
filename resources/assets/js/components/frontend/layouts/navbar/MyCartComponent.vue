<template>
<div class="my-cart">
    <div class="total-cart">
        <a href="cart.html">
    <i class="fa fa-shopping-cart"></i>
    <span>{{products.length}}</span>
</a>
    </div>
    <ul>
        <li v-for="(product,index) in products" :key="index">
            <div class="cart-img">
                <!-- <a href="#"><img alt="" src="site/img/cart/1.jpg"></a> -->
            </div>
            <div class="cart-info">
                <h4><a href="#">{{product.name}}</a></h4>
                <span>{{product.price}} <span> x 1</span></span>
            </div>
            <div class="del-icon" @click="removeProduct(product)">
                <i class="fa fa-times-circle"></i>
            </div>
        </li>
        <li class="cart-border">
            <div class="subtotal-text">Subtotal: </div>
            <div class="subtotal-price">{{total}}</div>
        </li>
        <li>
            <a class="cart-button" href="checkout.html">view cart</a>
            <a class="checkout" href="checkout.html">checkout</a>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.cart.products;
    },
    total() {
      let total = 0;
      this.$store.state.cart.products.map(a => {
        total += a.price;
      });
      return total;
    }
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    }
  }
};
</script>

