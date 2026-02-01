import useTheme from '../context/ThemeContext';

const ThemeBtn = () => {

    const {themeMode, lightTheme, darkTheme} = useTheme();
    
    const onChangeBtn = () =>  {
        // const darkModeStatus = e.currentTarget.checked;
        if(themeMode === "dark") {
            lightTheme();
        }
        else {
            darkTheme();
        }
    }

    return (

        <label htmlFor="" className="relative inline-flex items-center cursor-pointer gap-2 font-semibold ">

            <button type="checkbox" role='switch' 
                className="absolute outline w-4 h-4 m-3 whitespace-nowrap border-0 peer" 
                onClick={onChangeBtn} > </button>

            {/* <div className="w-11 h-6 dark:border-white border-2 border-black bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700">  </div> */}

           <span className='ml-2 text-sm font-medium text-gray-900 dark:text-white'>
                Toggle Theme
            </span>
         </label>

        //  position: absolute;
            // width: 1px;
            // height: 1px;
            // padding: 0;
            // margin: -1px;
            // overflow: hidden;
            // clip: rect(0, 0, 0, 0);
            // white-space: nowrap;
            // border-width: 0;
    )
}

export default ThemeBtn;
