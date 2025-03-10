<template>
  <div id="app">
    <keep-alive include="home">
      <router-view class="app" />
    </keep-alive>
  </div>
</template>
<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@font-face {
  font-family: "Montserrat";
  src: url("/catalog/font/Montserrat-Regular.woff2") format("woff2"),
    url("/catalog/font/Montserrat-Regular.woff") format("woff");
  font-weight: 400;
  font-display: fallback;
}

@font-face {
  font-family: "Montserrat";
  src: url("/catalog/font/Montserrat-Bold.woff2") format("woff2"),
    url("/catalog/font/Montserrat-Bold.woff") format("woff");
  font-weight: 700;
}

@font-face {
  font-family: "Montserrat";
  src: url("/catalog/font/Montserrat-ExtraBold.woff2") format("woff2"),
    url("/catalog/font/Montserrat-ExtraBold.woff") format("woff");
  font-weight: 900;
}

body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #fff;
  background: #210832;
  background: #070125;
  background: #0b0b26;
  background: #0e0e30;
  background: #111136;
  box-sizing: border-box;
  overflow-y: scroll;
}

#app {
  font-family: "Montserrat", sans-serif;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}

/* ::-webkit-scrollbar {
  display: none;
} */

section {
  flex-grow: 1;
}

.container {
  padding: 16px;
}

input,
select {
  width: 100% !important;
  font-family: "Montserrat", sans-serif !important;
}

.header {
  display: block;
  text-align: center;
  color: white;
}

.container-header .logo {
  text-align: left;
}

.container-header .logo,
.header-items {
  margin-bottom: 12px;
}

.header-info {
  justify-content: space-around;
}

.site-name {
  display: block;
  max-width: 400px;
  text-decoration: none;
  color: white;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: white;
}

p {
  line-height: 1.5;
}

.swiper {
  width: 100%;
  height: auto;
  user-select: none;
}

.swiper-pagination-bullet-active {
  background: #7e122d;
}

.frame-parent,
.swiper-slide-youtube {
  position: relative;
  padding: 0 0 56.25% 0;
  height: 0;
  overflow: hidden;
}

.frame-parent iframe,
.swiper-slide-youtube iframe {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* pointer-events: none; */
}

#youtube-slide {
  position: relative;
  padding: 0 0 56.25% 0;
  height: 0;
  overflow: hidden;
}

#player {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
}

.thumbs {
  margin-top: 8px;
}

.thumbs .swiper-slide {
  /* width: 25%;
  height: 100%; */
  opacity: 0.4;
  cursor: pointer;
}

.thumbs .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-video-thumb {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("/catalog/assets/youtube.svg");
  background-size: 35%;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-button-next,
.swiper-button-prev {
  display: none;
  width: 48px;
  height: 48px;
  color: #89253e;
  border-radius: 50%;
  transition: all .2s ease-out;
}

.gallery-swiper {
  position: relative;
}

.gallery-swiper .swiper-button-prev,
.gallery-swiper .swiper-button-next {
  margin-top: -96px;
}

@media(min-width: 992px) {
  .gallery-swiper .swiper-button-prev {
    left: -80px;
  }

  .gallery-swiper .swiper-button-next {
    right: -80px;
  }
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: rgba(255, 255, 255, 0.3);
  color: #7e122d;
  transition: all .2s ease-out;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 32px;
  font-weight: 900;
}

.swiper-button-next:after {
  margin-left: 4px;
}

.swiper-button-prev:after {
  margin-right: 4px;
}

@media (min-width: 768px) {

  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
  }
}

@media (min-width: 992px) {
  .gallery-swiper {
    width: 85%;
    max-width: 1160px;
    margin: 0 auto;
  }
}

.card {
  -webkit-touch-callout: none !important;
  -webkit-text-size-adjust: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  -webkit-user-select: none !important;
  user-select: none !important;
}

a.back-home {
  display: inline-block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  color: #ffffff;
  font-size: 14px;
  background-color: #89253e;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  transition: 0.3s linear;
  background-repeat: no-repeat;
  background-position: left center;
}

