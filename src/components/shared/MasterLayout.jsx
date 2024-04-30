import MasterNavbar from "./MasterNavbar"
import SideNavbar from "./SideNavbar"

const MasterLayout = ({children}) => {
  return (
    <div className="w-full max-h-screen bg-white dark:bg-hadith-dark-card relative style-bn">
        <MasterNavbar/>
        <div className="justify-between calctest flex-none md:flex">
            <div className="bg-hadith-body-grey-bg dark:bg-hadith-dark-bg dark:lg-min:rounded-tl-3xl fixed h-full items-center justify-center left-24 lg-min:rounded-tl-3xl right-0 xs:left-0 xss:left-0 xss:max-w-full">
                {children}
            </div>
            <div className="md:py-3 fixed md:bottom-0 sm:bottom-0 w-full bg-white dark:bg-hadith-dark-card py-8 lg-min:max-w-[96px] lg-min:h-full lg:static md-max:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                <SideNavbar/>
            </div>
        </div>
    </div>
  )
}

export default MasterLayout