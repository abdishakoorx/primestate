import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrimEstate",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <SignedOut>          
          <SignInButton />        
        </SignedOut>        
        <SignedIn>          
          <UserButton />        
        </SignedIn>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
