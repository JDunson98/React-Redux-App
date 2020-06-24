import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFact } from '../actions';

const Fact = ({ getFact, fact, isFetching, error }) => {
    useEffect(() => {
        getFact();
    }, [getFact]);

    if (isFetching) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <h2>Your new joke is: {fact}</h2>
            <button onClick={getFact}>Get new joke</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        fact: state.fact,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getFact }
)(Fact);