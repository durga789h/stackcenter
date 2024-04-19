import React from 'react';

const GoogleMapsEmbed = () => {
  return (
    <div className='ml-28'>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7790.26275379947!2d74.995439!3d12.50745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba483d25c8a7d37%3A0x37a30287fb9e45!2sStack%20Technology%20Centre!5e0!3m2!1sen!2sin!4v1702965358524!5m2!1sen!2sin"
        width="400"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
