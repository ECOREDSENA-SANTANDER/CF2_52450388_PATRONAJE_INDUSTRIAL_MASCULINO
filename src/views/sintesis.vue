<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La elaboración de moldes para prendas masculinas inicia con la construcción del básico superior, seguido del desarrollo de la camisa, integrando la manga camisera, el puño y el cuello, junto con las marcaciones y costuras necesarias para su correcta confección. El proceso continúa con el trazado del pantalón, abordando en detalle las secciones del delantero y el posterior, así como las indicaciones de marcación e industrialización.
    p En la chaqueta masculina se trabajan los patrones del cuerpo y las mangas, considerando los despieces, costuras y ajustes requeridos para su ensamblaje técnico. También se incorpora la aplicación de correctivos al patrón base con base en los resultados obtenidos, asegurando precisión, funcionalidad y una adecuada adaptación a la silueta del usuario.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
