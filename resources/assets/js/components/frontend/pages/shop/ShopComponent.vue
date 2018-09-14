<template>
<div>
    <div class="shop-area">
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-sm-12 col-xs-12">
                    <div class="shop-content">
                        <!-- Nav tabs -->
                        <ul class="shop-tab" role="tablist">
                            <li><span class="sorting-name"> View as:  </span></li>
                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-th" aria-hidden="true"></i></a></li>
                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i class="fa fa-th-list" aria-hidden="true"></i></a></li>
                        </ul>
                        <div class="short-by">
                            <span class="sorting-show"> Sort by:</span>
                            <select>		<option value="volvo">popularity</option>		<option value="saab">Default</option>		<option value="mercedes">average rating</option>		<option value="audi">newness</option>		<option value="audi">low to high</option>		<option value="audi">high to low</option>		</select>
                        </div>
                        <change-show @changeShow="changeShow"></change-show>
										
												<pagination :response="$store.state.product.products" @changePage="changePage"></pagination>
                     

                        <div class="clear"></div>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="home">
                                <div class="row">
                                    <!-- single-product start -->
                                    <product-single v-for="(product,index) in products" :product="product" :key="index" >

																		</product-single>
                                    <!-- single product end -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- right-sidebar start -->
                <sidebar></sidebar>
                <!-- right-sidebar end -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProductSingle from "./product/SingleProductComponent";
import Pagination from "../../layouts/PaginationComponent";
import ChangeShow from "../../layouts/TotalItemsShow";
import Sidebar from "./SidebarComponent";
export default {
  data() {
    return {
      params: {
        page: "1",
        filter: "",
        total: "9"
      }
    };
  },
  methods: {
    changePage(page) {
      this.params.page = page;
    },
    changeShow(total) {
      this.params.total = total;
    }
  },
  created() {
    console.log(this.$store.state.product.products.length);
    if (!this.$store.state.product.products.length) {
      this.$store.dispatch("loadProduct", this.params);
    }
  },
  computed: {
    products() {
      return this.$store.state.product.products.data;
    }
  },
  components: {
    ProductSingle,
    Pagination,
    ChangeShow,
    Sidebar
  },
  watch: {
    params: {
      handler(val) {
        this.$store.dispatch("loadProduct", this.params);
      },
      deep: true
    }
  }
};
</script>
