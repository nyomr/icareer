"use client";
import { useEffect, useState } from 'react';

export default function PostTable() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Company</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Salary</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post._id}>
              <td className="py-2 px-4 border-b">{post.title}</td>
              <td className="py-2 px-4 border-b">{post.company}</td>
              <td className="py-2 px-4 border-b">{post.location}</td>
              <td className="py-2 px-4 border-b">{post.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
