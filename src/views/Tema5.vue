<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.bg-color5.px-5
      .col-12
        .titulo-principal(data-aos="flip-up")
          .titulo-principal__numero
            span 5
          h1 Excel y otras herramientas para elaboración de presupuesto
        .row.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="flip-left")
              img(src='@/assets/curso/img15.svg', style="width: 450px").m-auto
          .col-lg-7
            .cajon.color-primario.p-4
              p.mb-0 El presupuesto, al ser una herramienta de planeación, nos permite determinar un supuesto de cuánto se va a gastar o cuánto se va a recibir en un periodo determinado de cierta situación financiera. En este se destacan los diferentes tipos y la importancia que tiene en la ejecución de las finanzas personales. Gracias al análisis y a la comprensión del presupuesto, se pueden estabilizar los ingresos y los gastos que se reciben.
        p Para ello, se utilizará Microsoft Excel como herramienta básica, aplicación que realiza tareas de hoja de cálculo, con propiedades que facilitan el uso de fórmulas, funciones de matemáticas financieras, gráficos, entre otros. 
        p De igual forma, existen otras herramientas que pueden estar dispuestas en Internet o paquetes especializados y diseñados a la medida, con funcionalidad para ejecución de presupuestos.
        p.mb-5 Se aclara que las organizaciones que poseen un software contable ya cuentan con esta aplicación incluida, lo que permite llevar la planeación y ejecución presupuestal de una mejor forma.
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p Entorno gráfico de Excel
        figure.mt-5
          img(src='@/assets/curso/img6.png', style="width: 950px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
