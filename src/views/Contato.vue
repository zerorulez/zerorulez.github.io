<template>
  <div class="contato container">
    <div class="row">
      <!-- <div class="col-12 col-lg-6">
        <h1 class="mb-3">ENTRE EM CONTATO</h1>
        <form ref="form">
          <div class="form-group">
            <input type="text" class="form-control" id="nome" placeholder="Nome">
          </div>
          <div class="form-group">
            <input type="tel" class="form-control" name="telefone" id="telefone" placeholder="Telefone">
          </div>
          <div class="form-group">
            <textarea name="mensagem" class="form-control" id="mensagem" cols="30" rows="5" placeholder="Mensagem"></textarea>
          </div>
          <button type="submit" class="btn-white-border">ENVIAR</button>
        </form>
      </div>
      <div class="col-12 offset-lg-1 mt-5 mt-lg-0 col-lg-5 d-flex align-items-center" ref="text">
        <ul class="contato-list">
          <li>Se você gostou do meu trabalho, escreva pra mim.</li>
          <li></li>
          <li class="title">E-MAIL</li>
          <li>luc4s.rib3iro@gmail.com</li>
          <li></li>
          <li class="title">LOCALIZAÇÃO</li>
          <li>São Paulo, Brasil</li>
        </ul>
      </div> -->
      
      <div class="col-12" ref="text">
        <h1 class="mb-3">ENTRE EM CONTATO</h1>
        <ul class="contato-list">
          <li>Se você gostou do meu trabalho, escreva pra mim.</li>
          <li></li>
          <li class="title">E-MAIL</li>
          <li>luc4s.rib3iro@gmail.com</li>
          <li></li>
          <li class="title">LOCALIZAÇÃO</li>
          <li>São Paulo, Brasil</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
}
.form-control {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  border-radius: 0;
  color: white;
}
.contato-list {
  li {
    padding: 5px 0;
  }
  .title {
    font-weight: bold;
  }
}
</style>

<script>
import { gsap, Power1 } from "gsap"

export default {
  name: 'Contato',
  mounted() {
    const {form, text} = this.$refs
    gsap.from(text, .7, {
      y: 50,
      opacity: 0,
      ease: Power1.easeOut,
    })
    gsap.from(form, 1, {
      y: -10,
      opacity: 0,
      ease: Power1.easeOut,
    })
  }
}
</script>
