const services = [
  {
    title: 'Мужская стрижка',
    price: '1500 ₽',
  },
  {
    title: 'Бритье',
    price: '1000 ₽',
  },
  {
    title: 'Стрижка бороды',
    price: '1200 ₽',
  },
]

function Services() {
  return (
    <section className='services'>
      <div className='container'>
        <h2 className='section-title'>Наши услуги</h2>

        <div className='cards'>
          {services.map((service, index) => (
            <div className='card' key={index}>
              <h3>{service.title}</h3>
              <p>{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services