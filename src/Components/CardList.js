import React from 'react'
import Card from "./Card";

/*
CardList gets JSON array of subreddits and create a card for each one
 */

const CardList = ({topReddits}) => {
    return (
        <div>
            {
              topReddits.map((reddit, i) => {
                    return (<Card
                            key={i}
                            title={reddit.data.title}
                            url={reddit.data.url}
                        />
                    );
                })
            }

        </div>
    );
}

export default CardList;
