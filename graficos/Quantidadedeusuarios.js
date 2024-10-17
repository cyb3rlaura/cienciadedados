import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuarios() {
  const url = ‘https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json’
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeDeUsuario = Object.values(dados)

  const data = [
    {
      x: nomeDasRedes,
      y:quantidadeDeUsuario,
      type: 'bar'
      marker: {
         color: getCSS('--primary-color')
  }
    }
]

  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários',
      x: 0,
       font: {
         color: getCSS('--primary-color'),
         size: 30,
         font: getCSS('--font')
       }
    },
    xavis: {
      tickfont: tickConfig,
      title: {
        text: 'Nome das redes'
        font: {
          color: getCSS('secundary-color')
         }
   }
   },

yaxis: {
  tickfont: tickConfig,
    title: {
    text: 'Bilhões de usuário ativos',
      font: {
      color: getCSS('--secundary-color')

const graficos = document.createElement('div')
  grafico.className = 'graficos'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data)
}

quantidadedeUsuariosPorRedes()
