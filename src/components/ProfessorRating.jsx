import React from 'react';
import StarIcon from './StarIcon';

const ProfessorRating = ({ rating }) => {
    return (
        <div className="rating">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < Math.round(rating)} />
            ))}
            <span className="rating-text">{rating.toFixed(1)}</span>
        </div>
    );
};

export default ProfessorRating;
