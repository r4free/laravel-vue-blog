<template>

</template>

<script>
export default {
  name: "Model",
  props: {},
  data() {
    return {
      params: {
        filter: "",
        page: 1,
        total: 10
      },
      module: "",
      response: {},
      module: "",
      errors: {},
      item: {},
      modal: false,
      edit: ""
    };
  },
  methods: {
    loadItems() {
      this.$store
        .dispatch(`load${this.module.capitalize()}`, this.params)
        .then(response => {
          this.response = response.data;
        });
    },
    search(filter) {
      this.filter = filter;
      this.loadItems();
    },
    changePage(page) {
      this.page = page;
    },
    deleteItem(id) {
      this.$snotify.error(
        "Items apagados não podem ser recuperados",
        "Deletar?",
        {
          timeout: 5000,
          showProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          buttons: [
            {
              text: "Sim",
              action: toast => {
                this.$store.dispatch("preloader");
                this.$snotify.remove(toast.id);
                this.$store
                  .dispatch(`delete${this.module.capitalize()}`, id)
                  .then(response => {
                    this.$snotify.success("Ok! Deletado com sucesso!");
                  })
                  .catch(err => {
                    this.$snotify.error(
                      "Algo deu errado, tente novamente",
                      "Erro!"
                    );
                    console.log(err);
                  })
                  .finally(() => {
                    this.loadItems();
                    this.$store.dispatch("preloader");
                  });
              }
            },
            {
              text: "Cancelar",
              action: toast => {
                console.log("Clicked: No");
                this.$snotify.remove(toast.id);
              },
              bold: true
            }
          ]
        }
      );
    },
    editItem(item, modalName = null) {
      this.edit = item;
      if (!this.modal) {
        this.$router.push({
          name: `admin.${this.module}.edit`,
          params: { id: id }
        });
      } else {
        this.showModal();
      }
    },
    createItem(modalName = null) {
      this.edit = "";
      if (!this.modal) {
        this.$router.push({ name: `admin.${this.module}.create` });
      } else {
        this.showModal();
      }
    },
    showModal(modalName = null) {
      this.$modal.show(modalName ? modalName : `modal-${this.module}`);
    },
    hideModal(modalName = null) {
      this.$modal.hide(modalName ? modalName : `modal-${this.module}`);
    }
  },
  created() {
    this.$store.dispatch("setModule", this.module.toLowerCase());
    this.$modal.name = `modal-${this.module}`;

    if (!this.create && !this.edit) {
      this.loadItems();
    }

    if (this.edit) {
      this.getItem();
    }
  },
  computed: {},
  watch: {
    page() {
      this.loadItems();
    }
  }
};
</script>

<style lang="css" scoped>
</style>