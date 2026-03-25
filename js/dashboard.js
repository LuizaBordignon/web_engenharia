const sensors = [
  { id: 1, name: 'Sensor 01', location: 'Linha A', status: 'online' },
  { id: 2, name: 'Sensor 02', location: 'Linha A', status: 'online' },
  { id: 3, name: 'Sensor 03', location: 'Linha B', status: 'alerta' },
  { id: 4, name: 'Sensor 04', location: 'Linha B', status: 'online' },
  { id: 5, name: 'Sensor 05', location: 'Linha C', status: 'critico' },
  { id: 6, name: 'Sensor 06', location: 'Linha C', status: 'online' },
  { id: 7, name: 'Sensor 07', location: 'Linha D', status: 'alerta' },
  { id: 8, name: 'Sensor 08', location: 'Linha D', status: 'online' },
]

function renderizarSensores() {
  var grid = document.getElementById('sensors-grid')
  var html = ''

  for (var i = 0; i < sensors.length; i++) {
    var sensor = sensors[i]
    var agora = new Date().toLocaleTimeString('pt-BR')

    html += '<div class="sensor-card ' + sensor.status + '">'
    html += '<p class="sensor-name">' + sensor.name + '</p>'
    html += '<p class="sensor-location">' + sensor.location + '</p>'
    html += '<p class="sensor-status ' + sensor.status + '">' + sensor.status + '</p>'
    html += '<p class="sensor-time">última leitura: ' + agora + '</p>'
    html += '</div>'
  }

  grid.innerHTML = html

  var online = 0
  var alerta = 0
  var critico = 0

  for (var i = 0; i < sensors.length; i++) {
    if (sensors[i].status === 'online')  online++
    if (sensors[i].status === 'alerta')  alerta++
    if (sensors[i].status === 'critico') critico++
  }

  document.getElementById('count-online').textContent = online
  document.getElementById('count-alerta').textContent = alerta
  document.getElementById('count-critico').textContent = critico
}

setInterval(function() {
  var statuses = ['online', 'alerta', 'critico']
  var i = Math.floor(Math.random() * sensors.length)
  var novoStatus = statuses[Math.floor(Math.random() * statuses.length)]

  sensors[i].status = novoStatus

  renderizarSensores()
}, 3000)

renderizarSensores()