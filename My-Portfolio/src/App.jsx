/* eslint-disable no-useless-escape */

import './App.css';
import { Projects } from './Components/Projects';
import { Tecnologias } from './Components/Tecnologias';
import result from './json/tecnologia.json';
import response from './json/proyectos.json';
export function App() {
  const projectObject = result.project;

  const iconObject = response.iconos;
  return (
    <>
      <header className="cont_header-padre">
        <a href="#about">SOBRE MI</a>
        <a href="#projects">PROYECTOS</a>
        <a href="#tecnologias">TECNOLOGÍAS</a>
      </header>
      <article className="cont_app-padre">
        <section className="presentacion">
          <div className="cont_img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"
              alt="Abraham Alfonzo"
              className="yo_img"
            />
            <a href="">Disponible para trabajar</a>
          </div>
          <br />
          <h1 id="about">Hey, soy Abraham</h1>
          <br />
          <p>
            Desarrollador web fullstack ,{' '}
            <span className="span_yellow">
              estudiante de Ingienieria Informática{' '}
            </span>
            de Caracas, VEN. Especializado en el{' '}
            <span className="span_yellow">
              desarrollo de aplicaciones web únicas.
            </span>
          </p>
          <br />
          <br />
          <div>
            <a href="" className="a-cards">
              Contáctame
            </a>
            <a href="" className="a-cards">
              LinkedIn
            </a>
          </div>
        </section>
        <br />
        <section className="cont_proyectos-padre">
          <h2 id="projects">PROYECTOS</h2>
          <br />
          <p>
            Mis proyectos más emocionantes y creativos.
            <span className='span_blue'>
             Cada proyecto es el
            resultado de mi dedicación y pasión por la programación.
            </span> ¡Descubre
            cómo transformo ideas en realidades digitales!
          </p>
          <br />
          <Projects projectObject={projectObject} />
        </section>
        <section className="cont_tecnoloias-padre">
          <h2 id="tecnologias">TECNOLOGiAS</h2>
          <p>
            En mi viaje por el mundo del desarrollo web,
            <span className="span_yellow">
              he cultivado experiencia y habilidades en una variedad de
              tecnologías
            </span>
            , Mi stack tecnológico incluye:
          </p>
          <br />
          <Tecnologias iconObject={iconObject} />
        </section>
        <section>
          <h2>Sobre mí</h2>
          <p>
            Me llamo Abraham Alfonzo, actualmente estudiante de Ingeniería
            Informática. Desde que descubrí el mundo de la programación, he
            estado inmerso en el aprendizaje y la aplicación de diversas
            tecnologías que me permiten dar vida a mis ideas a través de la web.
          </p>
        </section>
      </article>
    </>
  );
}

export default App;
