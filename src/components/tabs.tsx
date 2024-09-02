import classNames from "@/lib/utils";
import "@/styles/events-tabs.scss"

interface TabsProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tabs = ({ label, isActive, onClick }: TabsProps) => {
  return (
    <div
      className={classNames( isActive ? "is-active" : "tab-container" )}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {label}
    </div>
  );
};

export default Tabs