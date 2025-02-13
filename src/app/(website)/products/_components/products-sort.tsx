import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ProductsSort = () => {
    return (
        <div className='flex items-center gap-[8px] '>
            <h5 className='text-xs font-normal leading-[14px] text-[#444444]'>Sort By :</h5>
            <Select>
                <SelectTrigger className="w-auto h-[34px] bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] hover:bg-gradient-to-r hover:from-[#7091FF] hover:via-[#2F4697] hover:to-[#7485FB] text-[#F5F5F5] text-sm font-normal leading-[16px] px-[10px] py-[8px]">
                    <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="low price">Price (Low{'>'}High)</SelectItem>
                    <SelectItem value="high price">Price (High{'>'}Low)</SelectItem>
                </SelectContent>
            </Select>

        </div>
    );
};

export default ProductsSort;