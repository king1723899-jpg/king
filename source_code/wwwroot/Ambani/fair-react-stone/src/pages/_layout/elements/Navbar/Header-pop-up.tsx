// KeyValueItem.tsx
interface HeaderHomeProps {
    label: string;
    value: string | number;
    className?: string;
    valueClassName?: string;
    itemClassName?: string;
  }
  
  export const HeaderHome = ({
    label,
    value,
    className = "",
    valueClassName = "",
    itemClassName = ""
  }: HeaderHomeProps) => (
    <div className={`d-flex mb-3 justify-between align-items-center w-100 ${itemClassName}`}>
      {/* Label Column */}
      <div 
        className={`flex-1 text-start text-truncate pe-2 ${className}`}
        style={{ minWidth: 0, flexBasis: '50%', fontSize: "15px" }}
      >
        {label}
      </div>
      
      {/* Value Column */}
      <div 
        className={`flex-1 text-end  ${valueClassName}`}
        style={{ flexBasis: '50%',fontWeight:"600" }}
      >
        {value}
      </div>
    </div>
  );
  
  // Usage
  <HeaderHome 
    label="Wallet Amount" 
    value="0.00" 
    className="text-dark" // Applies to label
    valueClassName="text-bold bg-danger" // Applies to value
    itemClassName="my-custom-class" // Applies to container div
  />