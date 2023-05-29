import { useEffect } from "react";
import { useState } from "react"
import Card from 'react-bootstrap/Card';

const PostList = () => {
  const [posts, setPosts] = useState()

  const fetchPosts = () => {
    fetch(`https://dummyjson.com/posts`)
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container-fluid px-4">
      <h4 className="mt-0">Post List</h4>
      {posts?.map((post) => (
        <Card key={post.id} className="col-12">
          <Card.Body >
            <Card.Title><h4 className="mt-0">{post.title}</h4></Card.Title>
            <Card.Subtitle className="mb-2 mt-2 text-muted">{post.tags[0]}</Card.Subtitle>
            <Card.Text>
              {post.body}
            </Card.Text>
            {post.tags?.map((post,index) => (
              <div key={index} className="d-inline-flex ms-n4">
                <Card className=" mx-2">
                  <Card.Body >
                    <Card.Title>{post}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default PostList