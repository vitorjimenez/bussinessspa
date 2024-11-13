import Navbar from "@/components/Navbar";
import  Whatsapp  from '@/components/Whatsapp.jsx'
import '@/styles/global.css'


export const metadata = {
  title: "Site para negócios",
  description: "Conectar seu negócio com o mundo",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        { children }
        < Whatsapp  />
      </body>
    </html>
  );
}
