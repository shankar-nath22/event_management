import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
  icons: {
    icon: 'app/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

// import { Button } from "@/components/ui/button"
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
// import Image from "next/image"
// import Link from "next/link"
// // import { Button } from "../ui/button"
// // import NavItems from "./NavItems"
// // import MobileNav from "./MobileNav"

// const Header = () => {
//   return (
//     <header className="w-full border-b">
//       <div className="wrapper flex items-center justify-between">
//         <Link href="/" className="w-36">
//           <Image 
//             src="/assets/images/logo.svg" width={128} height={38}
//             alt="Evently logo" 
//           />
//         </Link>

//         {/* <SignedIn>
//           <nav className="md:flex-between hidden w-full max-w-xs">
//             <NavItems />
//           </nav>
//         </SignedIn>

//         <div className="flex w-32 justify-end gap-3">
//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//             <MobileNav />
//           </SignedIn> */}
//           <SignedOut>
//             <Button asChild className="rounded-full" size="lg">
//               <Link href="/sign-in">
//                 Login
//               </Link>
//             </Button>
//           </SignedOut>
//         </div>
//     </header>
//   )
// }

// export default Header