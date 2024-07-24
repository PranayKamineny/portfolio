function SectionTitle({title}) {
    return (
        <div className="flex gap-5 items-center">
            <h1 className="text-3xl sm:text-xl text-primary font-semibold">{title}</h1>
            <div className="w-40 sm:w-24 h-[1px] bg-primary"></div>
        </div>
    );
  }
  
  export default SectionTitle;