a.back-home:hover {
  color: #ffffff !important;
  background: #6e1e32;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  transition: 0.3s linear;
}

.vs-select__input,
.vs-input {
  font-size: 14px;
}

.vs-input {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 39px;
  width: auto;
  background: #000;
  color: grey;
}

.vs-input:focus {
  background: #000;
}

.vs-input-content {
  border-radius: 6px;
}

.vs-input-content label {
  color: white;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.3;
}

.select-genre-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.select-genre-container .vs-select-content:not(:last-child) {
  margin-right: 16px;
}

.vs-select__label--label {
  transform: translate(-6%, -28px) !important;
}

.vs-select__input {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.vs-select__label {
  font-size: 12px;
  cursor: pointer;
}

.vs-select {
  background: #000;
  border-radius: 6px;
}

.vs-select-content {
  width: 100%;
  max-width: none;
  margin-bottom: 16px;
}

.vs-select__input {
  background: #000;
  border-radius: 6px;
  color: grey;
}

.vs-select__option,
.vs-select__option.activeOption {
  padding: 12px;
  color: grey;
}

.vs-select__option.activeOption {
  color: #fff;
}

.vs-select__input:focus,
.vs-select__input:hover {
  transform: none;
  color: #fff;
  background: #000;
}

.vs-select__options.top {
  border-radius: 6px 6px 0 0;
}

.vs-select.top.activeOptions .vs-select__chips,
.vs-select.top.activeOptions .vs-select__input {
  border-radius: 0 0 6px 6px !important;
}

.vs-select.activeOptions .vs-select__chips,
.vs-select.activeOptions .vs-select__input {
  background: #000;
}

.vs-select__option:hover:not(:disabled) {
  color: #89253e;
}

.vs-select.activeOptions .vs-select__input {
  color: grey;
}

.vs-select__options {
  background: #000;
}

.container-select {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 16px;
  /* padding: 0; */
}

.select-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
}

.select-container,
.container-input {
  width: 100%;
}

.container-input {
  position: relative;
  margin-left: auto;
}

.container-input-only {
  margin-left: auto;
}

.vs-checkbox-label {
  font-size: 14px;
}

.vs-checkbox-con {
  width: 32px;
  border-color: #000;
  height: 32px;
}

.vs-checkbox-mask {
  top: 0;
  border-color: #000;
  border-radius: 4px;
}

.vs-checkbox:hover~.vs-checkbox-mask,
.vs-checkbox:active~.vs-checkbox-mask {
  background: #000 !important;
  border-color: #000;
}

.vs-checkbox-mask:before {
  border: 2px solid #89253e;
  border: none;
  border-color: #000;
  background: #000;
}

.vs-checkbox-mask:after {
  background: #89253e;
  border: none;
}

.vs-checkbox:checked:hover~.vs-checkbox-mask {
  box-shadow: none;
}

.container-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

/* Search Button */
.search-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 46px;
  height: 46px;
  transition: all 0.3s ease-in-out;
  opacity: 0.5;
}

.search-button::before {
  content: "";
  position: absolute;
  top: 32px;
  left: 14px;
  width: 0;
  height: 2px;
  background-color: grey;
  transform: rotate(-45deg);
  transform-origin: left bottom;
}

.search-button::after {
  content: "";
  position: absolute;
  bottom: 12px;
  right: 13px;
  width: 9px;
  height: 2px;
  background-color: grey;
  transform: rotate(45deg);
  transform-origin: right bottom;
}

.search-icon {
  position: absolute;
  display: block;
  top: 13px;
  left: 13px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: grey;
}

.search-button.active::before,
.search-button.active::after {
  width: 28px;
}

.search-button.active .search-icon {
  width: 0;
  height: 0;
  border-color: transparent;
}

.search-button::before,
.search-button::after,
.search-button .search-icon {
  transition: all 0.3s ease-in-out;
}

.search-button.active:hover {
  cursor: pointer;
}

.vs-input-content,
.container-input {
  position: relative;
}

.container-input {
  position: relative;
}

