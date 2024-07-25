/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Tecnologias({ iconObject }) {
  return (
    <article className="cont_tecnologias-padre">
      {
        <>
          <section className="cont_child-grid">
          <h2 className="h2-center">Frontend</h2>
          <div className="cont_types">
          {iconObject.map((element, j) => {
              if (element.type == 'Frontend') {
                return (
                  <div key={j} className="grid-child">
                    <img src={element.svg} alt="" className="icon-tecnologia" />
                    <p>{element.name}</p>
                  </div>
                );
              }
            })}
          </div>
            
          </section>
          <section className="cont_child-grid">
          <h2 className="h2-center">Backend</h2>
          <div className="cont_types">
          {iconObject.map((element, j) => {
              if (element.type == 'Backend') {
                return (
                  <div key={j} className="grid-child">
                    <img src={element.svg} alt="" className="icon-tecnologia" />
                    <p>{element.name}</p>
                  </div>
                );
              }
            })}
          </div>
            
          </section>
          <section className="cont_child-grid">
          <h2 className="h2-center">Herramientas</h2>
          <div className="cont_types">
          {iconObject.map((element, j) => {
              if (element.type == 'Herramientas') {
                return (
                  <div key={j} className="grid-child">
                    <img src={element.svg} alt="" className="icon-tecnologia" />
                    <p>{element.name}</p>
                  </div>
                );
              }
            })}
          </div>
            
          </section>
          <section className="cont_child-grid">
          <h2 className="h2-center">Aprendiendo</h2>
          <div className="cont_types">
          {iconObject.map((element, j) => {
              if (element.type == 'Aprendiendo') {
                return (
                  <div key={j} className="grid-child">
                    <img src={element.svg} alt="" className="icon-tecnologia" />
                    <p>{element.name}</p>
                  </div>
                );
              }
            })}
          </div>
            
          </section>
        </>
      }
    </article>
  );
}
