
const Modal = ({children}:any) => {
 
  return (
    <section className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 ">
      <div className="relative w-[343px] md:w-[551px] bg-white rounded-[16px] px-[25px] pb-[25px] border-none">
        <div className="absolute inset-0 z-0 bg-[url('/assets/img/modal_bg.png')] bg-no-repeat bg-cover rounded-[16px] opacity-50" />
        <div className="relative  z-10">{children}</div>
      </div>
    </section>
  );
};

export default Modal;
