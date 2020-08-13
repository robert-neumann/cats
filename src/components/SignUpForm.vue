<template>
  <div class="sign-up-form">
    <div class="description">
      <img src="../assets/cute_cat.jpg" alt="Cute cat" />
      <h2 class="headline">CATPICS</h2>
      <h3 class="tagline">Your favourite cat pictures in one place.</h3>
      <h3>
        Register to see cats of all sizes and variety.
      </h3>
    </div>
    <div class="oauth">
      <button class="btn-social">Continue with Google</button>

      <button class="btn-social">Continue with Facebook</button>
    </div>
    <div class="wrapper">
      <input
        type="text"
        @keyup="validateEmail"
        v-model="email"
        placeholder="Your Email Address"
      />
      <div class="sign" v-if="formValidation.email == true">
        <img src="../assets/correct.png" alt="Correct" />
      </div>
    </div>
    <div class="wrapper">
      <input
        type="text"
        @keyup="validateName"
        v-model="name"
        placeholder="Your Full Name"
      />
      <div class="sign" v-if="formValidation.name == true">
        <img src="../assets/correct.png" alt="Correct" />
      </div>
    </div>
    <div class="wrapper">
      <input
        type="password"
        @keyup="validatePassword"
        v-model="password"
        placeholder="Password"
      />
      <div class="sign" v-if="formValidation.password == true">
        <img src="../assets/correct.png" alt="Correct" />
      </div>
    </div>
    <div class="wrapper">
      <input
        type="checkbox"
        v-model="checkbox"
        unchecked-value="false"
        @change="validateCheckbox"
        name="terms"
        id="terms"
      />
      <label for="terms"
        >By checking the box you accept our terms and conditions.</label
      >
    </div>
    <button
      @click="register"
      :disabled="
        formValidation.password == false ||
          formValidation.name == false ||
          formValidation.email == false ||
          formValidation.checkbox == false
      "
      id="sign-up-btn"
    >
      Sign up
    </button>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  methods: {
    validateEmail: function() {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.email)) {
        this.formValidation.email = true;
      } else {
        this.formValidation.email = false;
      }
    },
    validateName: function() {
      if (this.name.length > 3) {
        this.formValidation.name = true;
      } else {
        this.formValidation.name = false;
      }
    },
    validatePassword: function() {
      let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (re.test(this.password)) {
        this.formValidation.password = true;
      } else {
        this.formValidation.password = false;
      }
    },
    validateCheckbox: function() {
      if (this.checkbox) {
        this.formValidation.checkbox = true;
      } else {
        this.formValidation.checkbox = false;
      }
    },
    register: function() {
      //Check with the server.
      //Transition.
      this.$router.push("/confirm-registration");
    }
  },
  data() {
    return {
      formValidation: {
        email: false,
        name: false,
        password: false,
        checkbox: false
      },
      email: "",
      name: "",
      password: "",
      checkbox: ""
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

.sign-up-form .wrapper input:not([type="checkbox"]) {
  width: 90%;
  margin: auto;
  padding: 10px;
  outline: blue;
  border: none;
}

.sign-up-form .wrapper input[type="text"]:focus {
  box-shadow: 3px 2px 3px 0px mediumpurple;
}

.sign-up-form .wrapper .sign {
  position: absolute;
  width: 30px;
  z-index: 10;
  top: 10px;
  right: 10%;
}

.sign-up-form .wrapper .sign img {
  width: 100%;
}

.sign-up-form .wrapper input[type="checkbox"] {
  height: 15px;
  width: 15px;
  cursor: pointer;
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
  background-color: #4986ff;
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
