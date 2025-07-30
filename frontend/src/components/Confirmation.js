import React from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";

const Confirmation = () => {
  const { bookingId } = useParams();

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your booking ID is:</p>
      <strong>{bookingId}</strong>
      <br /><br />
      <QRCode value={bookingId} size={180} />
    </div>
  );
};

export default Confirmation;