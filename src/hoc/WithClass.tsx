import React from 'react';

const withClass = (props: any) => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;