import './App.css';
import ProfileInfo from './Components/profile_component';
import { sectionList } from './constants/site_content.js'

function App() {
  const sectionItems = sectionList.map((section, index) =>
    <ProfileInfo key={index} section={section} />
  );

  return (
    <>
      <div className="w-[85vw] h-auto mx-auto bg-customBrown text-white rounded-lg" >
        <div className='justify-center inset-0'>
          <div className='flex flex-col'>
            {sectionItems}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
