export default {
  global: {
    Name: 'Normatividad y formalización empresa',
    Description:
      'El presente componente busca fortalecer los conocimientos en las generalidades de comerciantes, empresas y demás asociadas a estas, así mismo, facilita la manera de reconocer los procesos para la formalización de empresas en Colombia, estableciendo el conocimiento en obligaciones comerciales, laborales, financieras y tributarias inherentes al desarrollo del objeto social de una organización económica. De allí la importancia de analizar la normatividad a nivel Internacional y Nacional de Información Financiera (NIIF), que reflejen la realidad de la empresa y contribuyan a la adecuada toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Comerciante',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Deberes, derechos y obligaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Registro mercantil',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Cámara de Comercio: actos mercantiles',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Definición, clasificaciones, naturaleza y estructura de las organizaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Sociedad: concepto, clasificación, requisitos para constitución y liquidación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Normas comerciales, laborales, tributarias y de información financiera para la constitución de la empresa',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Principios básicos de áreas funcionales, planeación estratégica, organización, dirección y control',
            hash: 't_3_1',
          },
        ],
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad financiera',
      significado:
        'Sistema de información integrado a la empresa, cuyas funciones son recolectar, clasificar, registrar, resumir, analizar e interpretar la información financiera de la organización.',
    },
    {
      termino: 'Comerciantes',
      significado:
        'Personas que ejercen alguna de las actividades que se consideran mercantiles.',
    },
    {
      termino: 'Empresa comercial',
      significado:
        'Ente económico dedicado a la compra y venta de bienes, conocidos como mercancías.',
    },
    {
      termino: 'Empresa de servicio',
      significado:
        'Ente económico dedicado a la prestación de servicios o a la venta de una capacidad profesional.',
    },
    {
      termino: 'Empresa de manufactura',
      significado:
        'Ente económico dedicado a producir y vender un producto elaborado a partir de materias primas y sometido a un proceso productivo.',
    },
    {
      termino: 'Normas básicas',
      significado:
        'Conceptos básicos y reglas que se deben observar al efectuar los registros contables correspondientes a las actividades que desarrollan las personas jurídicas o naturales, y que deben aplicar todas las personas obligadas a llevar contabilidad.',
    },
    {
      termino: 'Razón comercial',
      significado:
        'Es el nombre que se asigna a la empresa, para darse a conocer ante el público o mercado.',
    },
    {
      termino: 'Razón social',
      significado:
        'Es el nombre de la empresa, que se encuentra registrado en la cámara de comercio y demás entidades de control.',
    },
    {
      termino: 'Registro Único Tributario (RUT) ',
      significado:
        'Es el documento que se tramita ente la Dirección de Impuestos y Aduanas Nacionales (DIAN), el cual relaciona la clasificación y responsabilidades del contribuyente.',
    },
    {
      termino: 'Sociedad anónima',
      significado:
        'Sociedad que requiere para su constitución un mínimo de cinco socios. Su capital se divide en acciones de igual valor y la responsabilidad de los socios se limita a los aportes de capital. También se conoce con el nombre de corporación. ',
    },
    {
      termino: 'Unidad de valor tributario (UVT)',
      significado:
        'Es una medida que busca estandarizar el cumplimiento de las obligaciones tributarias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). <em>Contabilidad financiera, correlacionado con NIIF</em>. Ediciones de la U. ',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2020, 6 de noviembre). Decreto 1252 de 1990. ',
      link: 'https://bibliotecadigital.ccb.org.co/handle/11520/13702',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2020, 6 de noviembre). Decreto 726 de 2000. ',
      link: 'https://bibliotecadigital.ccb.org.co/handle/11520/14660',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (2020, noviembre 6).',
      link: 'http://www.ctcp.gov.co/',
    },
    {
      referencia:
        'Cuaspa, C. (2013). <em>Normas internacionales de información financiera convergencia a Colombia y aplicación a empresas de salud</em>. Ediciones Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas nacionales -DIAN- (2020, noviembre 6).',
      link: 'https://www.dian.gov.co/',
    },
    {
      referencia:
        'Fayol, H. (1971). <em>Administración industrial y general</em>. Editorial Herrero Hermanos S.A.',
      link: '',
    },
    {
      referencia:
        'Instituto nacional de contadores públicos (2020, noviembre 6).',
      link: 'https://www.incp.org.co/',
    },
    {
      referencia: 'Junta central de contadores (2020, noviembre 6).',
      link: 'http://www.jcc.gov.co/',
    },
    {
      referencia:
        'Ministerio de Comercio Industria y Turismo -MINCIT- (2020, 6 de noviembre). Decreto 957 de 2019',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia:
        'Münch, L. (2015). <em>Administración: proceso administrativo, clave del éxito empresarial</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Santos-Cid, C. (2018). Una mirada a la historia de la Contabilidad. <em>Revista Cubana De Finanzas Y Precios, 2</em>(1), 139-155.',
      link: '',
    },
    {
      referencia:
        'Sánchez, V. (2015). La redefinición del papel de la empresa en la sociedad. <em>Barataria: revista Castellano-Manchega de Ciencias Sociales</em>, (20),129-145.',
      link: '',
    },
    {
      referencia:
        'Secretaria del Senado (2020, octubre 15). Código del Comercio: Decreto-Ley 410 de 1971. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, noviembre 6). Ley 223 de 1995. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0222_1995.html',
    },
    {
      referencia: 'Secretaría del Senado (2020, noviembre 6). Ley 1258 de 2008',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1258_2008.html',
    },
    {
      referencia: 'Secretaría del Senado (2020, noviembre 6) Ley 1014 de 2006.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1014_2006.html',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). <em>Contabilidad: sistema de información para las organizaciones</em>. Mc. Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Sistema Único de Información Normativa (2020, noviembre 6) Decreto 2420 de 2015 Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019674',
    },
    {
      referencia: 'Superintendencia de Sociedades (2020, noviembre 6).',
      link: 'http://www.supersociedades.gov.co/',
    },
    {
      referencia:
        'Vilches, R. (2019). <em>Apuntes de contabilidad básica</em>. Editorial El Cid.',
      link: '',
    },
    {
      referencia:
        'Warren, C., Reeves, J. y Duchac, J. (2016). <em>Contabilidad financiera</em>. Cengage Learning. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
