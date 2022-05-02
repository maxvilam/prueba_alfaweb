<template>
  <div class="home">
    <section class="mb-3">
      <h2 class="ml-3">Ingreso usuario</h2>
      <b-form-input class="mb-3" v-model="text" placeholder="ingrese correo"
        >Usuario</b-form-input
      >
      <b-form-input v-model="text" placeholder="Ingrese contraseña"
        >Contraseña</b-form-input
      >
    </section>

    <b-button variant="danger">ingresar</b-button>
    <h3>Eres nuevo, crea tu cuenta <a href="">Aquí</a></h3>
    <RegisterUser :msg="saludos" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterUser from "@/components/RegisterUser.vue";

export default {
  name: "HomeView",
  data() {
    return {
      saludos: "Hola Mundeque",
    };
  },
  components: {
    RegisterUser,
  },
};
</script>
