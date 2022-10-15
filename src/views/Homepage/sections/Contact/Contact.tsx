import { NavigateCircle } from "@styled-icons/ionicons-outline";
import SocialLinks from "../../components/SocialLinks";
const Contact = () => {
  return (
    <section id='contacto' className="container py-8 lg:pt-32 mx-auto">
      <h2 className="font-h1 text-center">Contacto</h2>
      <h5 className="font-h5 text-center my-8 sm:my-12 lg:my-16 max-w-3xl mx-auto">
        En nuestro WhatsApp o redes sociales te responderemos con la mayor
        brevedad posible.
      </h5>
      <div className="w-full flex justify-center">
        <SocialLinks />
      </div>
      <div className="relative border-4 border-solid border-primary-600 rounded-md aspect-video max-w-4xl mx-auto mt-4">
        <div className="absolute top-0 right-0  py-4 pl-2 flex items-center pr-8 rounded-tl-3xl rounded-bl-3xl bg-primary-600">
          <NavigateCircle size={32} className="text-white mr-2" />
          <span className="font-h4 text-white">Adolfo Guemes 364 </span>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3071108401996!2d-65.41960634918009!3d-24.78493528401153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b74eb1e923%3A0x7e3f097d951c9fca!2sDay%20Spa%20Salta!5e0!3m2!1sen!2sar!4v1596730844478!5m2!1sen!2sar"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
