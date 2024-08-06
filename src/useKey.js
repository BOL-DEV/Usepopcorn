import { useEffect } from "react";



const useKey = (key, action) => {
  useEffect(
    function () {
      const callBack = (e) => {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      };
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key]
  );
    
}

export default useKey