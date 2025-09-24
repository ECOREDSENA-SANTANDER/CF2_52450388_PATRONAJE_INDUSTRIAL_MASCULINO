<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Elaboración de patronaje masculino
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La elaboración de patronaje masculino es un proceso técnico que parte del análisis de medidas antropométricas y la interpretación de cuadros de tallas, con el fin de construir moldes base que sirvan como punto de partida para diferentes prendas. Este procedimiento requiere precisión en el trazado de líneas estructurales, aplicación de reglas de proporción y conocimiento de las transformaciones necesarias para adaptar el patrón a las características de cada diseño. El patrón básico masculino permite generar estructuras para la parte superior del cuerpo como la camisa y la chaqueta, así como para la parte inferior, como el pantalón.
      
      p.mb-5(data-aos='fade-right') Durante el desarrollo del patronaje, se abordan elementos específicos como despieces, costuras, mangas, cuellos, puños y marcaciones técnicas, integrando criterios de industrialización para facilitar la producción en serie. Cada prenda implica un análisis técnico particular: la camisa requiere precisión en sus acabados; el pantalón, equilibrio entre delantero y posterior; y la chaqueta, una construcción más estructurada. La correcta elaboración de estos patrones garantiza ajuste, funcionalidad y calidad en la confección de prendas masculinas, siendo una base fundamental en los procesos de diseño y producción de moda.
      .tarjeta.bg-color-3.p-4.mb-5(data-aos='fade-right')
        .row.justify-content-around.align-items-center.p-2
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.text-white  Los inicios, el proceso histórico y la evolución de la vestimenta para hombres
                p.mb-0.text-white Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento.
              .col-sm-auto.col-lg-2
                a.boton.bg-color-4.texto-blanco(:href="obtenerLink('/downloads/MC_AA2_Los_inicios_proceso_historico_evolucion_vestimenta_hombres.pdf')" target="_blank")  
                  span Descargar
                  i.fas.fa-file-arrow-down

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Básico superior masculino
      
      p.mb-5(data-aos='fade-right') Esta pieza de patronaje constituye la base para la creación e interpretación de diversos modelos de prendas superiores masculinas. No corresponde a una prenda de vestir en sí misma, sino que se considera un básico, ya que a partir de este patrón base se derivan los moldes necesarios para la confección de diferentes prendas.
      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 1.] Básico superior masculino
      figure.mb-5(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/3.svg', alt='Ilustración del patrón básico superior masculino, vista frontal y posterior.')
          figcaption.mb-0 Fuente: SENA, (2019)  

      p.mb-5(data-aos='fade-right') En la siguiente tabla se encuentran las medidas que se aplicarán en la elaboración del patrón superior masculino:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5
          .titulo-sexto.color-primario
              p.mb-0 #[b Tabla 1.] Medidas a aplicar básico superior masculino
          .tabla-a.table-wcus.color-primario.mb-5 
            table.w-50(alt='Tabla de medidas para el patrón básico superior masculino, talla M/38, que incluye contornos, anchos y largos corporales en centímetros.')
              caption Fuente: SENA, (2019)
              thead
                tr
                  th Medida
                  th Talla M / 38
              tbody
                tr
                  td Contorno de cuello
                  td 38 cm

                tr
                  td Contorno de pecho
                  td 96.5 cm

                tr
                  td Contorno de cintura
                  td 81 cm

                tr
                  td Ancho de espalda
                  td 43.5 cm

                tr
                  td Ancho de pecho
                  td 39.5 cm

                tr
                  td Largo de talle
                  td 45.5 cm

                tr
                  td Largo de hombro
                  td 16.5 cm
        .col-sm-12.col-lg-7.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png', alt='')
      

      p.mb-5(data-aos='fade-right') Para el desarrollo del patrón básico, es indispensable contar con los elementos necesarios para su trazado, tales como: reglas de patronaje, papel para trazo, lápiz, borrador, cinta métrica, entre otros. Una vez se disponga del material, se deben seguir los pasos que se describen a continuación:
      .bg-full-width.bg-fondo-2.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-color-5.pcus-2
            PasosB.color-acento-contenido
              .row.justify-content-center.mb-0(titulo='Paso 1')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Elaboración de patrón base superior, primer paso
                  p.mb-0 Trazar un rectángulo que mida en horizontal la mitad del contorno de pecho, más 5 cm para desahogo y en vertical la medida del largo de talle.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 2.] Elaboración de patrón base superior, primer paso
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/5.svg', alt='Figura de un rectángulo que representa la base para el trazado del patrón básico superior masculino.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 2')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Elaboración de patrón base superior, segundo paso
                  p.mb-0 Trazar una línea paralela horizontal que mida desde la línea superior el contorno de pecho dividido en seis partes más 6 cm. Esta es la línea de sisa.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 3.] Elaboración de patrón base superior, segundo paso
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/6.svg', alt='Rectángulo con línea de corte de pecho trazada a 1/6 del contorno de pecho más 9 cm desde el borde superior.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 3')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Elaboración de patrón base superior, tercer paso
                  p.mb-0 La línea de costado se traza vertical en la mitad de la parte inferior. Marcar el centro frente al costado izquierdo y centro atrás al costado derecho.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 4.] Elaboración de patrón base superior, tercer paso
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/7.svg', alt='Esquema del patrón básico superior masculino con divisiones marcadas: centro frente, costado, centro atrás y línea de sisa.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 4')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Fórmula contorno de cuello
                  p.mb-0 En centro atrás sobre la línea superior de izquierda a derecha se debe tomar la medida de la abertura del cuello. Para determinar esta medida, se aplica la siguiente fórmula:
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 5.] Fórmula contorno de cuello
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/8.svg', alt='Fórmula para trazar el escote: contorno de cuello dividido entre 20, más 3.7, igual a 5.6 cm.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 5')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Elaboración de patrón base superior
                  p.mb-0 Escuadrar hacia arriba la tercera parte de la medida A = 1.8 cm, trazar curva del cuello posterior. En el centro frente sobre la línea superior de derecha a izquierda, se toma la medida del cuello delantero, para determinar la medida del cuello se aplica la siguiente fórmula: (A + 0.5 cm) = 6.1 cm, desde el vértice bajar la medida de A y trazar la curva de cuello delantero.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 6.] Elaboración de patrón base superior
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/9.svg', alt='Dibujo del trazo del escote delantero y posterior sobre el patrón básico.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 6')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Molde básico delantero y espalda con medida de ancho de pecho
                  p.mb-0 Desde la línea de centro atrás, de derecha a izquierda trazar una línea paralela vertical que tenga la mitad de la medida del ancho de espalda, más 1.5 cm de desahogo. Desde la línea de centro frente, de izquierda a derecha trazar una línea paralela vertical que tenga la mitad de la medida de ancho de pecho, más 1.5 cm de desahogo.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 7.] Molde básico delantero y espalda con medida de ancho de pecho
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/10.svg', alt='Molde delantero y espalda con ancho de pecho.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 7')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Elaboración molde básico delantero y espalda
                  p.mb-0 Para los hombros se debe trazar una línea diagonal en dirección hacia el costado, que tenga de caída 4 cm y de longitud la medida del largo de hombro, como se ve a continuación:
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 8.] Elaboración molde básico delantero y espalda
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/11.svg', alt='Molde básico del cuerpo delantero y espalda con medidas de hombro y pecho. ')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 8')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Molde básico con transformación para sisa y costado
                  p.mb-0 Trazar las curvas de las sisas del delantero y de la espalda, partiendo de los puntos extremos del hombro, tocando las líneas de ancho de espalda y pecho y terminando en el costado. En el centro frente se debe dar una caída de 2 cm en el ruedo para recuperación de talle, que se escuadra hasta la mitad de la cintura del delantero y se termina en diagonal hasta el costado.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 9.] Molde básico con transformación para sisa y costado
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/12.svg', alt='Molde delantero y espalda con ajuste en sisa y costado.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0(titulo='Paso 9')
                .col-sm-12.col-lg-7.mb-cus
                  //h4 Despiece e industrialización
                  p.mb-0 Se deben despiezar los patrones del delantero y de la espalda por aparte, el hilo de tela de cada uno va paralelo al centro frente y centro atrás respectivamente y se marcan con nombre, talla y cantidad las veces que se corta el patrón en un modelo.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 10.] Despiece e industrialización
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/13.svg', alt='Moldes del delantero y posterior del básico superior masculino, con indicación de corte por unidad.')
                      figcaption.mb-0 Fuente: SENA, (2019)

      .tarjeta.bg-color-3.p-4.mb-5(data-aos='fade-right')
        .row.justify-content-around.align-items-center.p-2
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/14.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.text-white  Patronaje Industrial Masculino. Patrón básico superior masculino
                p.mb-0.text-white Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video:
              .col-sm-auto.col-lg-2
                a.boton.bg-color-4.texto-blanco(href="https://youtu.be/fx7tmoiqPfI" target="_blank")  
                  span Ir al video
                  i.fas.fa-video          

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Camisa básica masculina

      p.mb-5(data-aos='fade-right') La camisa masculina es una prenda formal básica e imprescindible en diversos contextos sociales: desde el entorno de oficina hasta espacios formales, casuales e incluso dentro del estilo #[i Jeans Wear]. Esta prenda aporta sofisticación y elegancia a quien la lleva, por lo que se considera fundamental en el guardarropa de todo hombre.
      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 11.] Camisa masculina
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          figure.mb-0
              img(src='@/assets/curso/temas/t1/15.svg', alt='Vista frontal y posterior de una camisa masculina con líneas marcadas de centro frente (CF) y centro espalda (CB).')
              figcaption.mb-0 Fuente: SENA, (2019)
      p.mb-3(data-aos='fade-right') Para la elaboración de los patrones de la camisa, es importante contar con los elementos necesarios para el trazo, tales como: reglas de patronaje, papel para trazo, lápiz, borrador, tijeras y cinta métrica. Además, se debe tener listo el patrón básico superior masculino, que servirá como base para el desarrollo del molde.
      p.mb-5(data-aos='fade-right') Los pasos para trazar el patrón del cuerpo de la camisa son los siguientes:        
      .bg-full-width.bg-color-6.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-fondo-3.p-5
            SlyderA(tipo="b")
              .row.justify-content-start.mb-0.align-items-center
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b a)] Trazar una línea guía horizontal y ubicar los básicos superiores masculinos, haciendo coincidir dicha línea con la línea de altura de sisa. Dejar un espacio de 3 cm de desahogo entre el ángulo sisa / costado del delantero y el ángulo sisa / costado de la espalda.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 12.] Desarrollo patrón de camisa
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/16.svg', alt='Moldes de delantero y espalda con separación de 3 cm en la línea de sisa para desahogo.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-center
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b b)] Desde el centro atrás, prolongar hacia abajo a partir de la línea de cintura entre 30 y 35 cm, según el largo total deseado para la camisa, y escuadrar una línea horizontal hacia el centro frente. Desde el punto medio de los 3 cm de desahogo, trazar una línea perpendicular hacia abajo hasta la línea de ruedo.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 13.]  Trazado del largo total de la camisa masculina
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/17.svg', alt='Trazado del largo de camisa masculina desde la cintura, con líneas guía hacia centro frente, centro atrás y ruedo.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-center
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-3 #[b c)] Desde el punto de intersección entre la línea guía y la línea de costado, bajar 3 cm para generar desahogo en la sisa. En los puntos del hombro, tanto en el delantero como en la espalda, ampliar 2 cm hacia el costado, escuadrando desde el centro frente y el centro atrás, respectivamente. A partir de estos nuevos puntos, trazar las nuevas curvas de sisa considerando el desahogo adicional.
                    p.mb-0 En el punto de unión entre cuello y hombro de la espalda, subir 0.5 cm y desplazar 0.5 cm hacia el costado para proporcionar mayor holgura. Con estos ajustes, trazar nuevamente la curva del cuello y la línea de hombro.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 14.] Ajustes de sisa y hombro en camisa masculina
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/18.svg', alt='Ajustes de sisa y hombro en los moldes de delantero y espalda para camisa masculina.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-start.mb-0.align-items-center
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b d)] Almilla: desde el punto de unión entre el cuello y el centro atrás, bajar 8 cm (ancho de la almilla) y escuadrar una línea horizontal hasta intersectar con la línea de sisa. En el punto donde se cruzan la línea de almilla y la sisa, bajar 1 cm para formar la pinza de la almilla, y trazar una curva suave que la una al escote. En el delantero, descontar 2 cm del hombro para transferirlos a la almilla, manteniendo el equilibrio del diseño.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 15.] Trazado de almilla en camisa masculina
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/19.svg', alt='Ilustración del trazo de almilla sobre moldes de delantero y espalda, con ajustes en hombros, escote y sisa.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-center
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b e)] Desde el punto de línea de almilla hacia abajo, prolongar en centro atrás 3 cm para pliegue del prense chato (sin la almilla). 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 16.] Ampliación para cruce en camisa masculina
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/20.svg', alt='Trazado de la línea de almilla y aumento en el centro frente para formar el cruce de la camisa.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-center
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b f)] Para trazar el ruedo tipo cola de pato, se sube 8 cm por el costado y se une con una curva suave hacia la mitad del ruedo, tanto en la espalda como en el delantero. Estas curvas deben realizarse utilizando una regla curva, tal como se muestra a continuación.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 17.] Trazado del ruedo tipo cola de pato
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/21.svg', alt='Curva del ruedo posterior con forma tipo cola de pato unida desde ambos costados.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-start.mb-0.align-items-center
                .col-sm-12.col-lg-6.pcus-1
                    p.mb-0 #[b g)] El centro frente se amplía 1.5 cm para el cruce. La pechera tendrá un ancho total de 3 cm, por lo que se deben añadir 3 cm adicionales para su doblez. Es fundamental marcar piquetes en el cuello y en el ruedo para facilitar dicho doblez.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 18.] Ampliación de pechera y ajustes finales
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/22.svg', alt='Molde con ampliación para pechera, doblez y ajustes en ruedo y almilla.')
                      figcaption.mb-0 Fuente: SENA, (2019)



      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Despieces, costuras e industrialización

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/23.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 El proceso de crear los diferentes patrones que conforman una prenda se denomina despiece, y consiste en definir cada parte con especificaciones claras para su posterior confección. Por ejemplo, para elaborar un pantalón se requiere un patrón delantero y un patrón posterior.
          p.mb-3 Las costuras son las áreas que se agregan al patrón terminado para permitir la unión entre piezas, siendo necesarias para el ensamble de toda la prenda.
          p.mb-0 El patrón industrial es la base para el corte y la confección. Este define la forma de cada componente de la prenda e indica las costuras, dobladillos y demás elementos requeridos según sus especificaciones.
      p.mb-5(data-aos='fade-right') A continuación, se presentan los pasos finales para la construcción del patrón de la camisa:
      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-7.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/24.svg')
          h2.text-center Delantero
          p.mb-0 La pieza se traza desde el cuello, hombro (descontando los 2 cm de la almilla), sisa, costado, ruedo y extensión para pechera y cruce. Se aplican costuras de 1 cm en el centro frente, hombro, sisa y costado. En el ruedo se deja un margen de 1.5 cm para dobladillo. El hilo de la tela debe ir paralelo al centro frente.
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-8.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/25.svg')
          h2.text-center Espalda
          p.mb-0 Se traza desde la línea de almilla, incluyendo la extensión para el pliegue en el centro atrás, pasando por el ruedo, costado y sisa hasta la línea de almilla (descontando la pinza de almilla). Se aplican costuras de 1 cm en la línea de almilla, sisa y costado. En el ruedo se deja 1.5 cm para dobladillo. El centro atrás se corta con doblez de tela y el hilo debe ir paralelo a este.
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-9.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/26.svg')
          h2.text-center Almilla
          p.mb-0 Se traza por el hombro (incluyendo la extensión del delantero), cuello, centro atrás, línea de almilla y sisa. Se aplican costuras de 1 cm en el centro atrás, cuello, hombro, sisa y línea de almilla.
      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 19.] Piezas base camisa masculina 
      figure.mb-5(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/27.svg', alt='Vista de los moldes del delantero, espalda y almilla para camisa masculina.')
          figcaption.mb-0 Fuente: SENA, (2019)

      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Manga camisera y puño 
      p.mb-3(data-aos='fade-right') Para elaborar la manga de la camisa, se deben tomar las medidas del contorno de la sisa del delantero y de la espalda por separado, ubicando la cinta métrica por la parte interna de la curva y verificando varias veces la medida.
      p.mb-5(data-aos='fade-right') Para trazar el patrón, sigue estos pasos:

      .bg-full-width.bg-fondo-2.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-color-5.pcus-2
            PasosB.color-acento-contenido
              .row.justify-content-center.mb-0.ml-cus-2.align-items-center(titulo='Paso 1')
                .col-sm-12.col-lg-7.mb-cus
                  p.mb-0 Traza una línea vertical con la medida del largo de la manga (por ejemplo, talla 10: 60 cm). Sobre esta línea, marca 15 cm desde el extremo superior (altura de cabeza de manga) y escuadra hacia ambos lados prolongando la línea. En el lado izquierdo se trazará el contorno correspondiente al delantero, y en el derecho, el de la espalda.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 20.] Trazo base para manga
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/28.svg', alt='Esquema inicial del patrón de manga con guía para curva delantera y espalda.')
                      figcaption.mb-0 Fuente: SENA, (2019)

              .row.justify-content-center.mb-0.ml-cus-2.align-items-center(titulo='Paso 2')
                .col-sm-12.col-lg-7.mb-cus
                  p.mb-0 Se toma la medida de la sisa del delantero y se traza una línea diagonal desde el punto A hasta caer sobre la línea de altura de cabeza de manga, hacia el lado izquierdo, restando 0.5 cm. Nota: La longitud de esta línea diagonal debe corresponder a la medida de la sisa del delantero. Se repite el mismo procedimiento hacia el lado derecho, utilizando la medida de la sisa de la espalda.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 21.] Trazado de sisas para manga
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/29.svg', alt='Diagrama con líneas diagonales que representan las medidas de sisa delantera y espalda ajustadas.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-center.mb-0.ml-cus-2.align-items-center(titulo='Paso 3')
                .col-sm-12.col-lg-7.mb-cus
                  p.mb-0 La diagonal correspondiente a la sisa delantera se divide en dos partes iguales. Desde el punto medio, se baja 1 cm sobre la diagonal. Luego, cada tramo resultante se divide nuevamente por la mitad. En la mitad inferior, se escuadra 0.8 cm hacia adentro, y en la mitad superior, se escuadra 1.8 cm hacia afuera. La diagonal de la sisa de la espalda se divide en tres partes iguales. En la primera división, se escuadra 1.8 cm hacia afuera; y en la mitad del tramo inferior, se escuadra 0.5 cm hacia adentro.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 22.] Curvatura superior de la manga
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/30.svg', alt='Curvas formadas sobre la diagonal de la sisa delantera y espalda para moldear la copa de la manga.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-center.mb-0.ml-cus-2.align-items-center(titulo='Paso 4')
                .col-sm-12.col-lg-7.mb-cus
                  p.mb-0 Unir en curva en dos tiempos, pasando por los puntos marcados de la siguiente forma: 
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 23.] Curva final de la copa de manga
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/31.svg', alt='Contorno suavizado de la copa de la manga con puntos de referencia para su trazado.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-center.mb-0.ml-cus-2.align-items-center(titulo='Paso 5')
                .col-sm-12.col-lg-7.mb-cus
                  p.mb-0 Escuadrar los costados de la manga hasta el ruedo para cerrar el rectángulo. Ubicar la mitad de la línea del ruedo y, desde ese punto central, marcar hacia cada lado el ancho del puño (12 cm). Para determinar la altura del codo, se mide la mitad entre la línea base de la cabeza de la manga y la línea de ruedo; desde allí, se suben 3 cm y se escuadra hacia ambos lados. Finalmente, unir en línea recta los costados de la manga.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 24.] Trazado final de la manga
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/32.svg', alt='Dibujo técnico del patrón de manga con curva superior, línea de codo y medida del puño.')
                      figcaption.mb-0 Fuente: SENA, (2019)


              .row.justify-content-center.mb-0.ml-cus-2.align-items-center(titulo='Paso 6')
                .col-sm-12.col-lg-7.mb-cus
                  p.mb-0 Trazar una línea paralela a 8 cm por encima del ruedo, correspondiente al ancho del puño. Añadir 1.5 cm en uno de los costados para el cruce. En la mitad del ruedo del lado correspondiente a la espalda, marcar una línea perpendicular de 8 cm de largo para ubicar la portañuela.
                .col-sm-12.col-lg-4
                  .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 25.] Marcación del puño y portañuela
                  figure.mb-0
                      img(src='@/assets/curso/temas/t1/33.svg', alt='Diagrama de la manga con indicaciones para marcar el puño, el cruce y la portañuela.')
                      figcaption.mb-0 Fuente: SENA, (2019)


      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Marcaciones y costuras

      p.mb-5(data-aos='fade-right') En la industrialización del patrón o en las marcaciones, tanto el plano como los despieces son indispensables, ya que constituyen el medio de comunicación entre el patronista y el cortador. Para elaborar los despieces y realizar la posterior marcación de los patrones, se siguen los siguientes pasos:
      .row.mb-5(data-aos='fade-right')
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2.text-white  1
            p.mb-0.text-center La manga debe llevar 1 cm de costura en todos sus bordes. Se corta en par (una para cada lado del cuerpo), con el hilo de la tela paralelo a la línea central o línea de aplome.
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2 2
            p.mb-0.text-center El puño se corta con 1 cm de costura en todos sus lados (el bisel del puño puede variar según el diseño). Debe cortarse 2 pares (4 piezas en total), con el hilo de la tela paralelo a la línea de aplome de la manga.
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.hcard-1.hcard-3
            .tarjeta-numerada__numero
              .h2.text-white 3
            p.mb-0.text-center Para la portañuela de la manga, se debe cortar una pieza de 3,5 cm de ancho por 20 cm de largo.

      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 26.] Despiece de manga y puño
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
          figure.mb-0
            img(src='@/assets/curso/temas/t1/35.svg', alt='Ilustración del patrón de la manga, puño y portañuela para camisa talla M/36, con medidas y cantidad de cortes especificados.')
            figcaption.mb-0 Fuente: SENA, (2019)
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/34.png', alt='')
      
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Cuello camisero 
      
      p.mb-5(data-aos='fade-right') Para trazar el cuello camisero, se deben tomar las medidas del escote de la espalda y del delantero de la blusa, excluyendo el cruce. El desarrollo del patrón del cuello se realiza siguiendo los pasos descritos a continuación:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
           ul.lista-ul--color.mb-0.color-primario
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Trazar un ángulo recto. Sobre la línea horizontal marcar la medida del escote de la espalda (punto A) y, a continuación, la medida del escote del delantero (punto B). Sobre la línea vertical, marcar: 2.5 cm para el pie de cuello (punto C), 1.5 cm para la pinza (punto D) y 4.5 cm para el ancho del cuello (punto E).
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Desde los puntos C, D y E, escuadrar hacia la derecha la misma medida del escote de la espalda.
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Desde el punto B, escuadrar hacia arriba 1.5 cm (punto F). Sobre esa línea escuadrada marcar 2.5 cm (punto G) para el pie de cuello y, seguidamente, 6 cm (punto H) para el cuello.
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Unir con una curva suave el punto A con el punto escuadrado correspondiente.
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Unir la línea del cuello desde el punto E escuadrado hasta el punto H, utilizando una curva suave. Prolongar esta línea 1.5 cm.
            li.d-flex
              i.fas.fa-shirt.icon-list
              p.mb-0 Trazar una curva más pronunciada desde el punto G hacia el cruce del pie de cuello, y finalizar en línea recta con la prolongación del punto H.
        .col-sm-12.col-lg-6
          .titulo-sexto.color-primario
              p.mb-0 #[b Figura 27.] Desarrollo de patrón de cuello camisero 
          figure.mb-0
              img.mb-2(src='@/assets/curso/temas/t1/36.svg', alt='Texto alternativo: Diagrama técnico del trazado del cuello camisero con pie de cuello, mostrando medidas, puntos guía y líneas de escuadra.')
              figcaption.mb-0 Fuente: SENA, (2019).


      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Marcaciones y costuras cuello y pie de cuello camisero

      p.mb-5(data-aos='fade-right') En la industrialización del patrón o durante las marcaciones, tanto el plano como los despieces son elementos fundamentales, ya que constituyen el medio de comunicación entre el patronista y el cortador. Para elaborar los despieces y realizar la marcación de los patrones, se siguen los siguientes pasos:

      .row.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-7.p-4.hcard-2
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/t1/37.svg')
            p.mb-0.text-center El cuello y el pie de cuello se trazan con doblez de tela sobre la línea vertical, correspondiente al vértice del ángulo.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-8.p-4.hcard-2
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/t1/38.svg')
            p.mb-0.text-center El despiece del pie de cuello se construye a partir del vértice del ángulo, pasando por el punto A, el cruce del pie de cuello, la curva, el punto G y el punto C, cerrando en el doblez de la tela. Se deben marcar piquetes en el punto A y dejar costura de 1 cm en todo el contorno.

        .col-sm-6.col-lg-4.mb-4.mb-sm-0
          .tarjeta--boton.bg-color-9.text-white--hover.p-4.hcard-2.hcard-3
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/t1/39.svg')
            p.mb-0.text-center El despiece del cuello se traza desde el punto D, siguiendo por el punto G, la prolongación del punto H, el punto E, y cerrando también en el doblez. Se debe realizar un piquete en el centro del doblez y dejar 1 cm de costura por todo el contorno.



      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .titulo-sexto.color-primario
              p.mb-0 #[b Figura 28.] Desarrollo de patrón de cuello camisero
          figure.mb-0
              img(src='@/assets/curso/temas/t1/41.svg', alt='Despiece del cuello y pie de cuello para camisa talla M/36, con líneas de corte, doblez y piquetes señalados.')
              figcaption.mb-0 Fuente: SENA, (2019)
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/40.png', alt='')






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
