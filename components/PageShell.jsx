import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Interactions from './Interactions';

export default function PageShell({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="subpage">{children}</main>
      <SiteFooter />
      <Interactions />
    </>
  );
}
