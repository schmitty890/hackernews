import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [{
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
]

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: list,
      };

      this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(id) {
      // 1 //there are many ways to do this, showing 4 ways here
      const updatedList = this.state.list.filter(function isNotId(item) {
        return item.objectID !== id;
      });
      // 2
      // function isNotId(item) {
      //   return item.bojectID !== id;
      // }
      // 3
      // const isNotId = item => item.objectID !== id;
      // 4 //inlined, but less readable
      // const updatedList = this.state.list.filter(item => item.objectID !== id);
      this.setState({ list: updatedList });
    }

    render() {
        return ( 
          <div className="App">
            {this.state.list.map(item => 
                <div key={item.objectID}>
                  <span>
                  <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                  <span>
                    <button 
                      onClick={() => this.onDismiss(item.objectID)} 
                      type="button"
                    >
                      Dismiss
                    </button>
                  </span>
                </div>  
            )}
          </div>
        );
    }
}

export default App;