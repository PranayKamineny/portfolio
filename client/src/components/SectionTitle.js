function SectionTitle({title}) {
    return (
        <div className="flex gap-5 items-center">
            <h1 className="text-3xl sm:text-2xl text-primary font-semibold">{title}</h1>
            <div className="w-40 sm:w-24 h-[1px] sm:h-0 bg-primary"></div>
        </div>
    );
  }
  
  export default SectionTitle;