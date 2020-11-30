import {connect} from "react-redux"
import Card from "./Card";

function Sum(props){
    return (
        <Card color="#6c7fd4" title="Soma">
            {props.numbers.minimum + props.numbers.maximum}
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Sum)