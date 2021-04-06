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
            <li class="secondary-color hello-world" ref="hello"><h1><strong>OLÁ MUNDO</strong></h1></li>
            <li class="about" ref="about">
              <h1>Meu nome é Lucas Ribeiro.<br />Eu sou um desenvolvedor do Brasil.</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/variables';
  .list {
    li {
      margin-bottom: 5px;
    }
    
    .hello-world {
      font-weight: bold;
      opacity: 0;
    }

    .about {
      opacity: 0;
      h1 {
        font-size: 20px;
        margin-bottom: 0;
      }
    }
  }
  .terminal {
    opacity: 0;
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
  props: ['section'],
  data() {
    return {
    }
  },
  mounted() {
    const { underline } = this.$refs

    const timeline = new TimelineLite({repeat: -1})
    timeline.to(underline, .3, {
      alpha: 0,
    }).to(underline, .6, {
      alpha: 1,
    })
    
  },
  watch: {
    section() {
      const { hello, about, image } = this.$refs
      if (this.section == 'home') {
        gsap.from(hello, .7, {
          y: 50,
          ease: Power1.easeOut,
        })
        gsap.to(hello, .7, {
          opacity: 1,
        })

        gsap.from(about, .7, {
          y: 50,
          delay: .2,
          ease: Power1.easeOut,
        })
        gsap.to(about, .7, {
          delay: .2,
          opacity: 1,
        })

        gsap.from(image, .7, {
          y: -50,
          ease: Power1.easeOut,
        })
        gsap.to(image, .7, {
          opacity: 1,
        })
        
      } else {
        gsap.to(hello, .7, {
          opacity: 0,
          ease: Power1.easeOut,
        })

        gsap.to(about, .7, {
          opacity: 0,
          ease: Power1.easeOut,
        })

        gsap.to(image, .7, {
          opacity: 0,
          ease: Power1.easeOut,
        })
      }
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
