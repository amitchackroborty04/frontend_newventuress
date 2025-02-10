import Categories from '../categories/categories';
import SearchBer from '../searchBer/searchBer';
import ThemeSwitcher from './theme-switcher';



function SearchBerCategories() {
    return (
        <div className='bg-[#E6EEF6] dark:bg-[#482D721A] py-[10px]'>
            <div className=' container  flex gap-x-[10px]  lg:gap-x-[20px] lg:justify-between   '>
                <div className='w-[178px] lg:w-[15%]'>
                    <Categories />
                </div>
                <div className='w-[100%] lg:w-[60%] hidden'>
                    <SearchBer />
                </div>
                <div className=' w-[254px] lg:w-[18%] '>
                    <ThemeSwitcher />
                </div>



            </div>
        </div>
    )
}

export default SearchBerCategories