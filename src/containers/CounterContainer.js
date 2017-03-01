import { connect } from 'react-redux';
import { increment } from '../actions/counter';
import Counter from '../components/Counter';

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addOne: () => {
            dispatch(increment(1));
        },
        addTwo: () => {
            dispatch(increment(2));
        }
    };
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;
