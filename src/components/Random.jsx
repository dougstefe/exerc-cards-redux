import {connect} from "react-redux"
import Card from "./Card";

function Random(props){
    return (
        <Card color="#b770cf" title="Aleatório">
            {props.numbers.minimum + Math.floor((props.numbers.maximum - props.numbers.minimum) * Math.random())}
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Random)