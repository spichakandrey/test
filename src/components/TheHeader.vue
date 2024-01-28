<template>
  <header class="header">
    <nav class="nav">
      <div class="menu">
        <router-link to="/"><div class="menu__btn">HomePage</div></router-link>
        <router-link to="/about"><div class="menu__btn">About</div></router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  min-height: 60px;
  background-color: #ccc;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.logo {
  font-size: 25px;
  text-decoration: none;
}
.menu {
  display: flex;
}
.menu__btn {
  margin: 0 15px;
}
.router-link-active.router-link-exact-active {
  color: blue;
}
</style>
