import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SkipToContent from './SkipToContent';

function Layout({ children }) {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Layout;
