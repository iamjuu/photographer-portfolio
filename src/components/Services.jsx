import React, { useState } from 'react';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const services = [
    {
      title: 'Product Designing',
      modalTitle: 'freelancer',
      description: 'I design and develop the consumer products with creative ability and hands-on approach which stisfies the customers\' and markets\' needs and trends.',
      items: [
        'I am a photo Grapher',
        'Web Page design and development.',
        'I create the UX element interactions.',
        'I position your company brand.',
        'Create modern 3-D experiences.'
      ]
    },
    {
      title: 'photo grapher',
      modalTitle: 'UI/UX Designing',
      description: 'I design and develop the consumer products with creative ability and hands-on approach which stisfies the customers\' and markets\' needs and trends.',
      items: [
        'I develop the user interfaces.',
        'Web Page design and development.',
        'I create the UX element interactions.',
        'I position your company brand.',
        'Create modern 3-D experiences.'
      ]
    },
    {
      title: 'Visual Designing',
      modalTitle: 'Visual Designing',
      description: 'I design and develop the consumer products with creative ability and hands-on approach which stisfies the customers\' and markets\' needs and trends.',
      items: [
        'I develop the user interfaces.',
        'Web Page design and development.',
        'I create the UX element interactions.',
        'I position your company brand.',
        'Create modern 3-D experiences.'
      ]
    }
  ];

  return (
    <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__card" key={index}>
            <div className="serv">
              <h3 className="services__title" dangerouslySetInnerHTML={{ __html: service.title.replace(' ', '<br>') }}></h3>
              <span className="services__button" onClick={() => openModal(index)}>
                See More <i className='bx bx-right-arrow services__icon'></i>
              </span>
            </div>

            <div className={`services__modal ${activeModal === index ? 'active-modal' : ''}`}>
              <div className="services__modal-content">
                <i className='bx bx-x services__modal-close' onClick={closeModal}></i>

                <h3 className="services__modal-title">{service.modalTitle}</h3>

                <p className="services__modal-description">
                  {service.description}
                </p>

                <ul className="services__modal-list">
                  {service.items.map((item, idx) => (
                    <li className="services__modal-item" key={idx}>
                      <i className='bx bx-check-circle'></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

