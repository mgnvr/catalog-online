import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const getDefaultStateLiked = () => {
  return {
    wishlistIds: []
  };
};

export default new Vuex.Store({
  namespaced: true,
  state: {
    games: [],
    wishlistIds: [],
    search: ""
  },
  plugins: [createPersistedState()],
  getters: {
    showGenres: state => selectedPlatform => {
      var filteredGames = state.games.filter(game => {
        return game.category == selectedPlatform;
      });
      var result = filteredGames.reduce((arr, { genre }) => {
        if (!arr.includes(genre)) {
          arr.push(genre);
        }
        return arr;
      }, []);
      return result;
    },
    showPCVRGames: state => (
      query,
      genre,
      isChild,
      isVeryChild,
      selectedSort
    ) => {
      var tmpArray = state.games.filter(game => {
        return (
          game.category == "pcvr" &&
          (genre == "все" || game.genre === genre) &&
          (!isChild || game.isChild) &&
          (!isVeryChild || game.isVeryChild) &&
          (query.length == 0 ||
            game.title.toLowerCase().includes(query) ||
            game.genre.includes(query) ||
            game.tag.includes(query))
        );
      });
      var filteredGames = [];
      if (selectedSort == "ascending") {
        filteredGames = tmpArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort == "descending") {
        filteredGames = tmpArray.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort == "bygenre") {
        filteredGames = tmpArray.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (selectedSort == "bytag") {
        filteredGames = tmpArray.sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        filteredGames = tmpArray;
      }
      return filteredGames;
    },
    showOQ2Games: state => (
      query,
      genre,
      isChild,
      isVeryChild,
      selectedSort
    ) => {
      var tmpArray = state.games.filter(game => {
        return (
          game.category == "oq2" &&
          (genre == "все" || game.genre === genre) &&
          (!isChild || game.isChild) &&
          (!isVeryChild || game.isVeryChild) &&
          (query.length == 0 ||
            game.title.toLowerCase().includes(query) ||
            game.genre.includes(query) ||
            game.tag.includes(query))
        );
      });
      var filteredGames = [];
      if (selectedSort == "ascending") {
        filteredGames = tmpArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort == "descending") {
        filteredGames = tmpArray.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort == "bygenre") {
        filteredGames = tmpArray.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (selectedSort == "bytag") {
        filteredGames = tmpArray.sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        filteredGames = tmpArray;
      }
      return filteredGames;
    },
    showPSVRGames: state => (
      query,
      genre,
      isChild,
      isVeryChild,
      selectedSort
    ) => {
      var tmpArray = state.games.filter(game => {
        return (
          game.category == "psvr" &&
          (genre == "все" || game.genre === genre) &&
          (!isChild || game.isChild) &&
          (!isVeryChild || game.isVeryChild) &&
          (query.length == 0 ||
            game.title.toLowerCase().includes(query) ||
            game.genre.includes(query) ||
            game.tag.includes(query))
        );
      });
      var filteredGames = [];
      if (selectedSort == "ascending") {
        filteredGames = tmpArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort == "descending") {
        filteredGames = tmpArray.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort == "bygenre") {
        filteredGames = tmpArray.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (selectedSort == "bytag") {
        filteredGames = tmpArray.sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        filteredGames = tmpArray;
      }
      return filteredGames;
    },
    showPS5Games: state => (
      query,
      genre,
      isChild,
      isLocalMultiplayer,
      selectedSort
    ) => {
      var tmpArray = state.games.filter(game => {
        return (
          game.category == "ps5" &&
          (genre == "все" || game.genre === genre) &&
          (!isChild || game.isChild) &&
          (!isLocalMultiplayer || game.isLocalMultiplayer) &&
          (query.length == 0 ||
            game.title.toLowerCase().includes(query) ||
            game.genre.includes(query) ||
            game.tag.includes(query))
        );
      });
      var filteredGames = [];
      if (selectedSort == "ascending") {
        filteredGames = tmpArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort == "descending") {
        filteredGames = tmpArray.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort == "bygenre") {
        filteredGames = tmpArray.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (selectedSort == "bytag") {
        filteredGames = tmpArray.sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        filteredGames = tmpArray;
      }
      return filteredGames;
    },
    showLikedGames: state => query => {
      return state.wishlist.filter(game => {
        return game.title.toLowerCase().includes(query);
      });
    },
    wishlist: state => query => {
      return state.games.filter(game => {
        return (
          (state.wishlistIds.includes(game.id) &&
            game.title.toLowerCase().includes(query)) ||
          (state.wishlistIds.includes(game.id) && game.genre.includes(query)) ||
          (state.wishlistIds.includes(game.id) && game.tag.includes(query))
        );
      });
    },
    showSimilarGamesByPlatform: state => (id, category, tag) => {
      return state.games.filter(game => {
        return (
          game.id !== id &&
          game.category === category &&
          game.tag == tag &&
          game.tag !== undefined
        );
      });
    },
    getGameById: state => id => {
      return state.games.find(game => {
        return game.id === id;
      });
    },
    showBackgrounds: state => theme => {
      if (theme === "все") {
        return state.backgrounds;
      } else {
        return state.backgrounds.filter(back => {
          return back.theme === theme;
        });
      }
    }
  },
  actions: {
    loadGames({ commit }) {
      axios
        .get("games.json")
        .then(r => r.data.games)
        .then(games => {
          commit("SET_GAMES", games);
        });
    }
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    SET_BACKGROUNDS(state, backgrounds) {
      state.backgrounds = backgrounds;
    },
    addGame(state, gameId) {
      if (!state.wishlistIds.includes(gameId)) {
        state.wishlistIds.push(gameId);
      }
    },
    removeGame(state, gameId) {
      var index = state.wishlistIds.indexOf(gameId);
      if (index !== -1) {
        state.wishlistIds.splice(index, 1);
      }
    },
    clearLikedGames(state) {
      Object.assign(state, getDefaultStateLiked());
    }
  }
});
