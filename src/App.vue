<template>
  <div class="layout">
    <TheHeader />
    <main class="main">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
}
.main {
  flex: 1;
}
</style>


