<template>
  <div class="Logout">
    <button @click="doLogout" class="btn btn-danger">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    doLogout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>

