export default function User() {
  return (
    <div className="container">
      <h1>👤 Личный кабинет</h1>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '2rem',
        marginTop: '1rem'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <p><strong>Имя:</strong> Иван Иванов</p>
          <p><strong>Email:</strong> ivan@example.com</p>
          <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
          <p><strong>Дата регистрации:</strong> 15.03.2024</p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3>История заказов</h3>
          <p>У вас пока нет заказов</p>
        </div>
      </div>
    </div>
  );
}