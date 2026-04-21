import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
        <section className="auth-left-section scrollbar-hide-default">

            <Link href="/" className="auth-logo">
                <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-8 w-auto"/>
            </Link>  {/* ✅ Link closes here, only wraps the logo */}

            <div className="pb-6 lg:pb-8 flex-1">{children}</div>  {/* ✅ form is outside the Link */}

        </section>

        <section className="auth-right-section">
            <div className="z-10 relative lg:mt-4 lg:mb-16">
                <blockquote className="auth-blockquote">
                    A project that helps you understand investing
                </blockquote>
            </div>
            <div className="flex-1 relative">
                <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0"/>
            </div>
        </section>
    </main>
  )
};

export default Layout;