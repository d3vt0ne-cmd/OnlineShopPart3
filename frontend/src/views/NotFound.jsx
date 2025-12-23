export default function NotFound() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#ff4444' }}>404</h1>
      <h2>Страница не найдена</h2>
      <p style={{ marginTop: '1rem' }}>
        Запрашиваемая страница не существует или была перемещена
      </p>
      <a 
        href="/" 
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          background: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Вернуться на главную
      </a>
    </div>
  );
}