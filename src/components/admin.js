import React, { Component } from 'react';

import db from '../utils/firebase';

class Admin extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      data: []
    };

    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    const self = this;
    const data = [];
    db.collection('vote').where('done', '==', false)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function (doc) {
          data.push(doc.data());
          console.log(doc.data());
        });

        self.setState({data: data});
        console.log(self.state.data);
      })
      .catch(function (error) {
        console.log('ERROR');
      });
  }

  handleData(event) {
    // this.state.data = event.target.value;
  }
  render() {
    return (
      <div>
        {this.state.data.forEach(el => <span>{el.ether_address}, {el.recommenderAddress}, {el.vote_url}</span>)}
      </div>
    )
  }
}

export default Admin;