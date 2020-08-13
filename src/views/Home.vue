<template>
  <div class="home">
    <SignUpForm v-if="swap == 'sign'"></SignUpForm>
    <LoginForm v-else></LoginForm>
    <div class="swap-wrapper">
      <div v-if="swap == 'sign'" class="swap">
        <p>
          If you already have an account log-in
          <span @click="swapForms" class="link">here</span>.
        </p>
      </div>
      <div v-else class="swap">
        <p>
          If you don't have an account, register
          <span @click="swapForms" class="link">here</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from "@/components/SignUpForm.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Home",
  components: {
    SignUpForm,
    LoginForm
  },
  data() {
    return {
      swap: "sign"
    };
  },
  methods: {
    swapForms: function() {
      console.log("BALA");
      if (this.swap == "sign") {
        this.swap = "log";
      } else {
        this.swap = "sign";
      }
    }
  }
};
</script>

<style>
.home {
  background-image: url("../assets/cats.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.home .swap-wrapper {
  width: 60%;
  min-width: 350px;
  margin: 30px auto 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cbdcff;
}
.home .swap-wrapper .link {
  color: blue;
  cursor: pointer;
}
</style>
