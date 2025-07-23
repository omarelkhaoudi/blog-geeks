import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import axios from 'axios';

const Body = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
  });
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsConnected(!!token);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogs/');
      setArticles(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBlogs(); // Refresh the list after deletion
    } catch (err) {
      console.error('Error deleting blog:', err);
    }
  };

  const handleAddClick = () => {
    setFormData({ title: '', content: '', image: '' });
    setShowForm(!showForm);
  };

  const handleEditClick = (article) => {
    setFormData({
      _id: article._id,
      title: article.title,
      content: article.content,
      image: article.image,
    });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (formData._id) {
        // Update existing blog
        await axios.put(
          `http://localhost:5000/api/blogs/${formData._id}`,
          formData,
          config
        );
      } else {
        // Create new blog
        await axios.post(
          'http://localhost:5000/api/blogs/',
          formData,
          config
        );
      }

      setShowForm(false);
      fetchBlogs(); // Refresh the list after update/create
    } catch (err) {
      console.error('Error submitting blog:', err);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-white px-6 py-10 text-center">Loading...</div>;
  }

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
            name="content"
            placeholder="Contenu"
            value={formData.content}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#002f5f] resize-none"
            rows="4"
          />
          <input
            name="image"
            placeholder="URL de l'image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#002f5f]"
          />
          <button
            type="submit"
            className="w-full bg-[#002f5f] text-white py-2 rounded hover:bg-[#001c3b] transition"
          >
            {formData._id ? 'Mettre à jour' : 'Publier'}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#002f5f] mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.content}</p>
              <div className="flex justify-end gap-3">
                {isConnected && (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-[#002f5f] text-white rounded hover:bg-[#001c3b]"
                      onClick={() => handleEditClick(article)}
                    >
                      <Pencil size={16} /> Modifier
                    </button>
                    <button
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                      onClick={() => handleDelete(article._id)}
                    >
                      <Trash2 size={16} /> Supprimer
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