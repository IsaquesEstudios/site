export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Contato - Isaques Estúdios</title>
        <meta
          name="description"
          content="Fale conosco isaques estúdios, contato com equipe profissional"
        />

        <link rel="canonical" href="https://isaquesestudios.com/contato" />
      </head>
      <body>{children}</body>
    </html>
  );
}
