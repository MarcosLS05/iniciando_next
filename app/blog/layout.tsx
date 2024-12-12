export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <header>
          <h1>Blog Layout</h1>
          <nav>
            <a href="/blog">Inicio del Blog</a>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  
  