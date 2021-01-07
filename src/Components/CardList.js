import React from 'react'
import Card from "./Card";

const CardList = ({topReddits}) => {
    console.log(topReddits)
    return (
        <div>
            {
              topReddits.map((reddits, i) => {
                    return (<Card
                            key={i}
                            title={topReddits[i].data.title}
                            content={topReddits[i].data.selftext}
                            url={topReddits[i].data.url}
                            author={topReddits[i].data.title.author}
                        />
                    );
                })
            }

        </div>
    );
}

export default CardList;
