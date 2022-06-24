import React from 'react';
import Main from '../Main';
import Page404 from '../Page404';

interface Props {
    id: String
}

function MiddleContent(props: Props) {
    switch (props.id) {
        case 'main':
            return <Main />;
        default:
            return <Page404 />;
    }
}

export default MiddleContent;