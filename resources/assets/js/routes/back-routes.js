import AdminApp from "../components/backend/App";
import CategoryComponent from "../components/backend/categories/CategoryComponent";
import CreateCategoryComponent from "../components/backend/categories/CreateCategoryComponent";
import EditCategoryComponent from "../components/backend/categories/EditCategoryComponent";

import ProductComponent from "../components/backend/products/ProductComponent";
import CreateProductComponent from "../components/backend/products/CreateProductComponent";
import EditProductComponent from "../components/backend/products/EditProductComponent";

export default {
  name: "admin",
  component: AdminApp,
  path: "/admin/",
  text: "Admin",
  name: "admin.index",
  meta: {
    auth: true
  },

  children: [
    /* ADMIN */
    {
      name: "admin.category.index",
      component: CategoryComponent,
      path: "/admin/categories",
      text: "Categorias",
      group: "category"
    },
    {
      name: "admin.category.create",
      component: CreateCategoryComponent,
      path: "/admin/categories/create",
      text: "Nova categoria",
      group: "category"
    },
    {
      name: "admin.category.edit",
      component: EditCategoryComponent,
      path: "/admin/categories/edit/:id"
    },

    {
      name: "admin.product.index",
      component: ProductComponent,
      path: "/admin/products",
      group: "product",
      text: "Produtos"
    },
    {
      name: "admin.product.create",
      component: CreateProductComponent,
      path: "/admin/products/create",
      group: "product",
      text: "Novo produto"
    },
    {
      name: "admin.product.edit",
      component: EditProductComponent,
      path: "/admin/products/edit/:id"
    }
  ]
};
