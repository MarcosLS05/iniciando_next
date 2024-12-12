export default function BlogPost({ params }: { params: { id: string } }) {
    return (
      <div>
        <h1>Contenido del blog con ID: {params.id}</h1>
        <p>Este es el blog {params.id}</p>
      </div>
    );
  }
  