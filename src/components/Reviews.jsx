const reviews = [
  {
    name: 'Иван',
    text: 'Лучший барбершоп. Отличная атмосфера.',
  },
  {
    name: 'Артем',
    text: 'Очень профессиональные мастера.',
  },
]

function Reviews() {
  return (
    <section className='reviews'>
      <div className='container'>
        <h2 className='section-title'>Отзывы</h2>

        <div className='cards'>
          {reviews.map((review, index) => (
            <div className='card' key={index}>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews