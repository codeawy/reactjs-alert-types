import { BsInfoSquare } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";
import { VscError, VscWarning } from "react-icons/vsc";
import { BsCheckAll, BsGithub } from "react-icons/bs";
import Alert from "./shared/Alert";

const App = () => {
  return (
    <div className="container">
      <a
        href={"https://github.com/codeawy/reactjs-alert-types"}
        target="_blank"
        className="github-icon"
      >
        <BsGithub size={40} />
      </a>
      <Alert
        classNameContainer="alert-default"
        title="Upgrade your plan"
        description={
          "Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!"
        }
        alertIcon={<HiBellAlert size={20} />}
      />
      <Alert title="Note" alertIcon={<BsInfoSquare size={15} />}>
        <p>
          Vite aims to provide <a href="/">SSR Guide</a> support for common web development
          patterns. Before searching for a Vite or compatible Rollup plugin, check out the Features
          Guide. check out the <a href="/">Backend Integration guide</a> instead.
        </p>
      </Alert>
      <Alert
        classNameContainer="alert-error"
        title="Something went wrong"
        description={
          "if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup."
        }
        alertIcon={<VscError size={20} />}
      />
      <Alert
        classNameContainer="alert-success"
        title="Your order has been processed"
        description={
          "Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!"
        }
        alertIcon={<BsCheckAll size={20} />}
      />
      <Alert
        classNameContainer="alert-warning"
        title="Tips & Tricks"
        description={
          "You can also run the above script in your CI setup to enable automatic deployment on each push."
        }
        alertIcon={<VscWarning size={20} />}
      />
    </div>
  );
};

export default App;
