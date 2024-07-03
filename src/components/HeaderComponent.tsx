import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
export function HeaderComponent() {
    return (
        <header id="navbar" className="sticky top-0 z-10 duration-300">
            <nav className="relative container flex justify-between items-center">
                <div className="py-5">
                    <Image src="/images/logo.png" width={600} height={600} id="logo" alt="Logo" className="w-10" />
                    <Image src="/images/logo_white.png" width={600} height={600} id="white-logo" alt="Logo" className="w-10" />
                </div>
                <div id="nav-menu">
                    <ul>
                        <li>
                            <Link href="#quality_service" className="nav-list">Services</Link>
                        </li>
                        <li>
                            <Link href="#recent_work" className="nav-list">Works</Link>
                        </li>
                        <li>
                            <Link href="#exp_edu" className="nav-list">Resume</Link>
                        </li>
                        <li>
                            <Link href="#skills" className="nav-list">Skills</Link>
                        </li>
                        <li>
                            <Link href="#blogs" className="nav-list">Blogs</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="nav-list">Contact</Link>
                        </li>
                        <li>
                            <button>
                                <span>Hire Me!</span>
                            </button>
                        </li>
                    </ul>

                    <div id="nav-close">
                        <IoMdClose />
                    </div>

                    <div>
                        <FaRegMoon id="theme-toggle" />

                        <div id="hamburger">
                            <RiMenu2Line />
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}