.wrapper {
  --auto-grid-min-size: 250px;
  display: grid;
  grid-template-columns: repeat(auto-fill,
      minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 12px;
  padding-top: 0;
}

.wrapper--empty {
  width: 100%;
  height: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@keyframes rotateHeart {
  from {
    transform: scale(1.1);
  }

  to {
    transform: scale(1);
  }
}

@keyframes hoverLoupe {
  from {
    transform: rotate(-5deg) translateY(-10px);
  }

  to {
    transform: rotate(0) translateY(0);
  }
}

.empty-heart,
.empty-loupe {
  user-select: none;
}

.empty-heart {
  animation: rotateHeart 1s alternate infinite;
}

.empty-loupe {
  transform-origin: 50% 50%;
  animation: hoverLoupe 2s alternate infinite;
}

p.empty-start {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

p.empty-start,
p.empty-offer {
  margin: 0;
}

.photo {
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 250px;
  cursor: pointer;
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 8px;
  transition: all 0.3s linear;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card:hover {
  box-shadow: 0 0 10px #000;
  box-shadow: 0 16px 24px 4px rgba(0, 0, 0, 0.5),
    0 6px 30px 5px rgba(0, 0, 0, 0.5), 0 8px 10px -5px rgba(0, 0, 0, 0.6);
  transition: all 0.3s linear;
}

.card__header {
  margin-bottom: auto;
}

.card__footer {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
}

.card-genre {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.15);
}

.card-genre,
.card-tag {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.card-tag {
  margin-left: 8px;
  margin-right: 8px;
}

.card-genre-coop {
  margin-left: auto;
}

.card-desc {
  margin-top: auto;
  padding: 12px;
}

h3.game-title {
  font-size: 20px;
}

h3.game-title,
p.game-desc {
  margin: 0;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

p.game-desc {
  margin-bottom: 12px;
}

/* .tabs {
  font-size: 16px;
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  border: 1px solid #89253e;
} */

.container--tabs {
  padding-left: 0;
}

.tabs-item {
  display: block;
  width: 25%;
  text-align: center;
}

.tabs-item a {
  color: #fff;
  display: block;
  padding: 1em 0;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  opacity: 0.8;
}

.tabs-item.active a {
  border-bottom: 3px solid #89253e;
  opacity: 1;
  -webkit-animation: tabs-ripple 0.2s linear forwards;
  animation: tabs-ripple 0.2s linear forwards;
}

.footer {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  /* margin-top: 24px; */
  margin-top: auto;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  color: white;
  border-top: 2px solid #000;
}

.about-link {
  cursor: pointer;
}

.copyright {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #ccc;
}

.uk-tab {
  margin-left: 0 !important;
  margin-bottom: 16px !important;
  border: 1px solid #89253e !important;
  border-radius: 4px;
  /* border-bottom: 1px solid #89253e !important; */
}

.uk-tab>li {
  padding: 4px !important;
}

.uk-tabs {
  padding-left: 0 !important;
  margin-left: 0 !important;
  border: 1px solid #89253e !important;
}

.uk-tab::before {
  border: none !important;
}

.uk-tab>*>a {
  padding: 12px 0 !important;
  font-size: 14px !important;
  font-weight: bold !important;
  color: #fff !important;
  opacity: 0.5 !important;
  border-radius: 4px;
}

.uk-tab>.uk-active>a {
  color: #fff !important;
  opacity: 1 !important;
  border-color: #89253e !important;
  border-width: 3px !important;
  background: #000;
  border: none;
}

.uk-tab>*>a:hover,
.uk-tab>*>a:focus {
  color: #89253e !important;
}

.uk-tab>.uk-active>a:hover,
.uk-tab>.uk-active>a:focus {
  color: #fff !important;
  cursor: inherit !important;
}

.uk-tab>* {
  padding: 0 !important;
}

h1,
.uk-h1,
h2,
.uk-h2,
h3,
.uk-h3,
h4,
.uk-h4,
h5,
.uk-h5,
h6,
.uk-h6 {
  font-family: inherit !important;
  font-weight: 900 !important;
  color: #fff !important;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
}

a:hover,
.uk-link:hover {
  color: white;
  text-decoration: none !important;
}

.uk-table {
  max-width: max-content;
  max-width: 100%;
}

table b {
  display: block;
  margin-bottom: 10px;
}

table li {
  padding: 4px 0;
}

.uk-table-striped>tr:nth-of-type(odd),
.uk-table-striped tbody tr:nth-of-type(odd) {
  background: #08082c !important;
  border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3) !important;

}

.container-search {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 50px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
}

.container-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.container-about,
.container-contactus {
  padding-left: 15px;
  padding-right: 15px;
}

.container.container-about,
.container.container-contactus {
  margin-bottom: 20px;
}

.about-not-link {
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
}

.desc {
  margin-bottom: 20px;
}

.game-video {
  min-height: 300px;
}

.game-name {
  margin-bottom: 0;
  font-size: 20px;
}

.like {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-left: auto;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.like>svg {
  width: 24px;
  height: 24px;
}

.like:active>svg {
  transform: scale(1.3);
  transition: all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.like svg path,
.liked svg path {
  opacity: 0.7;
  transition: opacity 0.3s ease-out;
}

.liked svg path {
  fill: #e2264d;
}

.like:hover svg path,
.liked:hover svg path {
  opacity: 1;
  transition: opacity 0.3s ease-out;
}

.label-genre {
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 10px;
}

.uk-select {
  margin-right: 10px;
  margin-bottom: 10px;
  color: #000;
  border: 1px solid #89253e;
}

.uk-select:hover {
  border-color: #6b1a2e;
  cursor: pointer;
}

.uk-select:not([multiple]):not([size]) {
  width: auto;
  height: auto;
  padding: 5px 30px 5px 10px;
}

.header-not-home {
  margin-bottom: 0;
}

.container-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
}

.header-item {
  margin: 0;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: normal;
}

.header-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 300px;
}

.header-extra-info {
  display: none;
}

.header-info>* {
  display: block;
}

.header-info .tel {
  margin: 0;
}

.link {
  padding: 8px;
  font-weight: 700;
  color: #fff;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.link,
.about-not-link {
  font-size: 14px;
}

/* Game Page Styles */

.splide {
  margin: 0 auto;
  margin-top: 24px;
}

.container.container-game {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 24px;
  padding: 32px 0;
}

.link--home {
  position: sticky;
  top: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  background: #89253e;
  border-radius: 4px;
  transition: background .3s ease-out;
  z-index: 100;
}

.link--home:hover {
  background: #681328;
  background: #7e122d;
  transition: background .3s ease-out;
}

.game-description img {
  border-radius: 4px;
}

.header-game-info {
  text-align: left;
}

.game-info {
  order: 1;
  /* width: 45%; */
}

.game-text {
  max-width: 1000px;
  line-height: 1.5;
}

.game-gallery {
  width: 55%;
}

/* About Page Style */

.about-header {
  margin-top: 24px;
  margin-bottom: 16px;
}

.platforms {
  margin: 48px 0;
}

p.about-text {
  max-width: 600px;
}

h2.platform-name {
  margin-top: 16px;
}

.platform {
  margin: 24px auto;
}

.platform--psvr .platform-img,
.platform--oq2 .platform-img {
  text-align: center;
}

.platform--psvr img,
.platform--oq2 img {
  max-width: 80%;
}

h1.game-title {
  margin-top: 24px;
  font-size: 32px;
}

.game-genre {
  font-weight: 700;
}

p.game-tag {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}

p.game-tag .card-genre {
  margin-left: 4px;
  font-size: 14px;
}

.vs-button {
  margin: 0;
  padding: 0 12px;
  border-radius: 4px;
}

.vs-button--flat {
  background: #89253e;
}

.vs-button--flat:hover {
  background: #611a2c;
}

.link:hover {
  color: #89253e !important;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.uk-table th {
  font-size: 16px;
  font-weight: bold;
}

.uk-table-striped>tr:nth-of-type(odd),
.uk-table-striped tbody tr:nth-of-type(odd) {
  background: rgba(255, 255, 255, 0.1);
}

.cell-rent {
  text-align: center;
}

.checkbox-items {
  display: flex;
}

.select-item {
  margin-bottom: 16px;
}

.select-item--child {
  margin-right: 10px;
}

.select-item--checkbox {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  margin-right: 16px;
}

.select-item--checkbox:last-child {
  margin-right: 0;
}

.feature-desc {
  margin-top: auto;
}

.feature-picture {
  margin-bottom: 10px;
}

.vue-back-to-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 5px;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.8);
}

.label-container {
  font-size: 15px;
}

.developer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  font-size: 12px;
  color: #ccc;
}

.developer a {
  margin-left: 8px;
}

@media (min-width: 350px) {
  .chromakey__polaroid-human {
    width: 140px;
    height: 140px;
  }
}

@media (min-width: 400px) {
  .chromakey__polaroid-human {
    width: 170px;
    height: 170px;
  }

  .vue-select-image__item {
    min-width: 30% !important;
  }
}

@media (min-width: 500px) {
  .chromakey__polaroid-human {
    width: 200px;
    height: 200px;
  }
}

@media (min-width: 600px) {
  .chromakey__polaroid-human {
    width: 250px;
    height: 250px;
  }
}

@media (min-width: 768px) {
  .chromakey {
    justify-content: space-between;
  }

  .chromakey__polaroid {
    width: 48%;
    margin: 0;
  }

  .chromakey__backgrounds {
    width: 50%;
  }

  .chromakey__polaroid-human {
    width: 150px;
    height: 150px;
  }

  .vue-select-image__wrapper {
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: scroll;
  }

  .vue-select-image__item {
    width: 45% !important;
  }
}

@media (min-width: 1024px) {
  .chromakey__polaroid-human {
    width: 180px;
    height: 180px;
  }

  .vue-select-image__item {
    width: 30% !important;
  }
}

@media (min-width: 1200px) {
  .chromakey__polaroid-back {
    border-bottom-width: 60px;
  }

  .chromakey__polaroid-human {
    width: 220px;
    height: 220px;
  }
}

@media only screen and (min-width: 1200px) {
  .vue-select-image__item {
    margin-left: 0 !important;
  }
}

@-webkit-keyframes shrink-bounce {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  33% {
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes shrink-bounce {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  33% {
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    border-color: #212121;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  33% {
    width: 0.2em;
    height: 0;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  100% {
    width: 0.2em;
    height: 0.5em;
    border-color: #212121;
    -webkit-transform: translate3d(0, -0.5em, 0) rotate(45deg);
    transform: translate3d(0, -0.5em, 0) rotate(45deg);
  }
}

@keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    border-color: #212121;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  33% {
    width: 0.2em;
    height: 0;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  100% {
    width: 0.2em;
    height: 0.5em;
    border-color: #212121;
    -webkit-transform: translate3d(0, -0.5em, 0) rotate(45deg);
    transform: translate3d(0, -0.5em, 0) rotate(45deg);
  }
}

@-webkit-keyframes tabs-ripple {
  0% {
    background: transparent;
  }

  50% {
    background: rgba(255, 255, 255, 0.05);
  }

  100% {
    background: transparent;
  }
}

@keyframes tabs-ripple {
  0% {
    background: transparent;
  }

  50% {
    background: rgba(255, 255, 255, 0.05);
  }

  100% {
    background: transparent;
  }
}

@media (min-width: 576px) {
  .container {
    padding: 24px;
  }

  .container-header {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .container-header .logo {
    margin-right: 0;
    width: 50%;
  }

  .header-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .header-info {
    margin-left: auto;
    margin-right: auto;
  }

  .select-container {
    justify-content: flex-start;
  }

  .select-genre-container {
    margin-bottom: 16px;
  }

  .vs-select-content {
    width: auto;
    margin-bottom: 0;
  }

  .select-item {
    margin-bottom: 0;
  }

  .container-input {
    width: auto;
  }

  .uk-tab>*>a {
    font-size: 16px !important;
  }

  .platform {
    display: flex;
    align-items: stretch;
    gap: 24px;
    max-width: 900px;
  }

  .platform-img {
    width: 35%;
  }

  .platform-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
  }

  .platform-desc {
    max-width: 405px;
  }

  .platform--oq2 .platform-img,
  .platform--ps5 .platform-img {
    order: 1;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 90% !important;
    margin: 0 auto;
  }

  .container-about {
    width: 90%;
  }

  .container-header,
  .container-select {
    padding-bottom: 0;
  }

  .container-header .logo,
  .header-items {
    margin-bottom: 0;
    width: 33%;
  }

  .header {
    margin-bottom: 16px;
  }

  .header-info {
    width: 33%;
    display: flex;
    flex-direction: row;
    margin: 0;
    flex-grow: 1;
  }

  .header-tel {
    width: 100%;
  }

  .select-container {
    flex-wrap: nowrap;
  }

  .select-genre-container {
    margin-bottom: 0;
    margin-right: 16px;
    width: 40%;
  }

  .container-contactus {
    width: 100%;
  }

  .game-video {
    min-height: 500px;
  }

  .game-name {
    font-size: 28px;
  }

  .container-header {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .header-items {
    align-items: center;
    text-align: center;
  }

  .header-info {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .header-info .tel {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin-bottom: 5px;
  }
}

@media (min-width: 992px) {
  .header-info {
    justify-content: flex-end;
  }

  .header-tel {
    width: auto;
  }

  .select-genre-container {
    width: auto;
  }

  .select-container,
  .container-input {
    width: auto;
  }
}

@media (min-width: 1024px) {
  .header-info>a:not(:last-child) {
    margin-right: 8px;
  }

  .header {
    margin-bottom: 32px;
  }

  .uk-tab {
    margin-bottom: 32px !important;
  }

  .game-platform {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }

  .header-info .tel {
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    margin-bottom: 0;
  }

  .agile__slide {
    height: 550px;
  }
}

@media (min-width: 1200px) {
  .select-container {
    margin-bottom: 0;
  }

  .header-icon {
    display: none;
  }

  .header-extra-info {
    display: inline;
  }

  .vue-back-to-top {
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 1600px) {
  .wrapper {
    --auto-grid-min-size: 350px;
  }

  .container-input {
    width: 300px;
  }

  .card {
    height: 300px;
  }

  .platforms {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .platform {
    flex-direction: column;
    width: 33.3333%;
  }

  h2.platform-name {
    margin-top: 0;
  }

  .platform-img {
    width: 60%;
  }

  .platform--psvr .platform-img {
    order: 0;
  }

  .platform-info {
    display: block;
    width: auto;
    margin-top: auto;
  }

  .video-veshalka {
    height: 720px;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    grid-gap: 18px;
    --auto-grid-min-size: 315px;
  }

  .card {
    height: 275px;
  }

  .card-desc {
    padding: 16px;
  }
}

@media (min-width: 2560px) {
  .wrapper {
    --auto-grid-min-size: 420px;
  }

  .card {
    height: 350px;
  }
}

@media (min-width: 3180px) {
  .wrapper {
    --auto-grid-min-size: 450px;
    grid-gap: 24px;
  }

  .card {
    height: 450px;
  }
}

@media (min-width: 3180px) {
  .wrapper {
    --auto-grid-min-size: 550px;
    grid-gap: 24px;
  }

  .card {
    height: 550px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .search-button {
    display: none;
  }

  .vs-checkbox-label {
    flex-shrink: 10;
    width: max-content;
  }

  .vs-select__input,
  .vs-checkbox-label,
  .vs-input-content label {
    font-size: 12px;
  }

  .container-input {
    width: 20%;
  }
}

@media (min-width: 768px) {
  .container-select {
    flex-wrap: nowrap;
  }

  .select-container {
    margin-bottom: 0;
  }

  .select-genre-container {
    width: 45%;
  }

  .select-item--checkbox {
    margin-right: 8px;
  }
}

@media (min-width: 1200px) {
  .select-genre-container {
    width: auto;
  }

  .vs-checkbox-label {
    flex-shrink: 10;
    width: max-content;
  }
}
</style>
