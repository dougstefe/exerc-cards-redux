import { connect } from "react-redux"
import Card from "./Card";
import {changeMinimum, changeMaximum} from "../store/actions/numberActions"

function Interval(props){
    return (
        <Card color="#6cc478" title="Números">
            <label>Mínimo:</label><input type="number" value={props.numbers.minimum} onChange={e => props.handleChangeMinimum(+e.target.value)} />
            <label>Máximo:</label><input type="number" value={props.numbers.maximum} onChange={e => props.handleChangeMaximum(+e.target.value)} />
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numbers: state.numbers
    }
}

const mapDispatchToPros = dispatch => {
    return {
        handleChangeMinimum(newNumber){
            const action = changeMinimum(newNumber)
            dispatch(action)
        },
        handleChangeMaximum(newNumber){
            const action = changeMaximum(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(Interval)