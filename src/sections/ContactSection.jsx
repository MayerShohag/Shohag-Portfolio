import { useRef } from "react";
import { BsSend, BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ContactSection = () => {
     const ref = useRef();
     const sendEmail = (e) => {
          e.preventDefault();
          emailjs
               .sendForm(
                    "service_t4ffed2",
                    "template_19spd9q",
                    ref.current,
                    "53gML7nBVDAN9FYlr",
               )
               .then(() => toast.success(`Email send successfully`))
               .catch((err) => toast.warning(`Email not sent ${err.message}`));
     };

     return (
          <section className="mx-4 my-10 lg:my-20">
               <ToastContainer
                    position="bottom-right"
                    autoClose={500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
               />
               <div>
                    <h2 className="text-center text-sm lg:text-lg">
                         GET IN TOUCH
                    </h2>
                    <div className="xl:text-8xl lg:text-6xl text-4xl text-center font-normal">
                         <h1 className="font-semibold mt-2">
                              LET'S
                              <span className="denton-font font-normal text-[#D5FE4F]">
                                   {" "}
                                   Collab!
                              </span>
                         </h1>
                    </div>
               </div>

               <div className="max-w-7xl mx-auto my-10 relative">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                         <a
                              href="mailto:shohagsreepur2021@gmail.com"
                              className="border border-[#D5FE4F]/30 rounded-2xl p-5 bg-[#D5FE4F]/8"
                         >
                              <span>
                                   <IoMailOutline className="text-4xl md:text-[55px]" />
                              </span>
                              <h2 className="text-2xl md:text-4xl font-medium mt-10 md:mt-20">
                                   Email
                              </h2>
                              <span className="text-[16px] font-light md:text-lg">
                                   shohagsreepur2021@gmail.com
                              </span>
                         </a>
                         <a
                              href="tel:+8801722656698"
                              className="border border-[#D5FE4F]/30 rounded-2xl p-5 bg-[#D5FE4F]/8"
                         >
                              <BsTelephone className="text-4xl md:text-[55px] p-1 md:p-1.5" />
                              <h2 className="text-2xl md:text-4xl font-medium mt-10 md:mt-20">
                                   Phone
                              </h2>
                              <span className="text-[16px] font-light md:text-lg">
                                   +88 01722656698
                              </span>
                         </a>
                         <a
                              href="#location"
                              className="border border-[#D5FE4F]/30 rounded-2xl p-5 bg-[#D5FE4F]/8"
                         >
                              <MdOutlineLocationOn className="text-4xl md:text-[55px]" />
                              <h2 className="text-2xl md:text-4xl font-medium mt-10 md:mt-20">
                                   Location
                              </h2>
                              <span className="text-[16px] font-light md:text-lg">
                                   Pabna, Bangladesh
                              </span>
                         </a>
                    </div>

                    <form
                         ref={ref}
                         onSubmit={sendEmail}
                         className="grid gap-10 grid-cols-1 lg:grid-cols-2 mt-20 items-center"
                    >
                         <div>
                              <h2 className="text-3xl md:text-5xl font-semibold mb-5">
                                   Have a project in mind?
                              </h2>
                              <p className="text-lg md:text-2xl font-light text-white/80">
                                   Looking to partner or work together? Reach
                                   out through the form and I'll get back to you
                                   in the next 48 hours.
                              </p>

                              <div className="md:w-110 md:h-60 w-50 h-80 blur-[150px] z-0 bg-[#D5FE4F]/60 absolute top-70 right-0"></div>

                              <div className="mt-5" id="location">
                                   <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17333.714081963066!2d89.39805776821316!3d24.032316684034356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe7defb15030c5%3A0x464261a6565cddb4!2sAtaikula!5e0!3m2!1sen!2sbd!4v1768932566466!5m2!1sen!2sbd"
                                        className="w-full rounded-sm h-70"
                                   ></iframe>
                              </div>
                         </div>

                         <div className="relative z-10">
                              <div>
                                   <label htmlFor="name">
                                        <span className="text-xl md:text-3xl font-medium">
                                             Your Name
                                        </span>
                                        <input
                                             type="text"
                                             className="border block w-full border-[#D5FE4F]/30 p-4 px-5 mt-2 rounded-sm outline-none"
                                             name="name"
                                             id="name"
                                             placeholder="Enter your name here"
                                        />
                                   </label>
                              </div>

                              <div className="mt-8">
                                   <label htmlFor="email">
                                        <span className="text-xl md:text-3xl font-medium">
                                             Your Email
                                        </span>
                                        <input
                                             type="email"
                                             className="border block w-full border-[#D5FE4F]/30 p-4 px-5 mt-2 rounded-sm outline-none"
                                             name="email"
                                             id="email"
                                             placeholder="Enter your email here"
                                        />
                                   </label>
                              </div>

                              <div className="mt-8">
                                   <label htmlFor="message">
                                        <span className="text-xl md:text-3xl font-medium">
                                             What you're looking for?
                                        </span>
                                        <textarea
                                             name="message"
                                             className="border block w-full border-[#D5FE4F]/30 resize-none p-4 px-5 mt-2 rounded-sm h-40 outline-none"
                                             id="message"
                                             placeholder="Tell me about your project..."
                                        ></textarea>
                                   </label>
                              </div>
                              <button
                                   type="submit"
                                   className="flex justify-center text-black items-center gap-2 py-2 cursor-pointer rounded-sm border-[#D5FE4F]/30 bg-[#D5FE4F] hover:bg-[#D5FE4F]/80 duration-200 text-lg w-full border mt-5 "
                              >
                                   Send message
                                   <BsSend />
                              </button>
                         </div>
                    </form>
               </div>
          </section>
     );
};

export default ContactSection;
