import label from "../public/GloboLogo.png";
import Image from 'next/image';
import {logo, subtitle} from "./banner.module.css";

export default function Banner({ children }) {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <Image src={label} alt="logo" className={logo} />
            </div>
            <div className={`col-7 mt-5 ${subtitle}`}>{ children }</div>
        </header>
    )
}