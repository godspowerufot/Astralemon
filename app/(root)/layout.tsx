import AppFooter from "../component/ui/AppFooter";
import AppHeader from "../component/ui/AppHeader";

export default function HomeLayout({ children }:any) {
  return (
    <>
      <AppHeader/> {/* Custom header for home */}
      <main>{children}</main>
      <AppFooter /> {/* Custom footer for home */}
    </>
  );
}
