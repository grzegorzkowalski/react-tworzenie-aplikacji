import {FC, JSX} from 'react';

const Search : FC = () : JSX.Element => {
    return (
        <div>
            <input type="text" placeholder="wpisz czego szukasz"/>
            <button>Wyszukaj</button>
        </div>
    );
};

export default Search;