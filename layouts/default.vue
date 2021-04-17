<template>
  <div class="blog__article--over-image">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <!-- <nuxt-link class="navbar-item" to="/">
            <img src="/bulma.png" alt="Logo" />
          </nuxt-link> -->
          <div
            class="navbar-brand navbar-item is-size-4 is-outlined has-text-weight-semibold"
          >
            <!-- <a
              href="https://over-road.com/"
              class="button is-primary is-outlined"
            >
              WEBサイトへ
            </a> -->
            <a
              href="/"
              class="button is-primary is-outlined"
            >
              Home
            </a>
          </div>
          <span class="navbar-burger burger" v-on:click="toggleNavbar">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div :class="['navbar-menu', navbarOpen && 'is-active']">
          <div class="navbar-end">
            <nuxt-link
              class="navbar-item is-active is-size-5 has-text-weight-semibold"
              to="/"
            >
              Home
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>

    <nuxt />

    <footer class="footer">
      <!-- <div class="content has-text-centered">
        <p>
          <strong>Bulma - Blog theme</strong> by
          <a href="https://gonzalojs.com">Gonzalo Gutierrez</a>. Based on the
          <a href="http://jigsaw-blog-staging.tighten.co/">jigsaw-blog</a>. The
          source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
        </p>
      </div> -->
      <div class="content has-text-centered">
        <p>
          <strong>Nuxt + Bulma Blog </strong> by Tsuyoshi Koike
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarOpen: false
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    }
  }
}
</script>

<style>
nav.navbar {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
}
/* https://help.groupthought.com/article/644-blogs-change-background-color-of-blog-post */
.blog__article--over-image { background-color: #f1f1f1; }
</style>
