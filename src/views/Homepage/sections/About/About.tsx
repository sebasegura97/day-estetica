import Counter from "../../components/Counter";

const About = () => {
  return (
    <section className="lg:bg-primary-50" id="nosotros">
      <div className="container mx-auto pt-8 lg:pt-32 ">
        <h2 className="font-h1 text-center lg:mb-16 text-primary-900">
          {" "}
          ¿Quienes Somos?{" "}
        </h2>
        <div className="aspect-square lg:aspect-video max-w-6xl m-auto mt-8">
          <iframe
            title="About us youtube video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/m1U8gHn2KmY"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>

      <div className="py-8 lg:pb-24 max-w-4xl mx-auto">
        <p className="font-h5 text-center mt-8 px-4 lg:my-12 text-primary-900">
          En day estética nos preocupamos por vos, llevamos tu seguimiento y te
          guiamos para que puedas conseguir los resultados que esperas.
        </p>
        <div className="container grid grid-flow-row grid-cols-2 gap-y-8 mt-8 px-4 max-w-2xl mx-auto">
          <Counter label="Clientes satisfechos" number={12000} />
          <Counter label="Expertos en belleza" number={16} />
          <Counter label="Salas para que nunca esperes" number={14} />
          <Counter label="Diferentes tratamientos" number={56} />
        </div>
      </div>
    </section>
  );
};

export default About;
