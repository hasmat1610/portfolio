import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-4 bg-gray-100">
                                <div className="text-center text-gray-600">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Hasmat Patel. All rights reserved.
                        </p>
                    </div>

        </footer>
    );
};

export default Footer;
