import './App.css';
import React from 'react'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import CardList from "../Components/CardList";


class App extends React.Component {

    /*
    constructor init the topReddits array and the searched
     */
    constructor() {
        super();
        this.state = {
            topReddits: [],
            searchfield: ''
        }
    }

    /*
    sets the search field
     */
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    /*
    when sumbit calss getTopReddits to fetch API data
     */
    onButtonSubmit = () => {
        this.getTopReddits(this.state.searchfield)
    }

/*
Sync func to fetches Api data
gets the serchfield text and fetch JSON file from the subreddit
set states
 if error accords set topReddits to  empty array
 */
    async getTopReddits(searchfield) {
        try {
            const resp = await fetch(`https://www.reddit.com/r/${searchfield}/top.json`)
            const data = await resp.json()
            this.setState({topReddits: data.data.children})}
        catch(err)
            {
                this.setState({topReddits: []})
            }
        }

        /*
        shows news subreddit on component mount
         */
         componentDidMount()
        {

             this.getTopReddits('news')
        }

        render()
        {
           /* get state topReddits array*/
            const topReddits = this.state.topReddits;
            return(
                        <div className={'tc'}>
                            <h1 className={'f1'}>See top Subreddits to any topic</h1>
                            <SearchBox
                                searchChange={this.onSearchChange}
                                onSubmit={this.onButtonSubmit}/>
                            <Scroll>
                                <ErrorBoundry>
                                    {/*if ther is no sub reddit display "no such.." otherwise display cards*/}
                                    {!topReddits.length ? <h1>No subreddits found</h1> :  <CardList topReddits={topReddits}/>}
                                </ErrorBoundry>
                            </Scroll>
                        </div>);
        }
    }


    export default App;
