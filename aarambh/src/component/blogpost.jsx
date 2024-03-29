import React from 'react';
import PopupMessage from './popup';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '30 Days D.S.A session',
      image: '30daydsa.png',
      description: 'Join our 30 Days DSA Challenge for a daily dose of Data Structures and Algorithms practice. Elevate your coding skills, tackle real-world problems, and strengthen your algorithmic thinking throughout this intensive month-long program. Level up your programming expertise with us!',
    },
    {
      id: 2,
      title: 'Google Solution Challenge',
      image: 'solution-challenge.jpg',
      description: 'Empower sustainable development through our Android and ML Solution Challenge.',
    },
    {
      id: 3,
      title: 'git and Github session',
      image: 'github-event.png',
      description: 'Embark on a learning journey with our Git and GitHub workshop! Discover the power of version control, collaboration, and project management in software development. Join us to enhance your skills and become proficient in leveraging these essential tools for successful coding projects.',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className='mx-16 mt-8'>
    <div className="bg-gray-100 container py-8">
      <h2 className="text-3xl font-bold mx-8 mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-8 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={post.image} alt={post.title} className="w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <PopupMessage/>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blog;
