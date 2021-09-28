<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.bg-color5.px-5
      .col-12
        .titulo-principal(data-aos="flip-up")
          .titulo-principal__numero
            span 1
          h1 Elaboración de un presupuesto con sus componentes variables
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido
              p El presupuesto y sus componentes
            figure(data-aos="flip-right")
              img(src='@/assets/curso/img4.svg', style="width: 650px").m-auto
          .col-lg-6
            p.mb-4 Un presupuesto es la relación entre los ingresos y los gastos que se generan durante un determinado periodo de tiempo o un proyecto en específico. Se tienen presupuestos familiares muy sencillos, donde, a partir de la información de los ingresos de los padres, se restan los gastos, comenzando por los inaplazables, como vivienda, comida, educación y contingencias, y continuando con los variables, como las salidas recreacionales, los regalos de cumpleaños, o similares. En cambio, hay otros presupuestos más complejos que se realizan para un proyecto empresarial, donde se pueden dividir las cuentas de ingresos (periódicos y extraordinarios), los costos fijos, los variables  y los impuestos.
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo]. Presupuestos (enfoque para la planeación financiera)
            a.anexo(:href="obtenerLink('/downloads/Anexo2.xlsx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-xls.svg")
              .anexo__texto
                p #[b Anexo]. Formato ejemplo sobre un presupuesto familiar
  
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

<style lang="sass" scoped></style>
