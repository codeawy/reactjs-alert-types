import { IoMdClose } from "react-icons/io";

import "./Alert.scss";

// ** Closed
const Alert = ({
  classNameContainer = "alert-info",
  classNameTitle = "alert-title",
  description,
  title,
  alertIcon,
  children,
}) => {
  return (
    <div className={`${classNameContainer} alert-any`}>
      <p className={classNameTitle}>
        {alertIcon} {title}
      </p>
      {children ? children : <p>{description}</p>}

      <span className="close">
        <IoMdClose size={15} />
      </span>
    </div>
  );
};

export default Alert;
