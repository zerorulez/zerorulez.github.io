<template>
  <div class="sobre container">
    <div class="row">
      <div class="col-12 col-lg-7 d-flex align-items-center">
        <div class="wrapper">
          <h1>Lucas Ribeiro</h1>
          <p ref="about">Desde que comecei minha jornada como desenvolvedor há quase 10 anos, trabalhei para agências, consultei programadores experientes e colaborei com pessoas talentosas para criar produtos digitais para uso comercial e para consumidores. Sou naturalmente curioso e trabalho para resolver problemas, um de cada vez.</p>
          <div class="d-none d-lg-block">
            <a class="btn-white-border mt-4" href="#contato">CONTATO</a>
          </div>
        </div>
      </div>
      <div class="col-12 offset-lg-1 col-lg-4" ref="tecnologias">
        <h3 class="mb-4 mt-5 mt-lg-0 text-center"><strong>TECNOLOGIAS</strong></h3>
        <ul class="tech-wrapper">
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
          <li class="tech-item">
            <img src="../assets/seo.png" ref="image" alt="SEO Icon" class="img-fluid">
            <p>SEO</p>
          </li>
        </ul>
        <!-- <carousel :per-page="1" :loop="true" :autoplay="true" :autoplayTimeout="2000" :paginationColor="'#f9f9f9'" :paginationActiveColor="'#5e5e5d'">
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/js.png" ref="image" alt="JavaScript Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                JavaScript
              </li>
            </ul>
          </slide>
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/node.png" ref="image" alt="Node.js Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                Node.js
              </li>
            </ul>
          </slide>
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/vue.png" ref="image" alt="Vue Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                Vue
              </li>
            </ul>
          </slide>
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/angular.png" ref="image" alt="Angular Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                Angular
              </li>
            </ul>
          </slide>
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/php.png" ref="image" alt="PHP Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                PHP
              </li>
            </ul>
          </slide>
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/laravel.png" ref="image" alt="Laravel Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                Laravel
              </li>
            </ul>
          </slide>
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/db.png" ref="image" alt="Database Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                Banco de dados<br />SQL e NoSQL
              </li>
            </ul>
          </slide>
          <slide>
            <ul class="skill-list">
              <li class="item">
                <img src="../assets/seo.png" ref="image" alt="SEO Icon" class="img-fluid">
              </li>
              <li class="item pt-2">
                Otimização de<br />Motor de Busca
              </li>
            </ul>
          </slide>
        </carousel> -->
        <div class="d-block d-lg-none mt-4">
          <a class="btn-white-border" href="#contato">CONTATO</a>
        </div>
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
    font-size: 18px;
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
        max-width: 40px;
        max-height: 40px;
        margin-right: 15px;
      }
    }
  }
</style>

<script>
import { gsap, Power1 } from "gsap"

export default {
  name: 'Sobre',
  mounted() {
    const {about, tecnologias} = this.$refs
    gsap.from(about, .7, {
      y: 50,
      opacity: 0,
      ease: Power1.easeOut,
    })
    gsap.from(tecnologias, 1, {
      y: -15,
      opacity: 0,
      ease: Power1.easeOut,
    })
  }
}
</script>
