/* eslint-disable react/prop-types */
export function Projects({projectObject}){
    return(
        <article className="cont_card-padre">
            {projectObject.map((element,j)=> {
                return (
                <section key={j} className="cards">
                    <div className="cont_img_projects">
                        <b className="etiqueta-project">{element.type}</b>
                        <img src={element.img} alt="" className="img-cards"/>
                    </div>
                    <h3>{element.name}</h3>
                    <br />
                    <p>{element.description}</p>
                </section>)
            })}
        </article>
    ) 
}