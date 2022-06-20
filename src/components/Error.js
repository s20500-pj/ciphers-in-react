import React from 'react';

import {useLocation} from 'react-router-dom';

export default function Error() {
    let location = useLocation();
    return <p>brak takiej podstrony jak: {location.pathname}</p>;
}
