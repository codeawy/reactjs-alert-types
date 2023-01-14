import Alert from "./shared/Alert";
import { IoMdClose } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { CiWarning, CiSquareInfo } from "react-icons/ci";
import { TbFaceIdError } from "react-icons/tb";

const App = () => {
  return (
    <div className="container">
      <Alert
        classNameContainer="alert-default"
        title="Default Alert"
        description={
          "JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript."
        }
        alertIcon={<BiBookmark size={20} />}
        closeIcon={<IoMdClose />}
      />
      <Alert
        classNameContainer="alert-info"
        title="Info Alert"
        description={
          "Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it."
        }
        alertIcon={<CiSquareInfo size={20} />}
        closeIcon={<IoMdClose />}
      />
      <Alert
        classNameContainer="alert-warning"
        title="Warning Alert"
        description={
          "You want to leave people feeling informed, supported and reassured. Convey the correct level of urgency and make sure they understand how to respond. Follow some of the following Atlassian Voice and Tone principles to build your message."
        }
        alertIcon={<CiWarning size={20} />}
        closeIcon={<IoMdClose />}
      />
      <Alert
        classNameContainer="alert-error"
        title="Error Alert"
        description={
          <p>
            Something ``serious`` has gone wrong. This may require exiting{" "}
            <a href="https://sass-lang.com" target={"_blank"}>
              FIT2D
            </a>{" "}
            or may be ``recoverable``depending on the circumstances. e.g. The system has failed to
            allocate dynamic memory as requested.
          </p>
        }
        alertIcon={<TbFaceIdError size={20} />}
        closeIcon={<IoMdClose />}
      />

      <Alert
        classNameContainer="alert-success"
        title="Success Alert"
        alertIcon={<IoCheckmarkDoneOutline size={20} />}
        closeIcon={<IoMdClose />}
      >
        <p>
          <a href="https://sass-lang.com" target={"_blank"}>
            Sass
          </a>{" "}
          boasts more features and abilities than any other CSS extension language out there. The
          Sass Core Team has worked endlessly to not only keep up, but stay ahead.
        </p>
      </Alert>
    </div>
  );
};

export default App;
