import {connect} from "react-redux"
import Card from "./Card";

function Average(props){
    console.log(props)
    return (
        <Card color="#cf7070" title="Média">
            {(props.numbers.minimum + props.numbers.maximum) / 2}
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Average)