
document.getElementById('agregarBtn').addEventListener('click', agregarPizza)
var pizzas = []

function agregarPizza() {
    var precioPizza = document.getElementById('precioPizza').value
    var diametroPizza = document.getElementById('diametroPizza').value

    //objeto pizza
    pizza = {
        precio: precioPizza,
        diametro: diametroPizza
    }
    pizzas.push(pizza)
    pizzas.forEach(p => {
        var precioF = parseFloat(p.precio)
        var diametroF = parseFloat(p.diametro)
        console.log(precioF + " , " + diametroF)
    });
    limpiarFormulario()
}

function limpiarFormulario() {
    document.getElementById('precioPizza').value = ""
    document.getElementById('diametroPizza').value = ""
}