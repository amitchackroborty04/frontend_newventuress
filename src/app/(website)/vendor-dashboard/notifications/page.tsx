
import NorificationContainer from "./_components/Notification-container";
import NotificationFilter from "./_components/Notification-filter";

const Page = () => {
  return (
    <div className="space-y-[30px]">
      <NotificationFilter />
      <NorificationContainer />
    </div>
  );
};

export default Page;
