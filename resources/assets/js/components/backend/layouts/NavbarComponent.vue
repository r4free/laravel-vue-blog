<template>
<nav class="navbar-default navbar-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
            <li class="text-center">
                <img src="admin/img/find_user.png" class="user-image img-responsive" />
            </li>

            <li>
                <a class="active-menu" href="index.html"><i class="fa fa-dashboard fa-3x"></i> Dashboard</a>
            </li>
            <!-- site -->
            <li>
                <router-link to="/"><i class="fa fa-desktop fa-3x"></i>Site</router-link>
            </li>

            <!-- category links -->
            <li>
                <router-link :to="{name:'admin.category.index'}">Categorias</router-link>
            </li>
            <!-- product links -->
            <li>
                <router-link :to="{name:'admin.product.index'}"><i class="fa fa-desktop fa-3x"></i>Produtos</router-link>
            </li>

          
            <li>
                <a href="ui.html"><i class="fa fa-desktop fa-3x"></i> UI Elements</a>
            </li>
            <li>
                <a href="tab-panel.html"><i class="fa fa-qrcode fa-3x"></i> Tabs & Panels</a>
            </li>
            <li>
                <a href="chart.html"><i class="fa fa-bar-chart-o fa-3x"></i> Morris Charts</a>
            </li>
            <li>
                <a href="table.html"><i class="fa fa-table fa-3x"></i> Table Examples</a>
            </li>
            <li>
                <a href="form.html"><i class="fa fa-edit fa-3x"></i> Forms </a>
            </li>

            <li>
                <a href="blank.html"><i class="fa fa-square-o fa-3x"></i> Blank Page</a>
            </li>
        </ul>

    </div>

</nav>
</template>

<script>
export default {
  name: "NavbarComponent",

  data() {
    return {};
  },
  computed: {},
  created() {}
};
</script>

<style lang="css" scoped>
</style>
