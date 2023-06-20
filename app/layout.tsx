export default function RootLayout({ children, modal }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <div
          style={{
            borderStyle: 'dashed',
            padding: '1rem',
          }}
        >
          {modal}
        </div>
      </body>
    </html>
  );
}
