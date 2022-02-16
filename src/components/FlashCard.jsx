import { useEffect, useState } from "react";

export default function FlashCard({showAllTitles = false, title = "titulo", description = "descrição"}) {

    const [showTitle, setShowTitle] = useState(showAllTitles);

    let fontSize = showTitle ? "text-xl" : "text-md"

    useEffect(() => {
        setShowTitle(showAllTitles)
    }, [showAllTitles])

    function handleCardClick(){
        setShowTitle(!showTitle);
       // setShowTitle(currentShowTitle => !currentShowTitle); 2nd option to use
    }

    return (
        <div className={`${fontSize} cursor-pointer shadow-lg p-4 m-4 w-64 flex flex-row items-center justify-center h-52 bg-blue-50 `}
        onClick={handleCardClick} >
            {showTitle ? title : description}
        </div>
    );
}