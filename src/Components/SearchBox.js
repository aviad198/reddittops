import React from 'react';

const SearchBox = ({searchChange,onSubmit }) => {
    return (
        <div className={'pa2'}>
            <input
                className={'pa3 ba b - blue bg-lightest-blue'}
                type={'search'}
                placeholder={'search subreddits topics'}
                onChange={searchChange}
            /> <button className={'w-15 grow f4 link ph3 pv2 dib white bg-blue'}
                       onClick={onSubmit}>Find</button>
        </div>

    );
}
export default SearchBox;
