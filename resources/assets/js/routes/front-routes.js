import SiteApp from "../components/frontend/App";
import HomeComponent from "../components/frontend/pages/home/HomeComponent";
import AboutComponent from "../components/frontend/pages/about/AboutComponent";
import ShopComponent from "../components/frontend/pages/shop/ShopComponent";
import LoginComponent from "../components/frontend/pages/login/LoginComponent";

export default {
  name: "app",
  component: SiteApp,
  path: "/",
  text: "App",
  children: [
    /* SITE */
    { name: "home", component: HomeComponent, path: "/home" },
    { name: "about", component: AboutComponent, path: "/about" },
    { name: "shop", component: ShopComponent, path: "/shop" },
    { name: "login", component: LoginComponent, path: "/login" }
  ]
};
