<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 order-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <div class="terminal" ref="image">
            <div class="console">
              <span>></span>
              <span ref="underline">_</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7 d-flex align-items-center">
          <ul class="list">
            <li class="secondary-color hello-world">OLÁ MUNDO</li>
            <li class="about" ref="about">
              <h1>Meu nome é Lucas Ribeiro.<br />Eu sou um desenvolvedor do Brasil.</h1>
            </li>
            <li class="cta mt-4">
              <div class="button">
                <a href="#projetos" class="btn-white-border">MEUS PROJETOS</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/variables';
  .home-image {
   opacity: 0; 
  }
  .list {
    li {
      margin-bottom: 5px;
    }
    
    .hello-world {
      font-weight: bold;
    }

    .about {
      opacity: 1;
      
      h1 {
        font-size: 24px;
        margin-bottom: 0;
      }
    }
  }
  .terminal {
    border-radius: 15px;
    width: 180px;
    height: 150px;
    padding: 15px;
    background-image: linear-gradient(to right bottom, #5e5e5d, #565655, #4e4e4d, #464645, #3e3e3d, #393938, #333332, #2e2e2d, #2a2a29, #262625, #222221, #1e1e1d);
    color: $color;
    font-size: 35px;
    font-weight: bold;
  }
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { gsap, Power1, TimelineLite } from "gsap"

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  mounted() {
    const { about, image, underline } = this.$refs
    gsap.from(about, .7, {
      y: 50,
      opacity: 0,
      ease: Power1.easeOut,
    })
    gsap.from(image, 1, {
      y: -15,
      opacity: 0,
      ease: Power1.easeOut,
    })

    const timeline = new TimelineLite({repeat: -1})
    timeline.to(underline, .3, {
      alpha: 0,
    }).to(underline, .6, {
      alpha: 1,
    })

    
  },
  components: {
    // HelloWorld
  }
}
</script>
