/* eslint-disable no-useless-escape */

import './App.css';
import { Projects } from './Components/Projects';
import { Tecnologias } from './Components/Tecnologias';
import response from './json/tecnologias.json';
import result from './json/projects.json';
export function App() {
  const projectObject = result.project;

  const iconObject = response.iconos;
  return (
    <>
      <header className="cont_header-padre">
        <a href="#about">Sobre mi</a>
        <a href="#projects">Proyectos</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="">Contacto</a>
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
          <h1 id="about">¡Hola, soy Abraham!</h1>
          <br />
          <p>
            Desarrollador web fullstack ,{' '}
            <span className="span_yellow">
              estudiante de Ingienieria Informática{' '}
            </span>
            de Caracas, VEN. <span className="span_yellow">Especializado en el{' '}
            
              desarrollo de aplicaciones web </span>únicas.
            
          </p>
          <br />
          <div>
            <a href="" className="a-cards">
              Contáctame
            </a>
            <a href="" className="a-cards">
              LinkedIn
            </a>
            <a href="" className="a-cards">
              Currículum
            </a>
          </div>
        </section>
        <br />
        <section className='cont_about-padre'>
          <h2 style={{'padding':'10px 0px'}}>Sobre mí</h2>
          <p>
            Me llamo Abraham Alfonzo, <span className='span_verde'> actualmente estudiante de Ingeniería
            Informática.</span> <br />Desde que descubrí el mundo de la programación, he
            estado inmerso en el aprendizaje y la aplicación de diversas
            tecnologías que me permiten dar vida a mis ideas a través de la web.
          </p>
          <div className='retrato_img'>
            <img src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=338&ext=jpg" alt="" className='img-about'/>
          </div>
          <a href=""  style={{'marginTop':'10px'}} className="a-cards">
              Currículum
            </a>
          </section>
        <section className="cont_proyectos-padre">
          <h2 id="projects">PROYECTOS</h2>
          <br />
          <p>
            Mis proyectos más emocionantes y creativos.
            <span className='span_verde'>
             Cada proyecto es el
            resultado de mi dedicación y pasión por la programación.
            </span> ¡Descubre
            cómo transformo ideas en realidades digitales!
          </p>
          <br />
          <Projects projectObject={projectObject} />
          <div className='cont_github'> 
          <a href="" className='github'>Mi repositorio</a></div>
        </section>
        <section className="cont_tecnoloias-padre">
          <h2 id="tecnologias">TECNOLOGiAS</h2>
          <br />
          <p>
            En mi viaje por el mundo del desarrollo web, <span className="span_verde"> he cultivado experiencia y habilidades en una variedad de tecnologías
            </span>
            . Mi stack tecnológico incluye:
          </p>
          <br />
          <Tecnologias iconObject={iconObject} />
        </section><br /><br /><br />
       
          
      </article>
      <footer className='cont_footer-padre'>
          <p>© 2024 AbrahamAlfonzo</p>
          <a>Contacto</a>
        </footer>
    </>
  );
}

export default App;
