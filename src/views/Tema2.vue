<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Formatos, modelos y clases
    .row.bg-color1.px-5
      .col-12
        p.mb-5 A continuación, se aprecian los aspectos que se recomiendan a la hora de diseñar formatos de presupuesto y se presentan los modelos o clases, de acuerdo con la necesidad, bien sea empresa familiar, o no, y con la meta en específico que se espera. Por lo tanto, no hay una fórmula exacta para elaborarlos, en cambio, sí existe una serie de elementos a considerar, dependiendo de la naturaleza y objetivo de cada interesado. También, se debe tener en cuenta que un presupuesto es aplicable en cualquier ámbito, sin embargo, es necesario adaptarlo, de manera sencilla y entendible.
        .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
          .col-1.d-flex
            figure
              img(src='@/assets/curso/img5.svg',).img-style1.m-auto
          .col-8.bg-color2
            p.mb-0 Dado que el presupuesto es un plan bien detallado, donde se desglosa lo que se gasta y lo que se gana durante cierto lapso de tiempo (mensual, semestral, anual), también permite generar análisis sobre las oportunidades y errores para su retroalimentación y así no incurrir nuevamente en estos últimos.
        p Para diseñar un formato de presupuesto, es importante tener la siguiente información:
        .row.align-items-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            ul.lista-ul.mb-4.ms-4
              li
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p Fuentes del ingreso.
              li
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p Total de dinero que se tiene disponible.
              li
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p Lista de productos o servicios con sus precios o costos.
              li
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p Estados de cuenta y recibos de gastos fijos, como la luz, el arriendo, la papelería, entre otros.
              li
                i.fas.fa-caret-square-right(style="color: #CA4F4E")
                p Lista de los gastos y el monto calculado.
            .cajon.color-primario.p-4
              p.mb-0 Si el presupuesto es interno, es importante tener muy claro que se deben incluir las categorías de ingresos y gastos, ya que estas serán las columnas centrales. El formato variará de acuerdo con las necesidades de la organización y la meta específica. Ahora bien, teniendo en cuenta estos datos para la elaboración del formato de presupuesto, es posible empezar a diseñarlo.
          .col-lg-6
            figure(data-aos="flip-left")
              img(src='@/assets/curso/img1.png', style="width: 550px").m-auto
    .titulo-sexto.color-acento-contenido
      h5 Presupuesto simple
    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img6.svg', style="width: 450px").m-auto
      .col-lg-4
        figure
          img(src='@/assets/curso/img7.svg', style="width: 450px").m-auto
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img8.svg', style="width: 450px").m-auto
    .row.bg-color3.px-5.mb-5
      .col-12.p-5
        br
        br
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-1.d-flex
            figure
              img(src='@/assets/curso/img10.svg',).img-style2.m-auto
          .col-8.bg-color4
            p.mb-0.text-white En las organizaciones, existen varios tipos de presupuesto y el objetivo son los planes financieros para un determinado tiempo. El presupuesto debe adaptarse a los departamentos (áreas de trabajo) donde se organizan los recursos financieros disponibles, cuando se trata de registrar información de forma ordenada y discriminada.
        br
        br
    .titulo-sexto.color-acento-contenido
      h5 Clases de presupuestos
    p.mb-5 A continuación, se presentan las ocho (8) clases de presupuesto más utilizadas en Colombia:
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Presupuesto maestro")
            .col-12
              p Como su nombre lo indica, es el más importante para las organizaciones. Este recoge datos y análisis de los ingresos y los gastos, de acuerdo con la proyección realizada para un periodo de tiempo. Combina factores como ventas, gastos operacionales, activos o fuentes de ingresos. El objetivo principal es mantener el equilibrio entre los distintos departamentos de la organización.
          .row(numero="2" titulo="Presupuesto operacional")
            .col-12
              p Contempla todas las actividades relacionadas con la operación de la organización, como producción, ventas y administración. Además, evidencia la importancia de contar con la información ordenada y actualizada de cada departamento y su presupuesto, de manera individual; esto le permitirá a la organización tomar las medidas necesarias para cumplir con sus objetivos.
          .row(numero="3" titulo="Presupuesto de flujo de caja")
            .col-12
              p Aquí se suele proyectar cómo el efectivo entra (ingresa) y sale del negocio dentro de un periodo (tiempo) específico, pues puede contribuir a la hora de decidir si se están administrando los fondos de forma correcta. Una empresa crece cuando gana más de lo que gasta.
          .row(numero="4" titulo="Presupuesto de tesorería")
            .col-12
              p Este presupuesto controla, monitorea y prevé todas las actividades relacionadas con el dinero en efectivo, en bancos y en valores financieros que tiene la empresa. Este modelo tiene como objetivo identificar los flujos de entrada y salida del dinero en efectivo, como también el de analizar y reconocer los desequilibrios y preparar a la organización para posibles dificultades, definiendo acciones para corregir los déficits. El presupuesto de cobro y gasto son claves para el de tesorería.
          .row(numero="5" titulo="Presupuesto de ventas")
            .col-12
              p Este presupuesto define las proyecciones económicas que tiene una empresa dentro del mercado para aumentar el patrimonio, las cuales deben ser realistas para autoajustarse a las demandas actuales del mercado. Los datos necesarios para elaborar este presupuesto están formados por datos históricos de ventas y las previstas de la organización.
          .row(numero="6" titulo="Presupuesto de producción")
            .col-12
              p En este se estima cuánto debe producirse, relacionando lo que se ha definido en el presupuesto de ventas, ya que los datos históricos e ingresos reflejan un promedio de cuánto se va a producir para generar a la empresa una utilidad y un crecimiento económico.
          .row(numero="7" titulo="Presupuesto de compras")
            .col-12
              p Aquí encontramos las estimaciones de las compras de materia prima y de servicios para poner en proceso la producción. Debe estar siempre actualizado para garantizar el abastecimiento de los productos y así poder entregar a tiempo los pedidos.
          .row(numero="8" titulo="Presupuesto de marketing")
            .col-12
              p Es importante para toda empresa tener su departamento de marketing, el cual es necesario para saber promocionar y conquistar nuevos clientes. Con este presupuesto, las organizaciones reservan una cantidad de dinero para crear nuevas estrategias de comunicación y exposición de la marca.
      .col-lg-6
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img11.svg', style="width: 550px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass" scoped></style>
