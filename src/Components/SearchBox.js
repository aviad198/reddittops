import React from 'react';

/*
Search box to search subreddits
get searchChange and onSumbit funcs and calls them at change or click
 */


const SearchBox = ({searchChange,onSubmit }) => {
    return (
        <div className={'pa2'}>
            <input
                className={'pa3 ba b - blue bg-lightest-blue'}
                type={'search'}
                placeholder={'search subreddits topics'}
                onChange={searchChange}
            />
            <button className={'w-15 grow f4 link ph3 pv2 dib white bg-blue'}
                       onClick={onSubmit}>Find</button>
        </div>

    );
}
export default SearchBox;
