import React from 'react';

const Body = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenue sur mon blog React</h1>
      <p style={styles.paragraph}>
        Ici, vous trouverez des articles intéressants sur le développement web, React.js,
        et d'autres sujets passionnants. Explorez les posts ci-dessus pour en savoir plus !
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '60vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default Body;
