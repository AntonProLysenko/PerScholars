

export default function Article(props) {
    console.log(props)
  return (
    <article>
        <div className="title">
            <time>{props.date}</time>
            <h2>{props.title}</h2>
        </div>
        <img src={props.img.src} alt = {props.img.alt}/>
        <p>{props.text}</p>
        <a className="continues" href="#">Continues ...</a>
    </article>
  

    
  )
}
