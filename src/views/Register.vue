<template>
  <div class="Register">
    <form class="container text-left mt-5" @submit.prevent="doRegister">
      <div class="form-group">
        <label for="usernameInput">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputUsername"
          v-model="state.userData.username"
        />
        <small class="text-danger" v-if="v$.userData.username.$error">
          {{ v$.userData.username.$errors[0].$message }}
        </small>
      </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordInput"
          v-model="state.userData.password"
        />
        <small class="text-danger" v-if="v$.userData.password.$error">
          {{ v$.userData.password.$errors[0].$message }}
        </small>
      </div>
      <div class="form-group">
        <label for="confirmPasswordInput">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPasswordInput"
          v-model="state.userData.confirmPassword"
        />
        <small
          class="text-danger mt-3"
          v-if="v$.userData.confirmPassword.$error"
        >
          {{ v$.userData.confirmPassword.$errors[0].$message }}
        </small>
      </div>

      <button class="btn btn-info" type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "Login",
  setup() {
    const state = reactive({
      userData: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    });

    // const mustBeLearnVue = (value) => value.includes("learnVue");

    const rules = computed(() => {
      return {
        userData: {
          username: { required },
          password: {
            required,
            minLength: minLength(4),
          },
          confirmPassword: {
            required,
            sameAs: sameAs(state.userData.password),
          },
        },
      };
    });
    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$,
    };
  },

  methods: {
    async doRegister() {
      await this.$store
        .dispatch("addPeople", this.state.userData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      //   this.v$.$validate();
      //   if (!this.v$.$error) {
      //     console.log("successfull");
      //   } else {
      //     console.log("failed");
      //   }
    },
  },
};
</script>