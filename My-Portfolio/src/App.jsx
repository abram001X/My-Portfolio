/* eslint-disable no-useless-escape */

import './App.css'
import { Projects } from './Components/Projects'
import { Tecnologias } from './Components/Tecnologias'
export function App() {
  const projectObject = [{
    name : 'Book-Gallery',
    img : null,
    description : '!Descubre una amplia variedad de libros en Book-Gallery, donde podrás explorar la información detallada de cada título¡ Desde novelas clásicas hasta los últimos lanzamientos.'
  },{
    name : 'ConvertVideo',
    img : null,
    description : 'ConvertMoon es una página web que te permite convertir videos de YouTube para que puedas descargarlos en tu dispositivo.'
  },{
    name : 'SportMoon',
    img : null,
    description : 'SportMoon es una página de fútbol, dedicado exclusivamente a todo lo relacionado con este deporte.'
  }
]

  const iconObject = [
    {
      name : 'JavaScript',
      svg : 'img\file_type_js_official_icon_130509.svg'
    },{
      name : 'Css',
      svg : 'img\file_type_css_icon_130661.svg'
    },{
      name : 'HTML',
      svg : 'img\file_type_html_icon_130541.svg'
    },{
      name: 'Python',
      svg : 'img\file_type_python_icon_130221.svg'
    },{
      name: 'React',
      svg : 'img\react_original_logo_icon_146374.svg'
    },{
      name: 'Git',
      svg : 'img\file_type_git_icon_130581.svg'
    },{
      name: 'GitHub',
      svg : 'img\github_git_icon_145985.svg'
    },{
      name: 'NodeJs',
      svg : 'img\file_type_node_icon_130301.svg'
    },{
      name: 'Visual Studio Code',
      svg : 'img\file_type_vscode_icon_130084.svg'
    },{
      name: 'Vite',
      svg : 'img\vite_logo_icon_249258.svg'
    },{
      name: 'React Native',
      svg : 'img\react_icon_212902.svg'
    },{
      name: 'AstroJs',
      svg : 'img\astro_logo_icon_247543.svg'
    },{
      name: 'MySql',
      svg : 'img\mysql_original_wordmark_logo_icon_146417.svg'
    },{
      name: 'Flask',
      svg: 'img\pocoo_flask_logo_icon_168045.svg'
    }

  ]
  return (
    <>
  <header className='cont_header-padre'>
    <a href='#about'>SOBRE MI</a>
    <a href='#projects'>PROYECTOS</a>
    <a href='#tecnologias'>TECNOLOGÍAS</a>
  </header>
    <article className='cont_app-padre'>
      <section className='presentacion'>
      <h1>Abraham Alfonzo, Full Stack Developers</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png" alt="Abraham Alfonzo" className='yo_img'/>
      </section>
      <section className='cont_proyectos-padre'>
          <h2>PROYECTOS</h2>
          <Projects projectObject={projectObject}/>
      </section>
        <h2>Tecnologías</h2>
        <Tecnologias iconObject={iconObject}/>
    </article>
    </>
  )
}

export default App
