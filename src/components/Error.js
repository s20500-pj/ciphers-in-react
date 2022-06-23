import React from 'react';

import {useLocation} from 'react-router-dom';

export default function Error() {
    let location = useLocation();
    return <div><a className={'link-info display-2 text-decoration-none'} href="/">HOME</a>
        <p>brak takiej podstrony jak: {location.pathname}</p>
    </div>
}