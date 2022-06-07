<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/about">About</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/profile" v-if="$store.state.isAuthenticated"
                >Profile</router-link
              >
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/signup" v-if="!$store.state.isAuthenticated"
                >Sign up</router-link
              >
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/login" v-if="!$store.state.isAuthenticated"
                >Login</router-link
              >
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/logout" v-if="$store.state.isAuthenticated"
                >Logout</router-link
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>