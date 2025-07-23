// PostPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '40px' }}>
      <h1>Détails de l'article #{id}</h1>
      <p>Ici tu peux afficher plus de contenu selon l’ID de l’article.</p>
    </div>
  );
};

export default PostPage;
