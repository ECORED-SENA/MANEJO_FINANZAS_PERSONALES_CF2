<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Ética y responsabilidad
    .row.bg-color7.px-5.mb-5
      .col-12
        .row.align-items-top.mt-5
          .col-lg-6
            p.mb-0.mt-4 La ética profesional es un pilar fundamental para cualquier persona dentro del entorno laboral, significa comprender su relación con la parte financiera de la organización. Por ello, la transparencia, la buena fe, la honestidad y la responsabilidad son vistas en conjunto con la ética. A la hora de realizar la construcción y seguimiento de los presupuestos, es importante contar con el conocimiento técnico, pero es primordial integrar el componente humano (ética y responsabilidad), para garantizar procesos eficientes y exitosos para la vida personal y profesional. La persona encargada del presupuesto cumple un papel fundamental en la organización, como es brindar la información financiera a los propietarios, inversionistas, proveedores; los cuales depositan toda su confianza en ella.
          .col-lg-6
            figure(data-aos="flip-left")
              img(src='@/assets/curso/img17.svg', style="width: 550px").m-auto
    .row.bg-color8.px-5
      .col-12
        .titulo-sexto.color-acento-contenido
          p Trabajo con ética
        .row.align-items-top.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img18.svg', style="width: 550px").m-auto
          .col-lg-6
            p.mb-0 Mencionado lo anterior, el profesional encargado de la elaboración y gestión de presupuestos debe actuar con responsabilidad social en la toma de decisiones, al no primar el interés particular o individual sobre el general; esto debido a que cualquier tipo de decisión no solo impactará la situación financiera de un negocio, empresa u organización, sino también la credibilidad y buen nombre de estos. Es así que, para evitar estos riesgos, las entidades públicas y privadas cuentan con áreas encargadas de auditar, controlar y hacer seguimiento de este tipo de actuaciones, como: control interno, gestión de calidad, auditoría interna, etc. Y a nivel externo, las empresas también pueden ser vigiladas, auditadas y sancionadas por entidades como: Contraloría General de Nación, Procuraduría General de Nación, DIAN, etc.

</template>

<script>
export default {
  name: 'Tema6',
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
