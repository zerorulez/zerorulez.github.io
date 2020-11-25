<template>
  <div class="projetos container">
    <div class="row">
      <div class="col-12">
        <carousel :per-page="1" :paginationColor="'#f9f9f9'" :paginationActiveColor="'#5e5e5d'">
          <slide>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-5 order-lg-2">
                  <div class="mockup-wrapper p-0 p-lg-3 mb-4 mb-lg-0" ref="image">
                    <img src="../assets/cdf-desktop.png" alt="Mockup Copa do Fundão Fortnite Desktop" class="img-fluid desktop d-block desktop">
                    <img src="../assets/cdf-mobile.png" alt="Mockup Copa do Fundão Fortnite Mobile" class="img-fluid desktop mobile d-none d-lg-block">
                  </div>
                </div>
                <div class="col-12 col-lg-7 d-flex align-items-center order-lg-1">
                  <ul class="projeto-list">
                    <li class="projeto-item">
                      <h1>COPA DO FUNDÃO FORTNITE</h1>
                    </li>
                    <li class="projeto-item" ref="about">
                      <p>Colaborei no desenvolvimento do site do campeonato de Fortnite chamado Copa do Fundão. Utilizando Vue para o front-end e Node.js como API no back-end.</p>
                    </li>
                    <li class="projeto-item">
                      <a href="https://cdf.gg/" target="_blank" class="btn-project">Ir para o site ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-5 order-lg-2">
                  <div class="mockup-wrapper p-0 p-lg-3 mb-4 mb-lg-0">
                    <img src="../assets/brmalls-desktop.png" alt="Mockup Brmalls Desktop" class="img-fluid desktop d-block desktop">
                    <img src="../assets/brmalls-mobile.png" alt="Mockup Brmalls Mobile" class="img-fluid desktop mobile d-none d-lg-block">
                  </div>
                </div>
                <div class="col-12 col-lg-7 d-flex align-items-center order-lg-1">
                  <ul class="projeto-list">
                    <li class="projeto-item">
                      <h1>SHOPPINGS BRMALLS</h1>
                    </li>
                    <li class="projeto-item">
                      <p>Colaborei no desenvolvimento dos sites de shoppings da BRMALLS. Utilizando Angular 6 para o front-end e Laravel como API no back-end.</p>
                    </li>
                    <li class="projeto-item">
                      <a href="https://www.shoppingtambore.com.br/" target="_blank" class="btn-project">Ir para o site ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-5 order-lg-2">
                  <div class="mockup-wrapper p-0 p-lg-3 mb-4 mb-lg-0">
                    <img src="../assets/mimmo-desktop.png" alt="Mockup mimmo Desktop" class="img-fluid desktop d-block desktop">
                    <img src="../assets/mimmo-mobile.png" alt="Mockup mimmo Mobile" class="img-fluid desktop mobile d-none d-lg-block">
                  </div>
                </div>
                <div class="col-12 col-lg-7 d-flex align-items-center order-lg-1">
                  <ul class="projeto-list">
                    <li class="projeto-item">
                      <h1>MIMMO</h1>
                    </li>
                    <li class="projeto-item">
                      <p>Desenvolvimento de todo o site do Mimmo. Utilizando Laravel para o front-end e back-end.</p>
                    </li>
                    <li class="projeto-item">
                      <a href="http://www.mimmo.com.br/" target="_blank" class="btn-project">Ir para o site ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-5 order-lg-2">
                  <div class="mockup-wrapper p-0 p-lg-3 mb-4 mb-lg-0">
                    <img src="../assets/anferplas-desktop.png" alt="Mockup anferplas Desktop" class="img-fluid desktop d-block desktop">
                    <img src="../assets/anferplas-mobile.png" alt="Mockup anferplas Mobile" class="img-fluid desktop mobile d-none d-lg-block">
                  </div>
                </div>
                <div class="col-12 col-lg-7 d-flex align-items-center order-lg-1">
                  <ul class="projeto-list">
                    <li class="projeto-item">
                      <h1>ANFERPLÁS</h1>
                    </li>
                    <li class="projeto-item">
                      <p>Desenvolvimento de todo o site da Anferplás. Utilizando HTML5 e CSS3 para o front-end e uma plataforma de e-commerce.</p>
                    </li>
                    <li class="projeto-item">
                      <a href="http://www.anferplas.com.br/" target="_blank" class="btn-project">Ir para o site ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-5 order-lg-2">
                  <div class="mockup-wrapper p-0 p-lg-3 mb-4 mb-lg-0">
                    <img src="../assets/memorias-desktop.png" alt="Mockup memorias Desktop" class="img-fluid desktop d-block desktop">
                    <img src="../assets/memorias-mobile.png" alt="Mockup memorias Mobile" class="img-fluid desktop mobile d-none d-lg-block">
                  </div>
                </div>
                <div class="col-12 col-lg-7 d-flex align-items-center order-lg-1">
                  <ul class="projeto-list">
                    <li class="projeto-item">
                      <h1>MEMÓRIAS DE CORETOS</h1>
                    </li>
                    <li class="projeto-item">
                      <p>Desenvolvimento de todo o site do Memórias de Coretos. Utilizando HTML5 e CSS3 para o front-end.</p>
                    </li>
                    <li class="projeto-item">
                      <a href="http://memoriasdecoretos.com.br/" target="_blank" class="btn-project">Ir para o site ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-transform: uppercase;
  font-weight: bold;
}
.mockup-wrapper {
  position: relative;
  .mobile {
    position: absolute;
    bottom: 5px;
    left: 5px;
    max-width: 80px;
    -webkit-box-shadow: 1px 1px 5px 6px rgba(0,0,0,.4);
    -moz-box-shadow: 1px 1px 5px 6px rgba(0,0,0,.4);
    box-shadow: 1px 1px 5px 6px rgba(0,0,0,.4);
  }
}
</style>

<script>
import { gsap, Power1 } from 'gsap'

export default {
  name: 'Projetos',
  mounted() {
    const {about, image} = this.$refs
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
  }
}
</script>
