import React from 'react';
import ReactDOM from 'react-dom/client';

export class Heloo extends React.Component
{
    render()
    {
        return(
            <h1>
              {this.props.x}
            </h1>
        )
    }
}