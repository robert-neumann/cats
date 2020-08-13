<template>
  <div class="sign-up-form">
    <div class="description">
      <img src="../assets/cute_cat.jpg" alt="Cute cat" />
      <h2 class="headline">CATPICS</h2>
      <h3>
        Login to your account to see your favourite cats.
      </h3>
    </div>
    <div class="oauth">
      <button class="btn-social">Continue with Google</button>

      <button class="btn-social">Continue with Facebook</button>
    </div>
    <div class="wrapper">
      <input type="text" v-model="email" placeholder="Your Email Address" />
    </div>
    <div class="wrapper">
      <input type="password" v-model="password" placeholder="Password" />
    </div>
    <button
      :disabled="password.length == 0 || email.length == 0"
      id="sign-up-btn"
      @click="authenticate"
    >
      Log-in
    </button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
    authenticate() {
      // Communicate with server.
      // Show errors or success.
      // Transition.
      this.$router.push("/feed");
    }
  },
  data() {
    return {
      password: "",
      email: ""
    };
  }
};
</script>

<style>
.sign-up-form {
  max-width: 400px;
  width: 80%;
  min-height: 500px;
  padding: 20px;
  margin: auto;
  font-family: sans-serif;
  background-color: rgba(191, 212, 255, 0.8);
  border-radius: 5px 20px 5px 20px;
}

.sign-up-form .description {
  color: grey;
}

.sign-up-form .description .headline {
  font-family: fantasy;
  font-size: 45px;
}

.sign-up-form .oauth {
  padding: 10px 0;
}

.sign-up-form .btn-social {
  width: 90%;
  padding: 15px;
  margin: 4px 2px;
  border-radius: 2px 10px 2px 10px;
  border: none;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  font-weight: 700;
}
.sign-up-form .btn-social {
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 10px;
  cursor: pointer;
}
.sign-up-form .btn-social:nth-child(odd) {
  background-image: url("../assets/google.png");
  background-color: white;
}
.sign-up-form .btn-social:nth-child(even) {
  background-image: url("../assets/facebook.png");
  background-color: #3c5a99;
  color: white;
}

.sign-up-form .wrapper {
  padding: 10px;
  position: relative;
}

.sign-up-form .wrapper input {
  width: 90%;
  margin: auto;
  padding: 10px;
  outline: blue;
  border: none;
}

.sign-up-form .wrapper input[type="text"]:focus {
  box-shadow: 3px 2px 3px 0px mediumpurple;
}

.sign-up-form .description {
  position: relative;
}

.sign-up-form .description h3 {
  font-size: 15px;
}

.sign-up-form .description img {
  width: 60px;
  border-radius: 100% 100% 100%;
  padding: 0 10px 20px;
}

.sign-up-form #sign-up-btn {
  width: 50%;
  min-width: 200px;
  background-color: #83abfc;
  border: none;
  color: white;
  padding: 15px;
  box-shadow: #83abfc;
  cursor: pointer;
  outline: none;
  border: none;
}
.sign-up-form #sign-up-btn:disabled {
  background-color: grey;
  cursor: not-allowed;
}
</style>
