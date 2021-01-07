import React from 'react';

/*
Card comp returns a Button with the subreddit title and a function to open it in a new tab
 */

const Card = ({title,url}) => {
    return(

          <button className={'w-75 h-auto tc bg-light-blue dib br3 ma2 grow bw2 shadow-5'} onClick={ () =>NewTab(url)}>
              <h2 className={'pa3'}>{title}</h2>
          </button>
    );
}

function NewTab(url){
    window.open(
        url, "_blank");
}

export default Card;
