/* eslint-disable react/prop-types */
export function Projects({projectObject}){
    return(
        <article className="cont_card-padre">
            {projectObject.map((element,j)=> {
                return (
                <section key={j} className={`cards ${j == 2 ? 'sportmoon' : null}`}>
                     <b className="etiqueta-project etiquetas">{element.type}</b>
                    <div className="cont_img_projects">
                       
                        <img src={element.img} alt=""className={` ${j == 2 ? 'img-sportmoon' : 'img-cards'}`}/>
                    </div>
                    
                    <div className="cont_info-cards">
                    {j == 2 ? <br/> : null}
                    <h3>{element.name}</h3>
                    <br />
                    <p>{element.description}</p>
                    <div style={{'marginTop':'10px'}}>
                    {element.tecnologia.map((elements,k)=>{
                        return <b className="etiquetas" style={{'marginTop': '10px'}} key={k}>{elements}</b>
                    })}
                    </div>
                    <div className="cont_a_cards">
                    <a href="" className="a-cards">Code</a>
                    <a href="" className="a-cards">Preview</a>
                    </div>
                    </div>
                </section>)
            })}
        </article>
    ) 
}