export const metadata = {
  title: "DreamForge AI",
  description: "Plataforma profissional de produtos digitais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
