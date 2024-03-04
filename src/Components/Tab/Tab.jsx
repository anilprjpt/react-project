import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { tabDetail } from "./data";


function Tab() {
    let tabTitle = "components";
    const [tabData, setTabData] = useState(tabTitle);

    function handleClick(tabTitle) {
        setTabData(tabTitle);
    }
    
    return (
        <>
            {
                Object.entries(tabDetail).map(([key, val], index) => (
                    <TabButton 
                        key={key}  
                        className={tabData == key ? "bg-sky-700" : "bg-sky-500"}
                        handleClick={handleClick} 
                    >
                    {val.title}
                    </TabButton>
                ))
            }
            
            <div className="shadow-xl p-3 border border-sky-50 rounded-lg rounded-t-none ">
                <h2 className="text-sky-700 text-xl font-semibold my-3">
                    {tabDetail[tabData].title}
                </h2>
                <p className="text-slate-500">
                    {tabDetail[tabData].description}
                </p>
                <div className="text-slate-800 rounded-lg bg-slate-100 mt-3 p-5 pt-0">
                    <pre>
                        <code>{tabDetail[tabData].code}</code>
                    </pre>
                </div>
            </div>
        </>
    )

}

export default Tab;