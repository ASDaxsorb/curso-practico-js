const perimetroCuadrado = ladoCuadrado => ladoCuadrado * 4
const areaCuadrado = ladoCuadrado => ladoCuadrado * ladoCuadrado

console.log(`El perímetro del cuadrado es ${perimetroCuadrado(5)} cm`)
console.log(`El área del cuadrado es ${areaCuadrado(5)} cm^2`)

// Triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
const areaTriangulo = (base, altura) => (base * altura) / 2

console.log(`El perimetro del triángulo es: ${perimetroTriangulo(6, 6, 4)} cm`)
console.log(`El área del triángulo es: ${areaTriangulo(4, 2.5)} cm`)

// Circulo
const PI = Math.PI
const perimetroCirculo = radio => PI * (radio * 2)
const areaCirculo = radio => PI * radio ** 2

console.log(`El perimetro del circulo es: ${perimetroCirculo(4)} cm`)
console.log(`El área del circulo es:${areaCirculo(4)} cm`)

// Triangulo isósceles
const alturaTrianguloIsoceles = (lado1, lado2, base) => {
  if (lado1 !== lado2) {
    console.log('Este no es un triangulo isósceles')
    return
  } else {
    let altura = lado1 ** 2 - base ** 2 / 4
    altura = Math.sqrt(altura)
    console.log(`La altura de el triangulo isóceles es de ${altura} cm`)
    return altura
  }
}

alturaTrianguloIsoceles(4, 4, 3)
