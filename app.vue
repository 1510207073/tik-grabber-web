<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- 主要内容区域 -->
    <main class="flex-grow">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
// 配置默认的页面元信息
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - TikGrabber` : 'TikGrabber';
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'TikGrabber - A free download tool for getting TikTok videos'
    }
  ]
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  background-color: black;
  color: white;
}

/* 确保页面占满视口高度 */
#__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
