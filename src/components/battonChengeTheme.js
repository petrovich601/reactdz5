import { Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux'

const battonChengeTheme = (state) => {
    return (
        <button onClick={state.theme}>ChengeTheme</button>
    );
}

export default connect(battonChengeTheme)