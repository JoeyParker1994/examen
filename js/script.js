const form = document.getElementById('vehiculo-form');
const vehiculos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const vehiculo = document.getElementById('vehiculo').value;
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;

  const data = { vehiculo, marca, modelo };
  vehiculos.push(data);

  guardarVehiculos();
});

function guardarVehiculos() {
  const json = JSON.stringify(vehiculos, null, 2).replace(/\n/g, '\n\n');
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'vehiculos.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const contarVehiculosBtn = document.getElementById('contar-vehiculos');
const numeroVehiculosInput = document.getElementById('numero-vehiculos');

contarVehiculosBtn.addEventListener('click', () => {
  numeroVehiculosInput.value = vehiculos.length;
});

