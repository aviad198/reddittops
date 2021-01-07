import React from 'react'
import Card from "./Card";

/*
CardList gets JSON array of subreddits and create a card for each one
 */

const CardList = ({topReddits}) => {
    console.log(topReddits)
    return (
        <div>
            {
              topReddits.map((reddits, i) => {
                    return (<Card
                            key={i}
                            title={topReddits[i].data.title}
                            url={topReddits[i].data.url}
                        />
                    );
                })
            }

        </div>
    );
}

export default CardList;
