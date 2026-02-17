/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Tecnologias({ iconObject }) {
  return (
    <article className="cont_tecnologias-padre">
      {
        <>
          <section className="cont_child-grid">
          <h2 className="h2-center h2-tecno">Frontend</h2>
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
          <h2 className="h2-center h2-tecno1">Backend</h2>
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
          <h2 className="h2-center h2-tecno2">Herramientas</h2>
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
          <h2 className="h2-center h2-tecno3">Aprendiendo</h2>
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
