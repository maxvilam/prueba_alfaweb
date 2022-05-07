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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async register() {
      const email = this.email;
      const password = this.password;

      console.log(email, password);
      if (this.email.trim() === "" || this.password.trim() === "") {
        this.error = "Todos los campos son requeridos";
        return;
      }
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
  },
};
</script>
