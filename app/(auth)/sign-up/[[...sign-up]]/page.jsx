import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    
<section className="bg-gray-900">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 object-cover w-full h-full"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="flex items-center justify-center"><Image src={'/logo1.svg'} height={100} width={100}/></div>

        <div className="flex justify-center">
            <SignUp />
        </div>
      </div>
    </main>
  </div>
</section>
  )
}