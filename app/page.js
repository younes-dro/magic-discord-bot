import HeaderHomePage from './components/site/header/Header';
import FooterHomePage from './components/site/footer/Footer';
import SectionsHomePage from './components/site/SectionsHomePage/SectionsHomePage';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <HeaderHomePage />
      <SectionsHomePage />

      <FooterHomePage />
    </main>
  );
}
