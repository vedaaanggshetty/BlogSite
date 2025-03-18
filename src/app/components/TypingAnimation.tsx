import React, { useState, useEffect } from 'react';

const TypingAnimation: React.FC = () => {
  const sentences = [
    "Hey, we’re BlogSite.",
    "See our thoughts, stories, and ideas.",
    "Welcome to our creative space.",
    "Explore the world of blogging with us.",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50; // Speed of typing (in milliseconds)
  const deletingSpeed = 30; 
  const pauseBetweenSentences = 1000; 

  useEffect(() => {
    const handleTyping = () => {
      const currentSentence = sentences[currentSentenceIndex];

      if (!isDeleting) {
        // Typing logic
        if (currentText.length < currentSentence.length) {
          setCurrentText(currentSentence.substring(0, currentText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), pauseBetweenSentences);
        }
      } else {
        // Deleting logic
        if (currentText.length > 0) {
          setCurrentText(currentSentence.substring(0, currentText.length - 1));
        } else {
          // Move to the next sentence
          setIsDeleting(false);
          setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [currentText, isDeleting, currentSentenceIndex, sentences]);

  return (
    <div className="container">
      <h1 className="h1 hero-title">
        <strong className="strong">{currentText}</strong>
        <span className="cursor">|</span> {/* Cursor animation */}
      </h1>
    </div>
  );
};

export default TypingAnimation;