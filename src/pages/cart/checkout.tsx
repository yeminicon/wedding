import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { clearBookings } from '../../store/features/bookingSlice';



const Checkout = () => {
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    const orderDetails = bookings.map(
      (booking) => `${booking.quantity}x ${booking.name} - N${booking.price} (${booking.time})`
    ).join('\n');
    const blob = new Blob([orderDetails], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'order.txt';
    link.click();
    dispatch(clearBookings());
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.quantity}x {booking.name} - N{booking.price} ({booking.time})
            </li>
          ))}
        </ul>
      )}
      {bookings.length > 0 && (
        <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
          Checkout & Download Order
        </button>
      )}
    </div>
  );
};

export default Checkout;
