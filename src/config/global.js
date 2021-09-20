export default {
  global: {
    componenteFormativo:
      'Fundamentos básicos en elaboración y estructuración de presupuestos',
    descripcionCurso:
      'Las finanzas públicas, privadas y personales se basan en unas reglas básicas de contabilidad y en la parametrización que se les da con las cuentas de ingresos, gastos, costos, entre otras.</br></br>En las finanzas, el presupuesto es una herramienta fundamental para conseguir el equilibrio financiero y a su vez generar utilidad y valor a las empresas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elaboración de un presupuesto con sus componentes y variables',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formatos, modelos y clases',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis del ciclo contable y el presupuesto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Matemáticas financieras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Excel y otras herramientas para elaboración de presupuestos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Ética y responsabilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Banco Central del Paraguay. (2015). ¿Qué es un presupuesto y cómo se elabora? [Video]. YouTube. ',
      link: 'https://youtu.be/urfwMXPDJVo',
    },
    {
      referencia:
        'Díaz, M., Parra, R. y López, L. (2012). Presupuestos. Enfoque para la planeación financiera. Pearson. ',
      link:
        'https://drive.google.com/file/d/1c59mAyDStD5Nlx6aNpoSBCWmdWf1Ppc7/view?usp=sharing',
    },
    {
      referencia:
        'Negocios y Emprendimiento. (2019). Cómo organizar tus finanzas personales [Video]. YouTube. ',
      link: 'https://youtu.be/fAgvLXi-HMc',
    },
    {
      referencia:
        'Sánchez, L. (2020). Ciclo contable: caso práctico (III). Aseduco. ',
      link: 'https://aseduco.com/blog1/ciclo-contable-caso-practico-iii/',
    },
    {
      referencia:
        'Superintendencia de Bancos Guatemala. (2014). El presupuesto [Video]. YouTube. ',
      link: 'https://youtu.be/PmTaaLFSMVg',
    },
    {
      referencia:
        'Varón, L. (2013). Conjunto completo de Estados Financieros. Gerencie. ',
      link:
        'https://www.gerencie.com/conjunto-completo-de-estados-financieros.html',
    },
  ],
  glosario: [
    {
      termino: 'Ahorro',
      significado:
        'es la acción de separar una parte del ingreso mensual que obtiene una persona o empresa con el fin de guardarlo para un futuro.',
    },
    {
      termino: 'Contabilidad',
      significado:
        'sistema de control y registro de los gastos e ingresos y demás operaciones económicas que realiza una empresa o entidad.',
    },
    {
      termino: 'Conjunto de estados financieros',
      significado:
        'Según Varón (2013), los estados financieros que conforman el conjunto completo, de acuerdo con las NIIF, es decir, la totalidad de estados financieros que se deben elaborar y presentar bajo NIIF, se clasifican en:</br>● Estado de Situación Financiera al final del periodo.</br>● Estado de Resultado Integral del periodo.</br>●	Estado de Cambios en el Patrimonio del periodo.</br>● Estado de Flujo de Efectivo del periodo.</br>● Estado de Revelaciones del periodo.',
    },
    {
      termino: 'Consumidor',
      significado:
        'es una persona u organización que demanda bienes o servicios proporcionados por el productor a cambio de dinero. ',
    },
    {
      termino: 'Deudas',
      significado:
        'obligación de pagar una cantidad de dinero a una persona o institución. ',
    },
    {
      termino: 'Devengo',
      significado:
        'principio contable y financiero que establece que los hechos económicos deben reconocerse en el momento en que ocurren, independientemente de su pago.',
    },
    {
      termino: 'Dinero',
      significado:
        'es todo activo o bien generalmente aceptado como medio de pago por los agentes económicos para sus intercambios.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'representación estructurada de la situación financiera, el rendimiento financiero y los flujos de efectivo de la compañía.',
    },
    {
      termino: 'Financiación',
      significado:
        'acto de dotar de dinero y de crédito a una empresa, organización o individuo; es decir, es la contribución de dinero que se requiere para concretar un proyecto.',
    },
    {
      termino: 'Ganancia',
      significado:
        'decrementos en los beneficios económicos, producidos a lo largo del periodo contable, en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos que dan como resultado decrementos en el patrimonio.',
    },
    {
      termino: 'Ingreso',
      significado:
        'incremento en los beneficios económicos, producidos a lo largo del periodo sobre el que se informa, que dan como resultado aumento del patrimonio. No están relacionados con los aportes de los socios.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligación presente de la compañía, surgida a raíz de sucesos pasados, a cuyo vencimiento y para cancelarla se espera desprenderse de recursos que conllevan beneficios económicos.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'participación residual en los activos de la compañía, una vez deducidos todos los pasivos. El patrimonio está formado por el conjunto de bienes, derechos y obligaciones pertenecientes a la compañía, y que constituyen los medios económicos y financieros a través de los cuales esta puede cumplir con sus fines sociales.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'la capacidad de producir o generar un beneficio adicional sobre la inversión o esfuerzo realizado.',
    },
    {
      termino: 'Valor razonable',
      significado:
        'significa el precio por el que puede ser adquirido un activo o pagado un pasivo, entre partes interesadas, debidamente informadas, en una transacción en condiciones de libre competencia. Es preferiblemente calculado con referencia a un mercado activo fiable. El precio de cotización en un mercado activo es la mejor referencia del valor razonable.',
    },
    {
      termino: 'Valor realizable',
      significado:
        'los activos se registran al valor presente, descontando las entradas de efectivo netas futuras que se espera genere la partida en el curso normal de la operación. Los pasivos se registran al valor presente, descontando las salidas netas de efectivo que se espera necesitar para pagar el pasivo, en el curso normal de las operaciones.',
    },
  ],
  complementario: [
    {
      texto:
        'Negocios y Emprendimiento. (2019). Cómo organizar tus finanzas personales',
      tipo: 'Video',
      link: 'https://youtu.be/fAgvLXi-HMc',
    },
    {
      texto: 'Elaboración de un presupuesto con sus componentes y variables.',
      tipo: 'Video',
      link: 'https://youtu.be/PmTaaLFSMVg',
    },
    {
      texto: 'Análisis del ciclo contable y presupuesto.',
      tipo: 'Libro PDF',
      descarga: '/downloads/Anexo1.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto Temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios. CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
