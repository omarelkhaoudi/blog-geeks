import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';

const isConnected = true;

const Body = () => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Découverte de Marrakech',
      image: 'https://images.unsplash.com/photo-1653323792487-6ecc6217040b',
      description: 'Explorez les souks colorés et les monuments historiques de la ville ocre.',
    },
    {
      id: 2,
      title: 'Road trip dans le désert',
      image: 'https://images.unsplash.com/photo-1526994387180-9557a434b046',
      description: 'Une aventure inoubliable à travers les dunes dorées du Sahara.',
    },
    {
      id: 3,
      title: 'Plages de la côte atlantique',
      image: 'https://plus.unsplash.com/premium_photo-1697729733847-0ed51661e005',
      description: 'Détente et surf sur les plages magnifiques d’Essaouira et Agadir.',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    image: '',
  });

  const handleDelete = (id) => {
    const updated = articles.filter((a) => a.id !== id);
    setArticles(updated);
  };

  const handleAddClick = () => {
    setFormData({ id: null, title: '', description: '', image: '' });
    setShowForm(!showForm);
  };

  const handleEditClick = (article) => {
    setFormData(article);
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setArticles(
        articles.map((a) => (a.id === formData.id ? formData : a))
      );
    } else {
      const newArticle = {
        id: Date.now(),
        ...formData,
      };
      setArticles([newArticle, ...articles]);
    }
    setFormData({ id: null, title: '', description: '', image: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-4xl font-bold text-[#002f5f] text-center mb-2">Voyage au Maroc</h1>
      <p className="text-lg text-gray-600 text-center mb-8">Découvrez les plus belles destinations marocaines</p>

      {isConnected && (
        <div className="text-center mb-8">
          <button
            onClick={handleAddClick}
            className="bg-[#002f5f] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#001c3b] transition"
          >
            {showForm ? 'Fermer' : 'Ajouter un blog'}
          </button>
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg max-w-md mx-auto mb-10 space-y-4 shadow-md">
          <input
            name="title"
            placeholder="Titre"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#002f5f]"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#002f5f] resize-none"
            rows="4"
          />
          <input
            name="image"
            placeholder="URL de l’image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#002f5f]"
          />
          <button
            type="submit"
            className="w-full bg-[#002f5f] text-white py-2 rounded hover:bg-[#001c3b] transition"
          >
            Publier
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#002f5f] mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <div className="flex justify-end gap-3">
                {isConnected && (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-[#002f5f] text-white rounded hover:bg-[#001c3b]"
                      onClick={() => handleEditClick(article)}
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                      onClick={() => handleDelete(article.id)}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
