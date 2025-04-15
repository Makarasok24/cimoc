const ObjectiveCard = ({ iconBg, icon, title, description }) => {
    return (
      <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-lg text-center hover:scale-102">
        <div className={`p-3 ${iconBg} rounded-lg mb-4`}>
          <img src={icon} className="w-15" alt={title} />
        </div>
        <h3 className="text-2xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-lg text-gray-500">
          {description}
        </p>
      </div>
    );
  };
  
  export default ObjectiveCard;