function Footer(){
   return (
      <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My React App. All rights reserved.
            </p>
            <p className="text-sm">
                <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
                <a href="/terms-of-service" className="text-blue-400 hover:underline"> Terms of Service</a>     
            </p>
            <p className="text-sm">
                Follow us on 
                <a href="https://twitter.com" className="text-blue-400 hover:underline"> Twitter</a>, 
                <a href="https://facebook.com" className="text-blue-400 hover:underline"> Facebook</a>, 
                <a href="https://instagram.com" className="text-blue-400 hover:underline"> Instagram</a>
            </p>
        </footer>
    );

}
export default Footer;