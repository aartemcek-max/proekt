const staff = [
  {
    name: 'Александр',
    role: 'Топ барбер',
  },
  {
    name: 'Дмитрий',
    role: 'Барбер',
  },
  {
    name: 'Максим',
    role: 'Стилист',
  },
]

function Staff() {
  return (
    <section className='staff'>
      <div className='container'>
        <h2 className='section-title'>Наши мастера</h2>

        <div className='cards'>
          {staff.map((item, index) => (
            <div className='card' key={index}>
              <h3>{item.name}</h3>
              <p>{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Staff