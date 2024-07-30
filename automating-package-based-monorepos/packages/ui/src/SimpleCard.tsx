export const SimpleCard = ({
  url,
  title,
  text,
}: {
  url: string;
  title: string;
  text: string;
}) => {
  const cardStyles = {
    maxWidth: '20rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '1rem 0',
    '&:hover': {
      backgroundColor: '#f7fafc',
    },
  };

  const titleStyles = {
    marginBottom: '0.5rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    color: '#1a202c',
  };

  const textStyles = {
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    color: '#4a5568',
  };

  return (
    <a href={url} style={cardStyles}>
      {title && <h5 style={titleStyles}>{title}</h5>}
      <p style={textStyles}>{text}</p>
    </a>
  );
};

export default SimpleCard;
