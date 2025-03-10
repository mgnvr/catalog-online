<template>
  <div>
    <AppHeader></AppHeader>
    <div class="container container-about">
      <router-link tag="a" class="link link--home" to="/" title="Вернуться на главную">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z"
            fill="#4d1523" />
        </svg>
      </router-link>
      <h1 class="about-header">О нас</h1>
      <p class="about-text">
        DriV3R - это то место, где Вы пересекаете грань реальности, оказываетесь в совершенно новых мирах и становитесь
        их
        частью, а не только наблюдателями.</p>
      <p class="about-text">
        У нас Вы сможете испытать самые последние технологии, которые используются для погружения в виртуальную
        реальность.
      </p>

      <div class="platforms">
        <!-- <div class="platform platform--htc">
          <div class="platform-img">
            <img :src="this.publicPath + 'assets/htc.png'" alt="HTC" width="100%" height="auto" />
          </div>
          <div class="platform-info">
            <div class="platform-info-wrapper">
              <h2 class="platform-name">HTC Vive</h2>
              <p class="platform-desc">Прими участие в гладиаторских сражениях, стань главным героем боевика, примерь
                костюм
                супергероя, останови зомби-апокалипсис, покатайся на американских горках и многое другое.</p>
              <p class="platform-count-games">
                Игр на платформе: {{ this.$store.state.games.filter(game => game.category === 'htc').length }}
              </p>
            </div>
          </div>
        </div> -->
        <div class="platform platform--oq2">
          <div class="platform-img">
            <img :src="this.publicPath + 'assets/oq2.png'" alt="Oculus Quest 2" width="100%" height="auto" />
          </div>
          <div class="platform-info">
            <div class="platform-info-wrapper">
              <h2 class="platform-name">Oculus Quest 2</h2>
              <p class="platform-desc">Система виртуальной реальности Oculus Quest 2 отличается возможностью автономного
                использования. Также на платформе представлены эксклюзивные игры во вселенной Star Wars и др.</p>
              <p class="platform-count-games">
                Игр на платформе: {{ this.$store.state.games.filter(game => game.category === 'oq2').length }}
              </p>
            </div>
          </div>
        </div>
        <div class="platform platform--psvr">
          <div class="platform-img">
            <img :src="this.publicPath + 'assets/psvr.png'" alt="PSVR" width="100%" height="auto" />
          </div>
          <div class="platform-info">
            <div class="platform-info-wrapper">
              <h2 class="platform-name">PlayStation VR</h2>
              <p class="platform-desc">PlayStation VR вместе с PlayStation 5 и рулевой установкой позволяет
                почувствовать
                себя участником настоящей гонки с болельщиками на трибунах, и проработанной до мельчайших деталей
                природой.</p>
              <p class="platform-count-games">
                Игр на платформе: {{ this.$store.state.games.filter(game => game.category === 'psvr').length }}
              </p>
            </div>
          </div>
        </div>
        <div class="platform platform--ps5">
          <div class="platform-img">
            <img :src="this.publicPath + 'assets/ps5.png'" alt="PS5" width="100%" height="auto" />
          </div>
          <div class="platform-info">
            <div class="platform-info-wrapper">
              <h2 class="platform-name">PlayStation 5</h2>
              <p class="platform-desc">Консоль Sony PlayStation 5 даст вам лучший игровой опыт с передовой графикой
                последнего поколения. Предусмотрена возможность локального кооператива или игра по сети на несколько
                человек.</p>
              <p class="platform-count-games">
                Игр на платформе: {{ this.$store.state.games.filter(game => game.category === 'ps5').length }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe class="video-veshalka"
        src="https://vk.com/video_ext.php?oid=-68399984&id=456239162&hash=ddc772ca94cd0b29&hd=2" width="100%"
        height="480" allow="encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
      <h2>Прайс</h2>
      <table class="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>OQ2 / PSVR</th>
            <th>PS4 Pro / PS5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 мин - 350₽</td>
            <td>15 мин - 100₽</td>
          </tr>
          <tr>
            <td>20 мин - 550₽</td>
            <td>30 мин - 150₽</td>
          </tr>
          <tr>
            <td>30 мин - 600₽</td>
            <td>60 мин - 300₽</td>
          </tr>
          <tr>
            <td>60 мин - 800₽</td>
            <td>120 мин - 550₽</td>
          </tr>
          <tr>
            <td>120 мин - 1300₽</td>
            <td>безлимит - 1300₽</td>
          </tr>
          <tr>
            <td>1 заезд в шлеме - 200₽</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="4" class="cell-rent">Аренда центра - 3000₽/час</td>
          </tr>
        </tbody>
      </table>
      <h2>Мы Вконтакте</h2>
      <p>Конкурсы, акции, новости игровой индустрии в нашей группе ВКонтакте. Подпишись! 😉</p>
      <div id="vk_groups"></div>
      <h2>Как проехать</h2>
      <p>Мы находимся по адресу: г. Магнитогорск, ул. Ленина, 83 | ТРК "Континент", 3 этаж, рядом с залом игровых
        автоматов
        Sky Game | тел. 8-9000-93-93-92</p>
      <div id="2gisWidget"></div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "about",
  components: { AppHeader, AppFooter },
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL
    };
  },
  mounted() {
    VK.Widgets.Group(
      "vk_groups",
      { mode: 4, wide: 1, height: "400" },
      19336666
    );

    DG.FloorsWidget.init({
      container: "2gisWidget",
      width: "100%",
      height: "400px",
      initData: {
        complexId: "3659703978840901",
        options: {
          initialFloor: "3",
          initialFirm: "70000001028584133",
          initialZoom: "18"
        }
      }
    });
  }
};
</script>
