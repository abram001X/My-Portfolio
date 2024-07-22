/* eslint-disable react/prop-types */
export function Projects({projectObject}){
    return(
        <article className="cont_card-padre">
            {projectObject.map((element,j)=> {
                return (
                <section key={j} className="cards">
                    <h2>{element.name}</h2>
                    <img src="" alt="" />
                    <p>{element.description}</p>
                </section>)
            })}
        </article>
    ) 
}