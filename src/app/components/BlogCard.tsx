import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  authors: { src: string; alt: string }[];
  tags: string[];
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, imageAlt, authors, tags, title, description }) => {
  return (
    <div className="blog-card">
      <figure className="card-banner img-holder" style={{ "--width": 500, "--height": 600 } as React.CSSProperties}>
        <Image
          src={imageSrc}
          width={500}
          height={600}
          loading="lazy"
          alt={imageAlt}
          className="img-cover"
        />

        <ul className="avatar-list absolute">
          {authors.map((author, index) => (
            <li key={index} className="avatar-item">
              <a href="#" className="avatar img-holder" style={{ "--width": 100, "--height": 100 } as React.CSSProperties}>
                <Image
                  src={author.src}
                  width={100}
                  height={100}
                  loading="lazy"
                  alt={author.alt}
                  className="img-cover"
                />
              </a>
            </li>
          ))}
        </ul>
      </figure>

      <div className="card-content">
        <ul className="card-meta-list">
          {tags.map((tag, index) => (
            <li key={index}>
              <a href="#" className="card-tag">{tag}</a>
            </li>
          ))}
        </ul>

        <h3 className="h4">
          <a href="#" className="card-title hover:underline">
            {title}
          </a>
        </h3>

        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;