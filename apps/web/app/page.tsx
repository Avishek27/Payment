import Navbar from "@/components/navbar";
import Dashboard from "./(dashboard)/page";
import Hero from "@/components/hero";
import Rewards from "@/components/rewards";
import Business from "@/components/business";
import Footer from "@/components/footer";


//If the user is signed in then he should see the dashboard
//if not signed in then he should see the home page



export default function Home(){
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar/>
      <Hero/>
      <Rewards/>
      <Business/>
      <Footer/>
    </main>
  )
}