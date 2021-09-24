<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Matemáticas financieras
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DCLBARuUI50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 A continuación, se describen algunos conceptos que facilitarán la implementación de matemáticas financieras en los presupuestos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Valor futuro").align-items-center.justify-content-center
        .col-lg-5.mb-4.mb-lg-0
          p.mb-4 El valor futuro de un valor presente es la cantidad de dinero de la cual se dispone al final del plazo de la operación financiera. El valor futuro es la suma del valor presente y los intereses devengados durante el tiempo en que se efectuó la inversión.
          p.text-center.text-white.mb-5.img-style3  VF = VP * ( 1 + I )^ n
          p #[b Ejemplo]:
          p La empresa invierte en un fondo $10.000.000 durante 3 años, a una tasa del 10% anual.
          p ¿Cuál será el valor acumulado al final de la inversión? 
          p Solución: $10.000.000 x (1.1)^3 = $13.310.000
        .col-lg-5
          figure
            img(src='@/assets/curso/img2.png', style="width: 350px").m-auto
      div(titulo="Valor presente")
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            p.mb-4 También llamado valor actual, es el valor actual de un flujo de fondos futuros, obtenidos mediante un descuento; es decir, la diferencia entre el costo de capital y el valor presente del flujo de efectivo futuro.
            p.text-center.text-white.mb-5.img-style3  VP = VF * ( 1 + I )^ -n 
            p #[b Ejemplo]:
            p #[b Ejemplo valor actual o presente de un pasivo]
            p A la empresa DELTA S.A. le efectuaron un préstamo, por lo cual firmó 4 letras de cambio con vencimientos anuales, así:
            p.ms-2 #[b a)] La primera por 4.000 um (unidades monetarias)
            p.ms-2 #[b b)] Las tres restantes por 5.000 um cada una
            p Teniendo en cuenta que el tipo de interés de descuento convenido es del 7,5%.
            p #[b ¿Cuál sería el valor actual de la deuda?]
            p #[b Solución:]
            p $4.000.000 x ( 1.075 )^-1 = 3,720,930,33
          .col-lg-5
            figure
              img(src='@/assets/curso/img3.png', style="width: 350px").m-auto
      div(titulo="Ejemplo valor actual o presente de un pasivo")
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Ejemplo]:
            p Solución: $4.000.000x(1.075)^-1 = 3.720.930,23
            p Solución: $4.000.000x(1.075)^-2 = 3.461.330,45
            p Solución: $4.000.000x(1.075)^-3 = 3.219.842,28
            p Solución: $4.000.000x(1.075)^-4 = 2.995.202,12
            p.ms-4 TOTAL VALOR ACTUAL = 13.397.305,08
          .col-lg-5
            figure
              img(src='@/assets/curso/img4.png', style="width: 350px").m-auto
      div(titulo="Plan de estudio bancario")
        .row.align-items-center.justify-content-center
          .col-10
            .tabla-b.color-acento-contenido.mb-5
              table
                tr
                  td(style="background-color: #2E9DAA").text-white Valor del crédito
                  td(style="background-color: #F6F6F6") 20,000,000.00
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                tr
                  td(style="background-color: #2E9DAA").text-white No. Cuotas
                  td 6
                  td(style="border-left: 1px solid gray")
                  td(style="border-left: 1px solid gray")
                  td(style="border-left: 1px solid gray")
                tr
                  td(style="background-color: #2E9DAA").text-white Tasa de interés
                  td(style="background-color: #F6F6F6") 2%
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                tr
                  td(style="background-color: #2E9DAA").text-white Valor cuota fija
                  td $3,570,516.25
                  td(style="border-left: 1px solid gray")
                  td(style="border-left: 1px solid gray")
                  td(style="border-left: 1px solid gray")
                tr
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray") Plan de pagos
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                tr(style="background-color: #2E9DAA").text-white
                  td Periodos
                  td Vr. Cuota
                  td Intereses
                  td Amortización
                  td Saldo
                tr
                  td(style="background-color: #F6F6F6") 0
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray")
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray") $20,000,000.00
                tr
                  td(style="border-left: 1px solid gray") 1
                  td(style="border-left: 1px solid gray") $3,570,516.25
                  td(style="border-left: 1px solid gray") $400,000.00
                  td(style="border-left: 1px solid gray") $3,170,516.25
                  td(style="border-left: 1px solid gray") $16,829,483.75
                tr
                  td(style="background-color: #F6F6F6") 2
                  td(style="background-color: #F6F6F6") $3,570,516.25
                  td(style="background-color: #F6F6F6") $336,589,.68
                  td(style="background-color: #F6F6F6") $3,233,926.57
                  td(style="background-color: #F6F6F6") $13,595,557.18
                tr
                  td(style="border-left: 1px solid gray") 3
                  td(style="border-left: 1px solid gray") $3,570,516.25
                  td(style="border-left: 1px solid gray") $271,911.14
                  td(style="border-left: 1px solid gray") $3,298,605.10
                  td(style="border-left: 1px solid gray") $10,296,952.08
                tr
                  td(style="background-color: #F6F6F6") 4
                  td(style="background-color: #F6F6F6") $3,570,516.25
                  td(style="background-color: #F6F6F6") $205,939.04
                  td(style="background-color: #F6F6F6") $3,364,577.21
                  td(style="background-color: #F6F6F6") $6,932,374.87
                tr
                  td(style="border-left: 1px solid gray") 5
                  td(style="border-left: 1px solid gray") $3,570,516.25
                  td(style="border-left: 1px solid gray") $138,647.50
                  td(style="border-left: 1px solid gray") $3,431,868.75
                  td(style="border-left: 1px solid gray") $3,500,506.12
                tr
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray") 6
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray") $3,570,516.25
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray") $70,010.12
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray") $3,500,506.12
                  td(style="background-color: #F6F6F6; border-left: 1px solid gray") -
      div(titulo="Valor presente año")
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            p El valor presente neto VPN es el valor actual de los flujos de caja netos menos la inversión inicial.
            p Si:
            p.ms-5 < 0, no se justifica.
            p VPN = 0, es indiferente.
            p.ms-5 > 0, se justifica el proyecto.
            p TIR : Tasa de interés que hace que el VPN sea igual a cero.
            p.ms-5 < TMRR, no se justifica.
            p TIR = 0, es indiferente.
            p.ms-5 > TMRR, se justifica el proyecto.
          .col-lg-5
            figure
              img(src='@/assets/curso/img5.png', style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
