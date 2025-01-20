import React, { useState, useEffect } from 'react';

import heartIcon from '../../assets/icons/heart.svg';
import heartRedIcon from '../../assets/icons/heart-red.svg';

export const HeartFavorite: React.FC<{ camperId: string }> = ({ camperId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(camperId)) {
      setIsFavorite(true);
    }
  }, [camperId]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (id: string) => id !== camperId
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      favorites.push(camperId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <img
      src={isFavorite ? heartRedIcon : heartIcon}
      alt="Favorite"
      width="24"
      height="26"
      onClick={handleToggleFavorite}
      style={{ cursor: 'pointer' }}
    />
  );
};
