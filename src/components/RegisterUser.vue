<template>
  <div>
    <form action="#" @submit.prevent="register">
      <div class="form-group">
        <label for="correo">Correo</label>
        <input type="email" class="form-control" id="correo" v-model="email" />
      </div>
      <div class="form-group">
        <label for="contrasena">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="contrasena"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
    <div class="bg-danger" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    register() {
      console.log("Registrando usuario");
    },
  },
};
</script>

<style></style>
