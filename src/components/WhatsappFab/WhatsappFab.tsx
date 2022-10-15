import { LogoWhatsapp } from "@styled-icons/ionicons-solid";

const WhatsappFab = () => {
  return (
    <a
      target="__blank"
      href="https://api.whatsapp.com/send?phone=5493876831581&text=Hola!%20Estaba%20viendo%20la%20web%20de%20day%20est%C3%A9tica"
      className="bg-primary-700 fixed bottom-0 right-0 m-4 lg:m-8 z-50 p-3 rounded-full shadow-lg hover:shadow-none"
    >
      <LogoWhatsapp size={40} color="white" />
    </a>
  );
};

export default WhatsappFab;
