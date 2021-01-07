import './App.css';
import React from 'react'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import CardList from "../Components/CardList";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            topReddits: [],
            searchfield: 'sisco'
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    onButtonSubmit = () => {
        this.getTopReddits(this.state.searchfield)
    }


    async getTopReddits(searchfield) {
        try {
            const resp = await fetch(`https://www.reddit.com/r/${searchfield}/top.json`)
            const data = await resp.json()
            console.log(data)
            this.setState({topReddits: data.data.children})}
        catch(err)
            {
                console.log(err)
                this.setState({topReddits: []})
            }
        }

        async componentDidMount()
        {
            try {
                const resp = await fetch('https://www.reddit.com/r/news/top.json')
                const data = await resp.json()
                this.setState({topReddits: data.data.children})
                console.log(this.state.topReddits)
            } catch (err) {
                console.log(err)
                this.setState({topReddits: []})
            }
        }


        render()
        {
            const topReddits = this.state.topReddits;
            return(
                        <div className={'tc'}>
                            <h1 className={'f1'}>See top Subreddits to any topic</h1>
                            <SearchBox
                                searchChange={this.onSearchChange}
                                onSubmit={this.onButtonSubmit}/>
                            <Scroll>
                                <ErrorBoundry>
                                    {!topReddits.length ? <h1>No subreddits found</h1> :  <CardList topReddits={topReddits}/>}
                                </ErrorBoundry>
                            </Scroll>
                        </div>);
        }
    }


    export default App;
