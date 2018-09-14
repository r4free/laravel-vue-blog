<template>
<div class="shop-breadcrumb">
    <ul>
        <li v-if="response.last_page>1">
            <a href="#" @click.prevent="changePage(response.current_page>1?response.current_page-1:response.current_page)">		&laquo;		</a>
        </li>
        <li>
            <a href="#" @click.prevent="changePage(response.fisrt_page)" v-if="response.last_page>1">		<i class="fa fa-angle-left"></i>		</a>
        </li>
        <li v-for="(page,index) in response.last_page" :key="index">
            <a href="#" @click.prevent="changePage(page)">{{page}}</a>
        </li>
        <li v-if="response.last_page>1">
            <a href="#" @click.prevent="changePage(response.last_page)">		<i class="fa fa-angle-right"></i>		</a>
        </li>
        <li v-if="response.last_page>1">
            <a href="#" @click.prevent="changePage(response.current_page<response.last_page?response.current_page+1:response.current_page)">		&raquo;		</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  props: {
    response: {}
  },
  methods: {
    changePage($page) {
      this.$emit("changePage", $page);
    }
  }
};
</script>
