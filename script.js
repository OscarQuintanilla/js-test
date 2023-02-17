// JS Code here...
function removeRow(id){
  let fila = document.getElementById(id)
  fila.parentNode.removeChild(fila)
}

document.getElementById('submit').addEventListener("click", function () {
  var id = Math.floor((Math.random() * 1000) + 1);
  var product = document.getElementById('product').value
  var price = document.getElementById('price').value
  var iva = document.getElementById('iva').value

  let buffer = document.getElementById('new-product').innerHTML;
  document.getElementById('new-product').innerHTML = buffer + `<tr id=${id}>
    <td>${id}</td>
    <td>${product}</td>
    <td>${price}</td>
    <td>${iva}</td>
    <td>${Number(Number(price) * (Number(iva) / 100)) + Number(price)}</td>
    <td>${(new Date()).toDateString()}</td>
    <td>
      <button class="btn btn-delete" onclick="removeRow(${id})">Delete</button>
    </td>
  </tr>`
})

document.getElementsByClassName('btn-delete')




//jonathan.juarez@jdoutstanding.com
