
import Link from "next/link";

interface Icon {
  icon: any;
  href: string;
  alt: string;
  count?: number;
  srOnlyText: string;
}

interface HeaderIconMenuProps {
  icons: Icon[];
  onClick?: () => void;  // Accept onClick prop
}

function HeaderIconMenu({ icons, onClick }: HeaderIconMenuProps) {
  return (
    <div className="flex gap-2">
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.href}
          onClick={onClick} // Close the mobile menu when clicked
          className="relative rounded-full p-1"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">{icon.srOnlyText}</span>
          <span className="w-[20px] h-[20px] text-[#444444]">{icon.icon}</span>
          {icon.count && (
            <div className="w-[12px] h-[12px] text-white absolute top-0 right-0 bg-primary dark:bg-pinkGradient text-[8px] rounded-full flex justify-center items-center">
              {icon.count}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default HeaderIconMenu;
