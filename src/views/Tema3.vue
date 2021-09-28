<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Análisis del ciclo contable y el presupuesto
    p.mb-5 El ciclo contable para las empresas no es más que un proceso contable durante el cual se registran y procesan las operaciones de las empresas durante el ejercicio económico. El área de contabilidad es vital para las empresas, ya que brinda información sumamente importante y precisa para la toma de decisiones. Este proceso es llamado ciclo contable, y en él se recogen todas las operaciones de la organización a lo largo del año, para entregar información a través de los estados financieros.
    .row.bg-color5.px-5
      .col-12
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p Ciclo contable
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/img12.svg', style="width: 650px").m-auto
              .tarjeta.color-acento-botones.p-3(x="31%" y="75%")
                .h5.mb-2 Cierre
                p Cierre del ciclo, estados financieros.
              .tarjeta.color-acento-botones.p-3(x="52%" y="7%")
                .h5.mb-2 Apertura
                p Estado actual de la empresa, capital, activos y pasivos.
              .tarjeta.color-acento-botones.p-3(x="70%" y="75%")
                .h5.mb-2 Desarrollo
                p Registro cronológico, libro diario y libro mayor y balance.
        p.mb-5 En la siguiente figura, se presentan las fases de un ciclo contable:
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-5
              p Ciclo contable
            figure
              img(src='@/assets/curso/img13.svg', style="width: 1200px").m-auto
              figcaption.mt-4 Nota. Tomada de Sánchez (2020)
        p.mb-5 Al analizar las fases en que se ajusta un ciclo contable, se evidencia que es importante estructurar registros contables en cada ejercicio de la actividad de la empresa, para que el ciclo recoja todas las operaciones del negocio a lo largo de un año, donde se identifican las transacciones diarias, el balance de prueba sin ajustar, la hoja de trabajo, los ajustes de entradas del diario, los estados financieros y el cierre de libros.
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Documento: Análisis y planeación financiera
                  p.text-small Para mayor conocimiento del tema, se sugiere leer el presente documento, que explicará de manera detallada los conceptos más utilizados en este tema. 
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo3.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    p.mb-0 Al comienzo del ejercicio, las operaciones elaboradas siempre van desde el 1 de enero hasta el 31 de diciembre. Además, en el proceso inicial del ciclo, se realiza la apertura de los libros contables, donde se lleva a cabo un inventario con una relación bien detallada de los bienes y obligaciones que forman parte del patrimonio de la organización.

</template>

<script>
export default {
  name: 'Tema3',
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
