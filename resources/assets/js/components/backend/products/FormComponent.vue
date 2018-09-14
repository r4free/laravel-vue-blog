<template>
	<form   role="form" @submit.prevent="submit()" enctype="multipart/form-data">
		<legend>Formulário de produto</legend>

		<div class="form-group" :class="{'has-error':errors.name?true:false}">
			<label for="">Nome</label>
			<input type="text" class="form-control" id="" placeholder="Nome do produto" name="name" required="required" v-model="item.name">
			<span class="text-danger" v-for="err in errors.name" >{{err}}</span>
		</div>

		<div class="form-group" :class="{'has-error':errors.category_id?true:false}">
			<label for="">Categoria {{item.category_id}}</label>
			<select class="form-control"  v-model="item.category_id" required="required" >
				<option v-for="category in categories" :value="category.id" >{{category.name}}</option>
			</select>
			<span class="text-danger" v-for="err in errors.category_id" >{{err}}</span>

		</div>
		<div v-if="imagePreview!=null">
			<img :src="imagePreview" alt="" class="img-responsive">
		</div>
		<div class="form-group" :class="{'has-error':errors.image?true:false}">
			<label for="">Imagem</label>
			<input type="file" class="form-control" id="" placeholder="Nome do produto" name="image"  @change="fileChange" >
			<span class="text-danger" v-for="err in errors.image" >{{err}}</span>
		</div>
		

		<div class="form-group">
			<label for="">Descrição</label>
			<textarea class="form-control" v-model="item.description" name="description"></textarea>

		</div>


		<button type="submit" class="btn btn-primary">Salvar</button>
	</form>
</template>

<script>
import Form from "../masters/Form";
export default {
  name: "FormComponent",
  extends: Form,
  data() {
    return {
      module: "product",
      imageUpload: null,
      imagePreview: null
    };
  },
  computed: {
    categories() {
      return this.$store.state.category.categories;
    }
  },
  created() {
    this.$store.dispatch("loadCategory", { page: 1, filter: "" });
  },
  methods: {
    fileChange(event) {
      let files = event.target.files || event.dataTranfer.files;

      if (files.length) {
        this.imageUpload = files[0];
        this.getImage(this.imageUpload);
      } else {
        this.$snotify.error("Não há arquivos selecionados", "Erros!");
      }
    },
    submit() {
      const action = this.edit
        ? `update${this.module.capitalize()}`
        : `create${this.module.capitalize()}`;
      const message = this.edit ? this.editMessage : this.createMessage;

      this.$store.dispatch("preloader");

      this.$store
        .dispatch(action, this.getFormData())
        .then(response => {
          this.modal
            ? this.$emit("submited")
            : this.$router.push({
                name: `admin.${this.$store.state.module}.index`
              });
          this.$snotify.success(message, "Sucesso!");
        })
        .catch(err => {
          this.$snotify.error(
            "parece que você esqueceu alguma coisa",
            "Erros!"
          );

          this.errors = err.response.data.errors;
        })
        .finally(() => {
          this.$store.dispatch("preloader");
        });
    },
    getFormData() {
      let data = new FormData();

      data.append("id", this.item.id);
      data.append("name", this.item.name);
      data.append("category_id", this.item.category_id);
      data.append("description", this.item.description);

      this.imageUpload
        ? data.append("image", this.imageUpload)
        : data.append("image", this.item.image);

      return data;
    },

    getImage(file) {
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = e => {
        this.imagePreview = e.target.result;
      };
    },
    getItem() {
      this.$store.dispatch("preloader");

      this.$store
        .dispatch(`get${this.module.capitalize()}`, this.edit)
        .then(response => {
          return response.data;
        })
        .then(response => {
          this.item = response;
          this.imagePreview = `/storage/products/${this.item.image}`;
        })
        .catch(err => {
          this.$router.go(-1);
          this.$snotify.error("Item não encontrado", "Erro");
        })
        .finally(() => {
          this.$store.dispatch("preloader");
        });
    }
  }
};
</script>

<style lang="css" scoped>
form {
  padding: 50px 0px;
}
</style>