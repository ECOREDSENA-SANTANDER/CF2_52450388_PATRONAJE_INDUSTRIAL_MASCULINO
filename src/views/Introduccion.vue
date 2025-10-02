<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.mb-cus-intro
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-3 La construcción de prendas masculinas requiere un proceso riguroso de elaboración de patrones base, fundamentado en principios técnicos del patronaje y la interpretación precisa de medidas. Se aborda de manera estructurada el trazado de patrones básicos para ropa masculina, incluyendo las tres prendas esenciales del vestuario: camisa, pantalón y chaqueta.
        .bg-color-1.p-4
          p.mb-0 El proceso inicia con el desarrollo del patrón superior masculino, seguido de la camisa básica y sus componentes técnicos: despieces, mangas, cuellos, puños, marcaciones y costuras, integrando criterios de industrialización.

    .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
      .col-sm-12.col-lg-7
        p.mb-3 Luego se desarrollan los pasos delanteros y posteriores del pantalón básico masculino, junto con sus respectivas marcaciones y detalles constructivos. Finalmente, se trabaja la chaqueta básica masculina, incorporando el diseño del cuerpo, la manga, los despieces y las costuras necesarias para su confección.
        .bg-color-2.p-4
          p.mb-0 Esta secuencia permite aplicar los fundamentos del patronaje masculino con enfoque técnico y de producción, garantizando precisión en el diseño, funcionalidad en la confección y calidad en el producto final.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')

    .bg-full-width.bg-fondo-1.mb-0(data-aos="fade-right")
        .p-full-width
          .row.justify-content-center.align-items-center           
            .col-lg-12
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/HBlkCNpU6_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Diseño y elaboración de patrones básicos de ropa masculina


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
