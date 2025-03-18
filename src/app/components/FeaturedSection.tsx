import React from 'react';
import BlogCard from './BlogCard';

const FeaturedSection: React.FC = () => {
  const blogPosts = [
    {
      imageSrc: '/assets/images/featured-1.jpg',
      imageAlt: 'New technology is not good or evil in and of itself',
      authors: [
        { src: '/assets/images/author-1.jpg', alt: 'Author 1' },
        { src: '/assets/images/author-2.jpg', alt: 'Author 2' },    
      ],
      tags: ['Design', 'Idea', 'Review'],
      title: 'New technology is not good or evil in and of itself',
      description: 'Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare...',
    },
    // Add more blog posts here
  ];

  return (
    <section className="section featured" aria-label="featured post">
      <div className="container">
        <p className="section-subtitle">
          Get started with our <strong className="strong">best stories</strong>
        </p>

        <ul className="has-scrollbar">
          {blogPosts.map((post, index) => (
            <li key={index} className="scrollbar-item">
              <BlogCard {...post} />
            </li>
          ))}
             {blogPosts.map((post, index) => (
            <li key={index} className="scrollbar-item">
              <BlogCard {...post} />
            </li>
          ))}
             {blogPosts.map((post, index) => (
            <li key={index} className="scrollbar-item">
              <BlogCard {...post} />
            </li>
          ))}
             {/* {blogPosts.map((post, index) => (
            <li key={index} className="scrollbar-item">
              <BlogCard {...post} />
            </li>
          ))}    */}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedSection;