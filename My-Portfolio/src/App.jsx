/* eslint-disable no-useless-escape */

import { useEffect, useState } from 'react'
import './App.css'
import { Projects } from './Components/Projects'
import { Tecnologias } from './Components/Tecnologias'
import result from "./json/tecnologia.json";
export function App() {
  const projectObject = result.project;
  console.log(projectObject);
  const iconObject = [
    {
      name : 'JavaScript',
      svg : 'svg/file_type_js_official_icon_130509.svg',
      type: 'Frontend'
    },{
      name : 'Css',
      svg : 'svg/file_type_css_icon_130661.svg',
      type: 'Frontend'
      
    },{
      name : 'HTML',
      svg : 'svg/file_type_html_icon_130541.svg',
      type: 'Frontend'
    },{
      name: 'Python',
      svg : 'svg/file_type_python_icon_130221.svg',
      type: 'Backend'
    },{
      name: 'React',
      svg : 'svg/react_original_logo_icon_146374.svg',
      type: 'Frontend'
    },{
      name: 'Git',
      svg : 'svg/file_type_git_icon_130581.svg',
      type: 'Herramientas'
    },{
      name: 'GitHub',
      svg : 'svg/github_git_icon_145985.svg',
      type: 'Herramientas'
    },{
      name: 'NodeJs',
      svg : 'svg/file_type_node_icon_130301.svg',
      type: 'Backend'
    },{
      name: 'VSC',
      svg : 'svg/file_type_vscode_icon_130084.svg',
      type: 'Herramientas'
    },{
      name: 'Vite',
      svg : 'svg/vite_logo_icon_249258.svg',
      type: 'Herramientas'
    },{
      name: 'React Native',
      svg : 'svg/react_icon_212902.svg',
      type: 'Aprendiendo'
    },{
      name: 'AstroJs',
      svg : 'svg/astro_logo_icon_247543.svg',
      type: 'Aprendiendo'
    },{
      name: 'MySql',
      svg : 'svg/mysql_original_wordmark_logo_icon_146417.svg',
      type: 'Aprendiendo'
    },{
      name: 'Flask',
      svg: 'svg/pocoo_flask_logo_icon_168045.svg',
      type: 'Backend'
    },{
      name: 'Npm',
      svg: 'svg/npm_original_wordmark_logo_icon_146402.svg',
      type: 'Herramientas'
    },{
      name: 'Tailwind',
      svg: 'svg/file_type_tailwind_icon_130128.svg',
      type: 'Aprendiendo'
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
