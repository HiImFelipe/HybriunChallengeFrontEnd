export default function CookieGetter(name){

    function getCookie(name) {

        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
    
        if (parts.length === 2) 
          return parts.pop().split(';').shift();
    
      }

    return(

        getCookie(name)

    )

}