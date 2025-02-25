// Packages
import Image from "next/image";

// Local imports
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface AdminApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export function AdminApprovalModal({
  isOpen,
  onClose,
  message
}: AdminApprovalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="relative">
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-no-repeat bg-center bg-cover opacity-10" />

          <div className="relative p-6 flex flex-col items-center">
            {/* Logo */}
            <Image
              src="/assets/img/logo.png"
              alt="Pacific Rim Fusion Logo"
              width={100}
              height={100}
              className="mb-4"
            />

            {/* Text content */}
            <DialogTitle className="text-2xl font-bold mb-2 dark:text-black">
              PACIFIC RIM FUSION
            </DialogTitle>
            <p className="text-gradient dark:text-gradient-pink text-xl mb-2">
              {message}
            </p>

            {/* Button */}
            <Button onClick={onClose} className=" px-12 py-2 mt-3 rounded">
              Okay
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
