<template>
  <div id="app">
    <div id="nav">
      <button @click="toogleMenu()" class="hamburger hamburger--spin" v-bind:class="{ 'is-active': isActive }" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div class="menu" ref="background">
      <ul class="menu-list" ref="menu">
        <li class="menu-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/projetos">Projetos</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/sobre">Sobre</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </div>
    <div class="center-views">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&display=swap');
@import 'assets/css/variables';

#app {
  font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $background;
  color: $color;
  min-height: 100vh;

  ul {
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
  }
}

.center-views {
  padding: 59px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.btn-white-border {
  border: 3px solid $color;
  border-radius: 3px;
  padding: 7px 15px;
  color: $color;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  background-color: transparent;
  display: inline-block;
  font-weight: bold;
  &:hover {
    background-color: $color;
    color: $background;
    text-decoration: none;
  }
}

  .btn-project {
    border: none;
    border-radius: 3px;
    color: $secondary-color;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    background-color: transparent;
    display: inline-block;
    font-weight: bold;
    &:hover {
      color: $color;
    }
  }

.secondary-color { 
  color: $secondary-color;
}

#nav {
  padding: 5px;
  position: fixed;
  width: 100vw;
  text-align: right;
  z-index: 9999;
  
  .hamburger {
    .hamburger-box {
      width: 30px;
      height: 15px;
    }
    .hamburger-inner, .hamburger-inner:before, .hamburger-inner:after  {
      background-color: $color;
      width: 30px;
      height: 3px;
    }
  }
}

.menu {
  background-color: $background;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  position: fixed;
  z-index: 999;
  .menu-list {
    .menu-item {
      padding: 15px 0;
      a {
        color: $color;
      }

      // a {
      //   &.router-link-exact-active {
      //     color: $secondary-color;
      //   }
      // }
    }
  }
}

.VueCarousel-dot-container {
  margin-top: 0 !important;
}
</style>


<script>
import { gsap, Power1 } from "gsap"

export default {
  name: 'App',
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    const { menu, background } = this.$refs

    gsap.set(background, {
      opacity: 0,
      ease: Power1.easeOut,
      yPercent: -100
    })
    gsap.set(menu, {
      opacity: 0,
      ease: Power1.easeOut,
    })
  },
  methods: {
    toogleMenu() {
      this.isActive = !this.isActive;
      const { menu, background } = this.$refs

      if (this.isActive) {
        gsap.to(background, .4, {
          opacity: 1,
          ease: Power1.easeOut,
          yPercent: 0
        })
        gsap.to(menu, .8, {
          opacity: 1,
          ease: Power1.easeOut,
        })
      } else {
        gsap.to(background, .4, {
          opacity: 0,
          ease: Power1.easeOut,
          yPercent: -100
        })
        gsap.to(menu, .8, {
          opacity: 0,
          ease: Power1.easeOut,
        })
      }
    }
  },
  watch : {
    '$route' () {
      this.isActive = false;
      
      const { menu, background } = this.$refs

      gsap.to(background, .4, {
        opacity: 0,
        ease: Power1.easeOut,
        yPercent: -100
      })
      gsap.to(menu, .8, {
        opacity: 0,
        ease: Power1.easeOut,
      })
      
    }
  }
}
</script>
