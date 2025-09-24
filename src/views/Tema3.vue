<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Chaqueta básica masculina
      p.mb-5(data-aos='fade-right') El patrón de chaqueta es un molde básico que permite desarrollar diversos modelos de chaquetas informales no estructuradas. Cuenta con los desahogos necesarios para ser usado como prenda sobrepuesta, lo que lo hace versátil y adaptable a diferentes diseños.
      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 43.] Chaqueta básica masculina
      figure.mb-5
          img(src='@/assets/curso/temas/t3/1.svg', alt='Diseño técnico y vista final de una chaqueta informal masculina.')
          figcaption.mb-0 Fuente: SENA, (2019)

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 El patrón de chaqueta es un molde básico que permite desarrollar diversos modelos de chaquetas informales no estructuradas. Cuenta con los desahogos necesarios para ser usado como prenda sobrepuesta, lo que lo hace versátil y adaptable a diferentes diseños.
          p.mb-0 Para la elaboración de los patrones, es fundamental contar con los elementos necesarios para el trazo: reglas de patronaje, papel trazo o papel bond, lápiz, borrador, tijeras, cinta métrica y, además, tener listo el básico superior masculino. 
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Patrón cuerpo de chaqueta
      p.mb-5(data-aos='fade-right') Para el desarrollo del patrón del cuerpo de la chaqueta, se siguen estos pasos:
      .bg-full-width.bg-color-6.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-fondo-3.p-5
            SlyderA(tipo="b")
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b a)] Trazar una línea guía horizontal, ubicar los básicos superiores masculinos haciendo coincidir la línea guía trazada con la línea de altura de sisa, dejando 5 cm para desahogo entre el ángulo sisa / costado del delantero y el ángulo sisa / costado de la espalda. 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 44.] Ubicación de básicos superiores con desahogo
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/3.svg', alt='Delantero y espalda del básico superior masculino alineados por la sisa, con 5 cm de separación entre ambos.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b b)] Por el centro atrás, prolongar hacia abajo a partir de la cintura, 30 a 35 cm para largo total de chaqueta y escuadrar hacia centro frente. En la mitad de los 5 cm, escuadrar hacia abajo hasta la línea de ruedo. 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 45.] Ubicación de piezas base en el largo de la chaqueta
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/4.svg', alt='Distribución del delantero y la espalda sobre el largo total de la chaqueta, con línea de costado centrada y medida de 30 a 35 cm desde la sisa al ruedo.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b c)] Desde la intersección de la línea guía con la línea de costado, bajar 3 cm para dar desahogo a la sisa. En los extremos del hombro, tanto del delantero como de la espalda, ampliar 2 cm hacia el costado, escuadrando sobre la línea de centro frente y centro espalda, respectivamente. Trazar las nuevas líneas de sisa pasando por los puntos de ampliación. En el punto de unión cuello / hombro de la espalda, subir 0.5 cm y desplazar 0.5 cm hacia el costado para dar desahogo al escote. Luego, trazar la nueva curva del escote y la nueva línea de hombro.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 46.] Modificaciones en escote y hombros 
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/5.svg', alt='Ajustes en el escote y ampliación de hombros en el patrón delantero y espalda.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b d)] Para realizar el desahogo del escote delantero, bajar 2 cm desde el centro frente y redibujar la curva del escote.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 47.] Ajuste en escote delantero
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/6.svg', alt='Reducción de 2 cm en el escote del patrón delantero.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-10.pcus-1
                    p.mb-0 #[b e)] Subir 12 cm por costado y escuadrar 5 cm hacia centro frente, para marcar el piquete interno de troquel (o marcación) para el lado inferior de la ubicación de bolsillo, desde ahí trazar hacia arriba en recta o en diagonal, el largo de la boca de bolsillo para la chaqueta (14 cm). Marcar allí el segundo piquete de troquel. 


      Separador      
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Despieces, costuras e industrialización
      p.mb-3(data-aos='fade-right') Una vez definidos los patrones del cuerpo de la chaqueta que constituyen el punto de partida para elaborar los moldes del delantero, la espalda, la manga y el cuello es posible realizar el despiece completo de la prenda. Esto permite registrar las costuras necesarias para el ensamble de las piezas y su posterior industrialización, utilizando el patrón base.
      p.mb-5(data-aos='fade-right') La elaboración del delantero y la espalda se detalla a continuación:
      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-6.tarjeta.bg-color-7.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-3
              figure
                img(src='@/assets/curso/temas/t1/24.svg')
          h2.text-center Delantero
          p.mb-0 Se traza por el cuello, hombro, sisa, costado, ruedo y centro frente. Se aplican costuras de 1,5 cm en el centro frente (para la cremallera), 1 cm en hombro, sisa y costado, y 3 cm en el ruedo para el dobladillo. El hilo de tela debe ir paralelo al centro frente.
        .col-sm-12.col-md-6.col-lg-6.tarjeta.bg-color-8.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-3
              figure
                img(src='@/assets/curso/temas/t1/25.svg')
          h2.text-center Espalda
          p.mb-0 Se traza por el cuello, hombro, sisa, costado, ruedo y centro atrás. Se aplican costuras de 1 cm en cuello, hombro, sisa y costado, y 3 cm en el ruedo para el dobladillo. El centro atrás se corta con doblez de tela. El hilo de tela debe ir paralelo al centro atrás.
      
      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 48.]  Despiece chaqueta masculina
      figure.mb-5(data-aos='fade-right')
          img.mb-2(src='@/assets/curso/temas/t3/7.svg', alt='Patrones del delantero y espalda de chaqueta básica con márgenes de costura y dobladillo señalados.')
          figcaption.mb-0 Fuente: SENA, (2019)
      
      Separador      
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Manga de chaqueta
      p.mb-3(data-aos='fade-right') La manga es la parte de la chaqueta que cubre el brazo. Existen diversos tipos, como la manga campana, obispo, sastre, entre otras.
      p.mb-5(data-aos='fade-right') A continuación, se describen los pasos para la elaboración del patrón de una manga básica:
      .bg-full-width.bg-color-6.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-fondo-3.p-5
            SlyderA(tipo="b")
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b a)] Para realizar la manga de la chaqueta, se deben tomar las medidas del contorno de la sisa, tanto del delantero como de la espalda, por separado.
                    p.mb-3 #[b b)] Trazar una línea recta vertical con la medida del largo de la manga (talla 10: 60 cm). Desde el vértice superior de esta línea, bajar 15 cm (altura de la copa de la manga) y escuadrar hacia ambos lados prolongando la línea.
                    p.mb-5 #[b c)] En el lado izquierdo, trazar la curva correspondiente al delantero de la manga; en el lado derecho, la correspondiente a la espalda.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 49.] Esquema inicial de manga básica
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/8.svg', alt='Diagrama con línea vertical de 60 cm y línea horizontal a 15 cm desde el vértice superior, indicando curvas para sisa delantera y sisa espalda.')
                      figcaption.mb-0 Fuente: SENA, (2019)
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b d)] Tomar la medida de la sisa del delantero, desde el punto A en diagonal a caer sobre la línea de la altura de cabeza de manga hacia el lado izquierdo menos 0.5 cm.
                    p.mb-3 Nota: la medida de la línea diagonal resultante es la que debe tener la medida de la sisa del delantero.
                    p.mb-0 #[b e)] Se hace el mismo procedimiento al lado derecho, pero con la medida de la sisa de la espalda. 

                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 50.]  Medidas ajustadas de sisa
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/9.svg', alt='Líneas diagonales indican sisa delantera y espalda con reducción de 0.5 cm cada una.')
                      figcaption.mb-0 Fuente: SENA, (2019)
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b f)] En la diagonal de la sisa del delantero, divídala en dos partes iguales y desplace 1 cm hacia abajo sobre la diagonal. Luego, divida nuevamente los dos tramos resultantes. En la mitad del tramo inferior, escuadre 0.8 cm hacia adentro, y en la mitad del tramo superior, escuadre 1.8 cm hacia afuera.
                    p.mb-0 #[b g)] En la diagonal de la sisa de la espalda, divídala en tres partes iguales. En la primera división, escuadre 1.8 cm hacia afuera, y en la mitad del tramo inferior, escuadre 0.5 cm hacia adentro, tal como se identifica en la siguiente figura.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 51.]  Curvatura para sisa delantera y espalda
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/10.svg', alt='Trazado de curvas en la diagonal de la manga con medidas específicas para sisa delantera y espalda.')
                      figcaption.mb-0 Fuente: SENA, (2019)
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b h)] Realizar la unión en curva en dos tiempos, siguiendo los puntos de referencia indicados: 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 52.]  Curva final de copa de manga
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/11.svg', alt='Trazado completo de la curva superior de la manga con medidas precisas.')
                      figcaption.mb-0 Fuente: SENA, (2019)
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b i)] Escuadrar los costados de la manga hasta el ruedo, cerrando así el rectángulo. Ubicar el punto medio de la línea del ruedo y, desde ese centro, marcar 12 cm hacia cada lado para definir el ancho del puño.
                    p.mb-0 #[b j)] Para ubicar la altura del codo, calcular la mitad entre la línea base de la cabeza de manga y la línea del ruedo; desde ese punto, subir 3 cm. Escuadrar hacia ambos lados y unir en línea recta los costados de la manga.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 53.]  Trazado final de manga básica
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/12.svg', alt='Diagrama del trazado completo de una manga básica con curvas, centro, puño y altura del codo señalados.')
                      figcaption.mb-0 Fuente: SENA, (2019)
              .row.justify-content-start.mb-0.align-items-start
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b k)] Trazar una línea para el corte vertical de la parte posterior de la manga, iniciando 10 cm por encima de la curva de la sisa de la espalda, desde el costado hasta el centro del puño posterior. Sobre esta línea de corte, subir 16 cm para definir la extensión de la abertura.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 54.] Trazado final de manga básica  
                  figure.mb-0
                      img(src='@/assets/curso/temas/t3/13.svg', alt='Diagrama que ilustra la línea de corte vertical en la parte posterior de la manga, con una abertura de 16 cm iniciando a 8 cm de la curva de sisa espalda.')
                      figcaption.mb-0 Fuente: SENA, (2019)

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
