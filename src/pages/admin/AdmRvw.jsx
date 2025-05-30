import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdmRvw = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('https://spices-backend-uii6.onrender.com/api/reviews/admin/all', axiosConfig);
        setReviews(res.data);
      } catch (error) {
        toast.error('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const toggleVisibility = async (reviewId, currentVisibility) => {
    try {
      await axios.patch(
        `https://spices-backend-uii6.onrender.com/api/reviews/${reviewId}/visibility`,
        { isVisible: !currentVisibility },
        axiosConfig
      );
      setReviews((prev) =>
        prev.map((r) => (r._id === reviewId ? { ...r, isVisible: !currentVisibility } : r))
      );
      toast.success('Review visibility updated');
    } catch (error) {
      toast.error('Failed to update review visibility');
    }
  };

  if (loading) {
    return <div className="text-center my-5">Loading reviews...</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Admin Reviews</h2>
      <p>
        Total Reviews: <strong>{reviews.length}</strong>
      </p>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Reviewer</th>
              <th>Email</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Show to Users</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No reviews found.
                </td>
              </tr>
            )}
            {reviews.map((review) => (
              <tr key={review._id}>
                <td style={{ width: '15%' }}>
                  <img
                    src={
                      review.productId?.images?.[0]
                        ? `https://spices-backend-uii6.onrender.com/uploads/${review.productId.images[0]}`
                        : '/placeholder.png' // optional placeholder
                    }
                    alt={review.productId?.name || 'Product'}
                    style={{ maxWidth: '80px', borderRadius: '5px' }}
                  />
                  <div>{review.productId?.name || 'Unknown Product'}</div>
                </td>
                <td>{review.name}</td>
                <td>{review.email || '-'}</td>
                <td>{review.review}</td>
                <td>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa fa-star${i < review.rating ? ' text-warning' : '-o text-muted'}`}
                      aria-hidden="true"
                    ></i>
                  ))}
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`toggle-${review._id}`}
                      checked={!!review.isVisible}
                      onChange={() => toggleVisibility(review._id, !!review.isVisible)}
                    />
                    <label className="form-check-label" htmlFor={`toggle-${review._id}`}>
                      {review.isVisible ? 'Shown' : 'Hidden'}
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmRvw;
