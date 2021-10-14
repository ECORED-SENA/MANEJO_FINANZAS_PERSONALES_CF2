<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-color1.px-5
      .col-12
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5YmogcaJt0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.align-items-center.mb-4
          .col-lg-6
            p Además, en este componente, se evidenciarán diferentes clases, modelos y ejemplos de cómo desarrollar un buen presupuesto, cómo ejecutarlo y cómo, a partir de ahí, poder emitir análisis básico financiero de lo ejecutado comparado con lo proyectado. Para ello, se utilizará matemática financiera, para que sea posible ver diferentes escenarios y analizar con prospectiva situaciones que generan los gastos, los ingresos y las variables de estos. 
            p El ciclo contable es el periodo de tiempo donde se registran todas las transacciones que ocurren en la organización, ya sea mensual, trimestral o anual; estos son los pasos para mostrar finalmente la información financiera de la organización.
            .cajon.color-primario.p-4.mb-4
              p.mb-0 Por lo anterior, se espera que sea de gran importancia e interés para quienes tengan la oportunidad de emprender este tema, el cual incluye formatos, modelos, clases, análisis del ciclo contable, matemáticas financieras, Excel y otras herramientas para elaboración de los presupuestos con ética y responsabilidad.
          .col-lg-6
            figure(data-aos="flip-left")
              img(src='@/assets/curso/img1.svg', style="width: 650px").m-auto
        p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en #[b elaboración y estructuración de presupuestos], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del #[b presupuesto para el manejo de las finanzas personales].


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
