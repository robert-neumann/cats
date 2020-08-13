<style media="screen">
.feed {
  width: 100%;
  margin-bottom: 50px;
}

.feed .menu {
  padding: 20px;
}

.picture-rows {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.picture-rows .picture {
  width: 30%;
  margin: 1%;
  transition: width 1s;
}

.cat-loading-btn {
  width: 50%;
  padding: 15px;
  margin: 50px auto;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgb(85, 119, 255);
  font-weight: bold;
  color: currentcolor;
}

@media only screen and (max-width: 600px) {
  .picture-rows .picture {
    width: 46%;
    margin: 1%;
    transition: width 1s;
  }
  .picture-rows .picture:first-child {
    width: 97.5%;
    margin: auto;
    padding: 1%;
  }
  .picture-rows .picture:last-child {
    width: 97.5%;
    margin: auto;
  }
}
</style>

<template>
  <div class="feed">
    <div class="menu">
      <h3>Search Settings</h3>
      <label for="gif">Gif</label>
      <input
        type="checkbox"
        @change="setTypes"
        name="gif"
        v-model="searchSettings.gif"
        value="gif"
      />
      <label for="gif">Png</label>
      <input
        type="checkbox"
        @change="setTypes"
        name="png"
        v-model="searchSettings.png"
        value="png"
      />
      <label for="gif">Jpg</label>
      <input
        type="checkbox"
        @change="setTypes"
        name="jpg"
        v-model="searchSettings.jpg"
        value="jpg"
      />
    </div>
    <div class="picture-rows">
      <img
        class="picture"
        v-for="cat in cats"
        :key="cat.id"
        :src="cat.url"
        alt="Picture of a cat."
      />
    </div>
    <button
      @click="loadMore"
      class="cat-loading-btn"
      v-if="showButton"
      type="button"
      name="button"
    >
      Get More Cats
    </button>
  </div>
</template>

<script>
export default {
  name: "Feed",
  components: {},
  data() {
    return {
      key: "b8b8e268-95a3-48d0-856c-9b5d6596025a",
      cats: [],
      searchSettings: {
        png: false,
        jpg: false,
        gif: false
      },
      page: 1,
      types: "",
      showButton: false
    };
  },
  async created() {
    let headers = { "x-api-key": this.key };
    var resp = await this.$api.get("?limit=40&page=1&order=desc", headers);
    this.cats = resp.data.map(cat => {
      return { id: cat.id, url: cat.url };
    });
    window.onscroll = function() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.showButton = true;
      }
    }.bind(this);
  },
  methods: {
    setTypes: async function() {
      let types = [];
      if (this.searchSettings.png) {
        types.push("png");
      }

      if (this.searchSettings.jpg) {
        types.push("jpg");
      }

      if (this.searchSettings.gif) {
        types.push("gif");
      }
      types = types.toString();
      this.types = types;
      let headers = { "x-api-key": this.key };
      var resp = await this.$api.get(
        "?limit=40&page=1&order=desc&mime_types=" + types,
        headers
      );
      this.cats = [
        ...new Set(
          resp.data.map(cat => {
            return { id: cat.id, url: cat.url };
          })
        )
      ];
    },
    loadMore: async function() {
      console.log("Sdasd");
      this.page += 1;
      let headers = { "x-api-key": this.key };
      var resp = await this.$api.get(
        "?limit=40&" +
          "page=" +
          this.page +
          "&order=desc&mime_types=" +
          this.types,
        headers
      );
      this.cats = [
        ...new Set(
          this.cats.concat(
            resp.data.map(cat => {
              return { id: cat.id, url: cat.url };
            })
          )
        )
      ];
      this.showButton = false;
    }
  }
};
</script>
