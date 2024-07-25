// import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.scss";

export const metadata = {
  title: 'Dev',
  description: 'Generated by Null',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}