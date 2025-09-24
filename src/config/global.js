export default {
  global: {
    Name: 'Diseño y elaboración de patrones básicos de ropa masculina.',
    Description:
      'La elaboración de patrones básicos de ropa masculina implica el desarrollo técnico de prendas como la camisa, el pantalón y la chaqueta, a partir del patrón base superior. El proceso incluye la identificación de medidas, el trazado de moldes, y el diseño de despieces, mangas, cuellos, puños y costuras, integrando criterios de industrialización para su aplicación en la confección. Se abordan los pasos específicos para cada prenda, considerando tanto los aspectos funcionales como los acabados técnicos, con el fin de garantizar precisión, ajuste y calidad en la producción de vestuario masculino.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Elaboración de patronaje masculino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Básico superior masculino',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pantalón básico masculino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Pasos delanteros',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Pasos posteriores',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Marcaciones y costuras',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Chaqueta básica masculina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Patrón cuerpo de chaqueta',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Despieces, costuras e industrialización',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manga de chaqueta',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ajuste y corrección de moldes en prendas masculinas',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Básico superior masculino.',
      referencia:
        'Ecosistema de Recursos Educativos. (2019, 12 agosto). Patronaje Industrial Masculino. Patrón básico superior masculino.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fx7tmoiqPfI',
    },
    {
      tema: 'Elaboración de patronaje masculino',
      referencia:
        'Carrera de Diseño y Gestión de Moda. (2015). Técnicas de patronaje. Tomo II: Hombre. Universidad Peruana de Ciencias Aplicadas (UPC). ProQuest Ebook Central.',
      tipo: 'Documento',
      descarga:
        'downloads/MC_AA2_Los_inicios_proceso_historico_evolucion_vestimenta_hombres.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste de moldes',
      significado:
        'proceso mediante el cual se modifican los moldes existentes para mejorar el calce y la forma de la prenda según pruebas o requerimientos técnicos.',
    },
    {
      termino: 'Básico superior masculino',
      significado:
        'base del patrón superior que incluye las partes del torso como espalda, delantero, hombros y sisa, usada para el desarrollo de diferentes tipos de prendas.',
    },
    {
      termino: 'Chaqueta básica masculina',
      significado:
        'prenda de vestir exterior masculina, construida a partir de patrones base y compuesta por cuerpo, mangas, cuellos y otros detalles técnicos.',
    },
    {
      termino: 'Cuerpo de chaqueta',
      significado:
        'estructura principal de la chaqueta que comprende las piezas del delantero y la espalda antes de añadir mangas y otros componentes.',
    },
    {
      termino: 'Costuras',
      significado:
        'uniones realizadas entre piezas de tela mediante puntadas, necesarias para el armado de la prenda.',
    },
    {
      termino: 'Despiece',
      significado:
        'división técnica de una prenda en sus partes individuales como mangas, delanteros, espalda, cuellos, entre otros, para su corte y confección.',
    },
    {
      termino: 'Industrialización de prendas',
      significado:
        'adaptación de los procesos de patronaje y confección para la producción en serie de prendas con estándares de calidad.',
    },
    {
      termino: 'Manga de chaqueta',
      significado:
        'pieza que cubre el brazo y se une al cuerpo de la chaqueta; su diseño requiere mediciones específicas y ajustes para un buen calce.',
    },
    {
      termino: 'Marcaciones',
      significado:
        'señales técnicas trazadas sobre los moldes o telas que indican posiciones de costuras, pliegues, piquetes, bolsillos o cortes.',
    },
    {
      termino: 'Moldes',
      significado:
        'plantillas que representan cada parte de una prenda, utilizadas como guía para el corte de las telas.',
    },
    {
      termino: 'Pantalón básico masculino',
      significado:
        'patrón base del pantalón que incluye estructura del delantero y posterior, y sirve como punto de partida para múltiples diseños.',
    },
    {
      termino: 'Pasos delanteros',
      significado:
        'fases técnicas para la construcción del delantero del pantalón, desde el trazo del patrón hasta sus marcaciones.',
    },
    {
      termino: 'Pasos posteriores',
      significado:
        'etapas correspondientes a la elaboración del patrón trasero del pantalón, incluyendo medidas de cadera, tiro y costados.',
    },
    {
      termino: 'Patronaje masculino',
      significado:
        'disciplina técnica dedicada a la elaboración de patrones para prendas de vestir dirigidas al público masculino.',
    },
    {
      termino: 'Pieza del patrón',
      significado:
        'cada una de las partes que conforman un molde, como delantero, espalda, manga o cuello, utilizadas en el armado de la prenda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carrera de Diseño y Gestión de Moda. (2015). Técnicas de patronaje. Tomo II – Hombre. Recuperado de',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=4184904',
    },
    {
      referencia:
        'Camps, J. (1995). Manual Técnico de Patronaje Industrial Ropa Masculina. Medellín, Colombia: Comité Técnico de Costura 3.',
    },
    {
      referencia:
        'Chunman, D. (2011). Patronaje. Barcelona, España: Ed Blume. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nohora Amparo Nieto Cárdenas',
          cargo: 'Experta temática',
          centro:
            'Centro de manufactura en textil y cuero  - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Mancheeego Suarez',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
