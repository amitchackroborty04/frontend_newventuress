"use client";

// Packages
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

// Local imports
import { AdminApprovalModal } from "@/app/(website)/(auth)/_components/admin-aproval-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  authSliceType,
  resetAuthSlice,
  updateBusiness,
} from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import FormHeader from "../../../../_components/form-header";

export function BusinessInfoForm() {
  const [loading, setLoading] = useState<true | false>(false);
  const authState = useAppSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const { mutate, isPending } = useMutation({
    mutationKey: ["registration"],
    mutationFn: (data: authSliceType) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      setLoading(true);
      if (data.status) {
        // success mesage
        toast.success(
          "Your account has been created, and you're all set to log in. Welcome aboard! 🚀",
          {
            position: "top-right",
            richColors: true,
          }
        );

        dispatch(resetAuthSlice());

        router.push("/login");
      } else {
        setLoading(false);
        toast.error(data.message, {
          position: "top-right",
          style: {
            color: "red",
          },
          richColors: true,
        });
      }
    },
    onError: () => {
      setLoading(false);
      toast.error("Something went wrong", {
        position: "top-center",
        richColors: true,
      });
    },
  });

  const currentBusinessInfo = authState.businessInfo[
    authState.businessInfo.length - 1
  ] || {
    ...authState.businessInfo[authState.businessInfo.length - 1],
    license: "",
    resellerBusinessLicense: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const submitForm = () => {
    console.log(authState);
    mutate(authState);
  };

  const isNextDisabled = !currentBusinessInfo?.license;

  return (
    <div className="space-y-6">
      <FormHeader
        label="Sign Up"
        paragraph="Continue to register as a customer or vendor, Please provide the information."
        title="Select your business information"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Provide your Recreational business license
            <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Enter license number"
            required
            value={currentBusinessInfo.license}
            onChange={(e) =>
              dispatch(
                updateBusiness({
                  license: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Provide your Reseller business license (optional)
          </label>
          <Input
            placeholder="Enter license number"
            value={currentBusinessInfo.resellerBusinessLicense}
            onChange={(e) =>
              dispatch(
                updateBusiness({
                  resellerBusinessLicense: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="flex items-center justify-between pt-[40px]">
          <Button
            disabled={isNextDisabled}
            className="min-w-[155px]"
            type="submit"
            onClick={submitForm}
          >
            {loading || isPending ? (
              <span>Processing...</span>
            ) : (
              <span>Next →</span>
            )}
          </Button>
          <div>
            <AddMoreButton />
          </div>
        </div>
      </form>
      <AdminApprovalModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          submitForm();
        }}
      />
    </div>
  );
}

export default BusinessInfoForm;

const AddMoreButton = () => {
  return (
    <Button variant="outline">
      <Link href="/registration/country" className="flex items-center w-auto">
        Add More <Plus className="ml-2" />
      </Link>
    </Button>
  );
};
