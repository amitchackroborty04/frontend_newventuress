// package import
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// local import
import Modal from "@/components/shared/modal/modal";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

interface Props {
  onModalClose: VoidFunction;
}

const LogOutModal = ({ onModalClose }: Props) => {
  const [loading, setLoading] = useState<true | false>(false);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const onLogout = () => {
    setLoading(true);
    signOut({ redirectTo: "/" });
  };

  return (
    <div>
      <Modal>
        <div className="mt-6 max-h-[556-px] max-w-[551-px]">
          <div className="flex flex-col items-center text-center">
            <div className="">
              <div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/img/logo.png"
                    width={205}
                    height={205}
                    alt="Pacific Rim Fusion Logo"
                  />
                </div>

                <div className="mt-2 text-[37px] text-[#333333] font-[700] pb-2">
                  PACIFIC RIM FUSION
                </div>
              </div>
              <div>
                <div className="leading-[38px] font-[600] text-[32px] text-gradient dark:text-gradient-pink ">
                  Are You Sure To Log Out?
                </div>
                <div className=" font-[400] text-[22px] text-[#102011] pb-3 pt-2 mb-5">
                  Keep shopping with Rim Fusion.
                </div>
              </div>
            </div>
            <div className="w-[396px]">
              <Link href="#" passHref>
                {/* <Button className="w-full">See Order Details</Button> */}
                <Button
                  onClick={onLogout}
                  variant="outline"
                  className="w-full relative dark:bg-white dark:text-[#6841A5] dark:border-[#B0B0B0]"
                  disabled={loading}
                >
                  Yes
                  {loading && (
                    <Loader2 className="animate-spin absolute right-5" />
                  )}
                </Button>
              </Link>

              <div className="mt-4">
                <Link href="#" passHref>
                  <Button onClick={onModalClose} className="w-full">
                    No
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LogOutModal;
