const ContactMap: React.FC = () => {
    return (
      <div className="mt-8">
        <h1 className="text-[25px] lg:text-[32px] mb-[20px] text-center font-semibold leading-[38.4px] text-gradient max-md:max-w-full dark:text-gradient-pink">
          Find Us on Map
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-[600px] border rounded"
          loading="lazy"
          allowFullScreen
          title="Location Map"
        ></iframe>
      </div>
    );
  };
  
  export default ContactMap;
  