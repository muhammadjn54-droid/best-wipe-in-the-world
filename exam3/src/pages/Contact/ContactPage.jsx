import React from 'react'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <>
    <section className=" py-16 px-8 md:px-24">
      <h2 className="text-3xl font-bold text-white mb-12">Contact</h2>
      
      <div className="relative w-full h-[500px]">
        <iframe className="w-full h-full"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1764350567265!2d55.20572767537963!3d25.19702217770308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9b3a9a1d49%3A0x633d02a0a2569e5!2sDubai!5e0!3m2!1sen!2suae!4v1689255000000!5m2!1sen!2suae"allowFullScreen=""  loading="lazy"title="Map"></iframe>

        <div className="absolute top-10 left-10 bg-[#2D2D2D] p-10 w-[400px] text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-amber-500">Dubai, UAE</h3>
          <p className="text-gray-300 mb-8">260 King Str, 05th Floor, Utral Hosue Building, Dubai, VIC 3000, UAE.</p>
          
          <div className="text-2xl font-bold mb-8">+99 (0) 344 956 4050</div>
          
          <div className="space-y-4 text-sm">
            <p><span className="text-gray-400">Email:</span> info@sparch.co</p>
            <p className="text-gray-400">Follow us:</p>
            <p><span className="text-gray-400">Work Hours:</span> Monday - Friday : 08h00 - 17h30</p>
          </div>
        </div>
      </div>
    </section>
    <ContactForm/>
    </>
  )
}

