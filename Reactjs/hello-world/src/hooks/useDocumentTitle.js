import { useEffect } from "react"

// useDocumentTitle custom Hook - https://www.youtube.com/watch?v=4yp6T-hF5ZY
// Please check DocTitleOne.js & DocTitleTwo.js

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])

}

export default useDocumentTitle