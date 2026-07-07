import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SkipToContent from './SkipToContent';
import StructuredData from '@/components/shared/StructuredData';

function Layout({ children }) {
  return (
    <>
      <StructuredData />
      <SkipToContent />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Layout;
