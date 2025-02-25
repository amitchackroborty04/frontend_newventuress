// Packages
import { useQuery } from '@tanstack/react-query';

// Local imports
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { TextEffect } from '@/components/ui/text-effect';
import { toggleCategory } from '@/redux/features/filtering/FilterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Category, CategoryResponse } from '@/types/category';


const CategoryFilter = () => {
    const {data, isLoading, isError, error} = useQuery<CategoryResponse>({
        queryKey: ["categories"],
        queryFn: () => fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`).then((res) => res.json())
    })

    const categoriesList = data?.data;
    const dispatch = useAppDispatch()
    const {categories} = useAppSelector((state) => state.filters)

    const handleCategoryToggle = (category: string) => {
        dispatch(toggleCategory(category));
      };



    
    let content;

    if(isLoading) {
        content = <div className='space-y-3'>
            {[1,2,3].map((n) => (
                <CategorySkeleton key={n} />
            ))}
        </div>
    } else if (isError) {
        content = <div className='text-red-500 text-[14px]'>
           <TextEffect per="char" preset="fade" variants={{}} className="" onAnimationComplete={() => {}}>
            {error?.message}
        </TextEffect>
        </div>
    } else if (categoriesList?.length == 0 ) {
        content = <div className='text-[14px] text-gray-500'>
            <TextEffect per="char" preset="fade" variants={{}} className="" onAnimationComplete={() => {}}>
            No Data Found
        </TextEffect>
        </div>
    } else if ( categoriesList && categoriesList?.length > 0) {
        content = <div className="space-y-3">
        {categoriesList?.map((category: Category) => (
              <div className="flex items-center space-x-2" key={category._id}>
            <Checkbox
              id={category.categoryName.toLowerCase()}
              checked={categories.includes(category._id)}
              onCheckedChange={() => handleCategoryToggle(category._id)}
            />
            <Label htmlFor={category.categoryName.toLowerCase()} className="text-[20px] leading-[24px] text-[#001E3B]">
              {category.categoryName}
            </Label>
          </div>
        ))}
      </div>
    }


  return (
          <div className="rounded-lg bg-[#E6EEF6] p-4">
        <h2 className="text-[28px] font-bold text-gradient mb-4">Categories</h2>
        {content}
      </div>
  )
}

export default CategoryFilter


export  function CategorySkeleton() {
    return (
      <div className="flex items-center space-x-2">
        <Skeleton className="h-5 w-5 rounded" />
        <div className="flex-1">
          <Skeleton className="h-[24px] w-[150px] rounded" />
        </div>
      </div>
    );
  }