<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Pantalón básico masculino
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El pantalón básico masculino es el patrón base a partir del cual se desarrollan múltiples variaciones de diseño. Este molde se caracteriza por su estructura simple y funcional, sin ningún tipo de detalle adicional como bolsillos, pinzas decorativas, pretina anatómica u otros elementos propios de diseños más complejos. Su objetivo principal es establecer una base técnica precisa que permita ajustes y transformaciones posteriores, facilitando la interpretación de diferentes estilos de pantalones, como los de vestir, casuales, tipo cargo o deportivos.

      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 29.] Pantalón clásico
      figure.mb-5(data-aos='fade-right')
          img(src='@/assets/curso/temas/t2/2.svg', alt='Ilustración de pantalón masculino: vista frontal, trasera y diseño técnico.')
          figcaption.mb-0 Fuente: SENA, (2019)
      .bg-full-width.bg-color-10.mb-5(data-aos='fade-right')
        .p-full-width-1
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/3.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Para la elaboración del patrón básico del pantalón masculino se requiere una serie de medidas antropométricas fundamentales, que permiten ajustar el trazo a la morfología del cuerpo masculino de forma estandarizada. Estas medidas son tomadas del cuadro de tallas y medidas normalizadas, garantizando coherencia en los procesos de patronaje e industrialización.
      
      p.mb-5(data-aos='fade-right') Las medidas necesarias para el trazo del pantalón básico masculino incluyen, entre otras:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-3.col-lg-3.mb-cus
          .bg-color-9.p-4.br-2.hcard-4
            p.mb-0.text-center Contorno de cintura
        .col-sm-12.col-md-3.col-lg-3.mb-cus
          .bg-color-11.p-4.br-2.hcard-4
            p.mb-0.text-center Contorno de cadera
        .col-sm-12.col-md-3.col-lg-3.mb-cus
          .bg-color-11.p-4.br-2.hcard-4
            p.mb-0.text-center Largo total del pantalón
        .col-sm-12.col-md-3.col-lg-3
          .bg-color-9.p-4.br-2.hcard-4
            p.mb-0.text-center Tiro (delantero y posterior)
      .row.justify-content-center.mb-5
        .col-sm-12.col-md-4.col-lg-3.mb-cus
          .bg-color-11.p-4.br-2.hcard-5
            p.mb-0.text-center Largo de rodilla
        .col-sm-12.col-md-4.col-lg-3.mb-cus
          .bg-color-9.p-4.br-2.hcard-5
            p.mb-0.text-center Largo de entrepierna
        .col-sm-12.col-md-4.col-lg-3
          .bg-color-11.p-4.br-2.hcard-5
            p.mb-0.text-center Ancho de bota
      
      
      p.mb-5(data-aos='fade-right') Para efectos de ejemplificación, se toma como referencia la talla M / 38, cuyas dimensiones están detalladas en la Tabla 2 correspondiente al cuadro de tallas normalizado. Esta talla representa una medida promedio, útil para enseñar y practicar los procedimientos de patronaje antes de realizar adaptaciones personalizadas según el cliente o usuario final.
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .titulo-sexto.color-primario
              p.mb-0 #[b Tabla 2.] Medidas para desarrollo de pantalón T M / 38
          .tabla-a.table-wcus-2.color-primario.mb-5 
            table.w-50(alt='Tabla con medidas base para trazar pantalón masculino T M / 38: cintura, cadera, largo, tiro y bota.')
              caption Fuente: SENA, (2019)
              thead
                tr
                  th Medida
                  th Cantidad total
                  th Contorno dividido en
                  th Medida a aplicar al patrón
              tbody
                tr
                  td Contorno de cintura
                  td 81 cm
                  td 1/4
                  td 20.25 cm

                tr
                  td Contorno de cadera
                  td 96.5 cm
                  td 1/4
                  td 24.12 cm

                tr
                  td Largo de pantalón
                  td 107 cm
                  td N/A
                  td N/A

                tr
                  td Tiro
                  td 26 cm
                  td N/A
                  td N/A

                tr
                  td Bota
                  td 22.5 cm
                  td N/A
                  td N/A
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png', alt='')
      
      
      
      
      
      
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Pasos delanteros
      p.mb-5(data-aos='fade-right') A continuación, se describen los pasos para la construcción del patrón de la parte delantera del pantalón:
      .bg-full-width.bg-color-6.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-fondo-3.p-5
            SlyderA(tipo="b")
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b a)] Trazar un rectángulo cuya altura corresponda al largo del tiro y cuyo ancho sea igual a la cuarta parte del contorno de cadera.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 30.] Trazo delantero de pantalón
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/5.svg', alt='Rectángulo de 24 cm de ancho por 26 cm de alto, base para el trazo del pantalón.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b b)] Trazar una línea paralela a la línea de cintura a 18 cm hacia abajo (altura de cadera). 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 31.] Líneas base para trazo del pantalón
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/6.svg', alt='Rectángulo con líneas guía para cintura, cadera y tiro, con altura de cadera.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b c)] Para sacar la profundidad de tiro, hacia la derecha se divide el contorno total de cadera de la siguiente forma: 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 32.] Fórmula profundidad de tiro
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/7.svg', alt='Fórmula para el tiro del pantalón.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b d)] El resultado de la aplicación de la fórmula se debe extender prolongando los 6 cm, sobre la línea de tiro hacia la derecha.
                    p.mb-3 #[b e)] Trazar una línea en diagonal a 45°, que mida 2.8 cm, la cual sirve como punto referente para trazar la curva de tiro. Luego, trazar la curva con ayuda del sismómetro o el curvígrafo.
                    p.mb-0 Los pasos descritos se pueden plasmar en la siguiente figura:
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 33.] Curva de tiro
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/8.svg', alt='Guía en ángulo de 45° y 2.5 cm para trazar la curva del tiro del pantalón delantero.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b f)] Desde el ángulo formado por el centro frente y la línea de cintura, ingresar 0.5 cm hacia la izquierda y unir ese punto con el costado mediante una línea recta. Luego, desde el nuevo punto del centro frente sobre la línea de cintura, marcar la medida correspondiente a la cuarta parte del contorno de cintura (20.25 cm) y elevar 0.5 cm.
                    p.mb-0 #[b g)] Unir este punto con la intersección de la altura de cadera y el costado mediante una curva suave, como se ilustra en la figura siguiente.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 34.] Trazado de cintura y costado del delantero
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/9.svg', alt='Dibujo técnico que ilustra el trazado de la curva de cintura y costado del pantalón delantero.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b h)] La línea de aplome se ubica en la mitad de la línea de tiro, incluyendo la medida de la profundidad de tiro y se escuadra hacia arriba hasta tocar la cintura y luego hacia abajo, completando el largo total del pantalón (80 cm).
                    p.mb-3 #[b i)] Ubicar la línea de rodilla, en la mitad entre la altura de tiro y la bota. Luego subir 5 cm sobre la línea, para ubicar la línea de rodilla.
                    p.mb-0 #[b j)] En la bota, escuadrar hacia cada lado 11 cm para el ancho de la bota y en la línea de rodilla escuadrar 12 cm para el ancho de rodilla:  
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 35.]  Distribución de líneas guía en el pantalón delantero
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/10.svg', alt='Diagrama con líneas guía del pantalón masculino delantero, mostrando altura de tiro, rodilla y bota con medidas de 12 cm a cada lado y 5 cm de subida en la rodilla.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                   p.mb-0 #[b k)]	Por último, unir en curva suave la entrepierna y el costado y en línea recta los dos lados de la bota. 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 36.] Molde delantero pantalón masculino
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/11.svg', alt='Molde del delantero del pantalón masculino.')
                      figcaption.mb-0 Fuente: SENA, (2019)












      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Pasos posteriores
      p.mb-5(data-aos='fade-right') El patrón de la parte posterior del pantalón se traza sobre el delantero, asegurando que la línea de aplome sea la misma en ambas piezas para evitar que la prenda se tuerza. Se recomienda utilizar un color diferente para trazar el posterior, lo que facilitará su identificación al momento de realizar los despieces.
      .bg-full-width.bg-color-6.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-fondo-3.p-5
            SlyderA(tipo="b")
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b a)] Para iniciar, es necesario ampliar la medida de la bota y la rodilla entre 1 y 2 cm hacia cada lado, como se identifica en la figura siguiente.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 37.]  Ajuste de bota y rodilla en posterior
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/13.svg', alt='Ilustración del ensanche de 1 a 2 cm en bota y rodilla para el patrón posterior del pantalón.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b  b)] En la parte superior, desde el ángulo formado por la cintura y el centro frente, trasladar 6 cm hacia la izquierda (correspondientes al tiro delantero) y, desde ese punto, escuadrar una línea de 3.5 cm hacia arriba.
                    p.mb-3 #[b  c)] Desde el ángulo entre el centro frente y la línea de tiro, marcar 0.5 cm hacia la izquierda y unir con línea recta al punto previamente ubicado.
                    p.mb-0 #[b  d)] Para definir la cintura, trazar una línea horizontal desde el ángulo cintura / costado y prolongarla hacia la izquierda. Luego, aplicar la medida correspondiente a la cintura (¼ del contorno de cintura más 2 cm para la pinza, es decir, 22 cm), iniciando desde los 3.5 cm que se subieron, hasta interceptar la línea prolongada, tal como se ilustra en la siguiente figura:
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 38.] Ajuste superior del trazo posterior
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/14.svg', alt='Diagrama que ilustra el ajuste del trazo posterior del pantalón.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b  e)] La medida que se pierde por el tiro, se debe recuperar en el costado sobre la línea de altura de tiro, prolongando hacia la izquierda la misma medida que se redujo en el frente. 
                    p.mb-0 #[b  f)] Trazar el costado del pantalón con curva suave y unir a la línea de rodilla.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 39.] Curvas y ajustes del trazo posterior
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/15.svg', alt='Figura del trazo posterior del pantalón con ajustes en la curva de tiro, línea de cintura y costado, y aumento.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b  g)] Prolongar en la línea de tiro la misma medida que el tiro del delantero menos 1.5 cm (4.5 -1.5 = 3.5 cm). 
                    p.mb-0 #[b  h)] Bajar 0.5 cm desde el punto extendido para formar la línea de la entrepierna del posterior y la curva del tiro posterior.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 40.] Curva del tiro posterior
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/16.svg', alt='La curva del tiro posterior se traza tangente a la línea de tiro y roza ligeramente la curva del tiro delantero.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b  i)] Para trazar la pinza del posterior se ubica en el centro y se deja de 12 cm de largo, escuadrándolo sobre la cintura, tal cual se plasma en la siguiente figura:
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 41.] Marcación de pinza posterior
                  figure.mb-0
                      img(src='@/assets/curso/temas/t2/17.svg', alt='Pinza de 2 cm de ancho y 12 cm de largo centrada en la línea de cintura del posterior.')
                      figcaption.mb-0 Fuente: SENA, (2019)


      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Marcaciones y costuras
      
      p.mb-5(data-aos='fade-right') La industrialización del patrón y sus marcaciones son indispensables tanto en el plano general como en los despieces, ya que constituyen el medio de comunicación entre el patronista y el cortador. Para llevar a cabo los despieces y la posterior marcación de los patrones, se deben seguir los siguientes pasos:
      ol.lista-ol--cuadro.mb-5(data-aos='fade-right')
        li.d-flex
          .lista-ol--cuadro__vineta.bg-color-1
            span.text-color-sistema.fw-bold a
          | Separar los dos patrones por las líneas correspondientes, como se ilustra en la figura siguiente.
      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 42.] Marcación de pinza posterior
      figure.mb-5(data-aos='fade-right')
          img(src='@/assets/curso/temas/t2/12.svg', alt='Pinza de 2 cm de ancho y 12 cm de largo centrada en la línea de cintura del posterior.')
          figcaption.mb-0 Fuente: SENA, (2019)    
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-6
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta.bg-color-1
                span.text-color-sistema.fw-bold b
              |  La pretina del pantalón se debe cortar de 10 cm de ancho por el contorno total de cintura más 4 cm para pretina. 
        .col-sm-12.col-lg-6
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta.bg-color-1
                span.text-color-sistema.fw-bold c
              |  Realizar costuras por todo el contorno de 1 cm y ruedo de botas 2 cm. 
  </template>

<script>
export default {
  name: 'Tema1',
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
