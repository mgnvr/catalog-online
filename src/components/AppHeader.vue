<template>
  <div v-once class="header">
    <div class="container container-header">
      <div v-if="currentRouteName !== 'home'" class="logo">
        <router-link tag="a" to="/" title="Вернуться на главную">
          <img :src="this.publicPath + 'assets/logo.png'" alt="" width="140px" height="auto" />
        </router-link>
      </div>
      <div v-else class="logo">
        <img :src="this.publicPath + 'assets/logo.png'" alt="" width="140px" height="auto" />
      </div>
      <div class="header-items">
        <p class="header-item">
          <img class="header-icon" :src="this.publicPath + 'assets/pin.svg'" alt="" width="20px" height="20px" />
          <span class="header-extra-info">Мы находимся: </span>
          Ленина, 83 | ТРК "Континент", 3 этаж
        </p>
        <p class="header-item">
          <img class="header-icon" :src="this.publicPath + 'assets/time.svg'" alt="" width="20px" height="20px" />
          <span class="header-extra-info">Мы работаем: ежедневно </span>
          с 10:00 до 21:00
        </p>
      </div>
      <div class="header-info">
        <a class="link header-tel" href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
        <a class="link header-vk" href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">Вк
        </a>
        <a class="link header-vk" href="https://t.me/+z1_HLSna-YVjZmJi" target="_blank" title="Мы в Телеграм">Тг
        </a>
        <router-link v-if="currentRouteName !== 'about'" class="link" tag="a" to="/about" title="О нас">О
          нас</router-link>
        <span v-else class="about-not-link">О нас</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
    currentRouteName() {
      return (this.$route.name);
    }
  }
}
</script>