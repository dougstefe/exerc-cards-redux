import "./Card.css"

const Card = (props) => (
    <div className="card" style={{backgroundColor: props.color}}>
        <div className="title">
            <h2>{props.title}</h2>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
)

export default Card