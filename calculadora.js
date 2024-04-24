document.addEventListener("DOMContentLoaded", function() {
    function calcularTotal() {
        var valor = parseFloat(document.getElementById('valor').value);
        
        var iva = valor * 0.19;
        var timbre = valor * 0.03;
        var arancel = valor * 0.22;
        var fiscalizacionaduanera = valor * 0.25;
        var derechodeimportacion = valor * 0.02;
        var suma = valor + iva + timbre + arancel + fiscalizacionaduanera + derechodeimportacion;
    
        var resultadoHTML = '<strong>El Valor del producto es:</strong> ' + valor.toFixed(2) + '<br>' +
                           '<strong>El IVA al 19% es:</strong> ' + iva.toFixed(2) + '<br>' +
                           '<strong>El Arancel al 22% es:</strong> ' + arancel.toFixed(2) + '<br>' +
                           '<strong>El Timbre al 0.03% es:</strong> ' + timbre.toFixed(2) + '<br>' +
                           '<strong>El Fiscalizacion Aduanera al 0.25% es:</strong> ' + fiscalizacionaduanera.toFixed(2) + '<br>' +
                           '<strong>El Derecho de importación al 0.2% es:</strong> ' + derechodeimportacion.toFixed(2) + '<br>' +
                           '<strong>El total es:</strong> ' + suma.toFixed(2);
    
        document.getElementById('resultado').innerHTML = resultadoHTML;
    }

    window.calcularTotal = calcularTotal;
});
