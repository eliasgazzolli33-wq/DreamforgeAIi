export const metadata = {
  title: "Dreamforge AI",
  description: "Plataforma criada por Elias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
