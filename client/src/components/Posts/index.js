import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/posts`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }
  render() {
    if (this.state.posts.length > 0) {
      return (
        <div className="posts text-left">
            {this.state.posts.map(post =>
                <div key={post._id}>
                    <h1>{post.titulo}</h1>
                    <h3>{post.subtitulo}</h3>
                    <p>{post.mensagem}</p>
                </div>
            )}
        </div>
      );
    }
    return(
      <div>
        <div id="space-loader"></div>
        <div id="loader"></div>
      </div>
    )
  }
}

export default Posts;
