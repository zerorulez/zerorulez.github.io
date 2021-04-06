<template>
  <div class="sobre container">
    <div class="row">
      <div class="col-12 col-lg-7 d-flex">
        <div class="wrapper">
          <h2 ref="name"><strong>Lucas Ribeiro</strong></h2>
          <p ref="about">Desde que comecei minha jornada como desenvolvedor há quase 10 anos, trabalhei para agências, consultei programadores experientes e colaborei com pessoas talentosas para criar produtos digitais para uso comercial e para consumidores. Sou naturalmente curioso e trabalho para resolver problemas, um de cada vez.</p>
          <!-- <div class="">
            <a class="btn-white-border mt-4" href="#contato">CONTATO</a>
          </div> -->
        </div>
      </div>
      <div class="col-12 offset-lg-1 col-lg-4 d-none d-md-block">
        <h3 class="mb-4 mt-5 mt-lg-0 text-center" ref="conhecimentos"><strong>CONHECIMENTOS</strong></h3>
        <ul class="tech-wrapper" ref="lista">
          <li class="tech-item">
            <!-- <img src="../assets/js.png" ref="image" alt="JavaScript Icon" class="img-fluid"> -->
            <p>Programação Orientada a Objetos (OOP)</p>
          </li>
          <li class="tech-item">
            <!-- <img src="../assets/js.png" ref="image" alt="JavaScript Icon" class="img-fluid"> -->
            <p>Design Patterns</p>
          </li>
          <li class="tech-item">
            <img src="../assets/js.png" ref="image" alt="JavaScript Icon" class="img-fluid">
            <p>JavaScript</p>
          </li>
          <li class="tech-item">
            <img src="../assets/node.png" ref="image" alt="Node.js Icon" class="img-fluid">
            <p>Node.js</p>
          </li>
          <li class="tech-item">
            <img src="../assets/vue.png" ref="image" alt="Vue Icon" class="img-fluid">
            <p>Vue</p>
          </li>
          <li class="tech-item">
            <img src="../assets/angular.png" ref="image" alt="Angular Icon" class="img-fluid">
            <p>Angular</p>
          </li>
          <li class="tech-item">
            <img src="../assets/php.png" ref="image" alt="PHP Icon" class="img-fluid">
            <p>PHP</p>
          </li>
          <li class="tech-item">
            <img src="../assets/laravel.png" ref="image" alt="Laravel Icon" class="img-fluid">
            <p>Laravel</p>
          </li>
          <li class="tech-item">
            <img src="../assets/db.png" ref="image" alt="Database Icon" class="img-fluid">
            <p>Banco de dados SQL e NoSQL</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    text-transform: uppercase;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    margin: 0;
  }
  .skill-list {
    text-align: center;
  }
  .tech-wrapper {
    .tech-item {
      display: flex;
      align-items: center;
      padding: 5px 0;

      img {
        max-width: 30px;
        max-height: 30px;
        margin-right: 15px;
      }
    }
  }
</style>

<script>
import { gsap, Power1 } from "gsap"

export default {
  name: 'Sobre',
  props: ['section'],
  mounted() {
  },
  watch: {
    section() {
      const {name, about, conhecimentos, lista} = this.$refs
      if (this.section == 'sobre') {
        gsap.from(name, .7, {
          y: 50,
          ease: Power1.easeOut,
        })
        gsap.to(name, .7, {
          opacity: 1,
          ease: Power1.easeOut,
        })

        gsap.from(about, .7, {
          y: 50,
          delay: .2,
          ease: Power1.easeOut,
        })
        gsap.to(about, .7, {
          opacity: 1,
          delay: .2,
          ease: Power1.easeOut,
        })

        gsap.from(conhecimentos, .7, {
          y: -50,
          delay: .2,
          ease: Power1.easeOut,
        })
        gsap.to(conhecimentos, .7, {
          opacity: 1,
          delay: .2,
          ease: Power1.easeOut,
        })

        gsap.from(lista, .7, {
          y: -50,
          ease: Power1.easeOut,
        })
        gsap.to(lista, .7, {
          opacity: 1,
          ease: Power1.easeOut,
        })
      } else {
        gsap.to(name, .7, {
          opacity: 0,
          ease: Power1.easeOut,
        })
        gsap.to(about, .7, {
          opacity: 0,
          ease: Power1.easeOut,
        })
        gsap.to(conhecimentos, .7, {
          opacity: 0,
          ease: Power1.easeOut,
        })
        gsap.to(lista, .7, {
          opacity: 0,
          ease: Power1.easeOut,
        })
      }
    }
  },
}
</script>
