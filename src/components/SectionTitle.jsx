const SectionTitle = ({ title, subtitle, light = false }) => {
    return (
      <div className="mb-12">
        <div className={`w-16 h-1 mb-6 ${light ? 'bg-gold' : 'bg-maroon'}`}></div>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-maroon'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
    );
  };
  
  export default SectionTitle;