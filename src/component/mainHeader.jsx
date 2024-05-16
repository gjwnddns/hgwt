import header_main from '../img/head_page.png'
import HWLogo from '../img/HWLogo.svg'

export default function mainHeader() {
    return (
        <>
            <div>
                <img src={HWLogo} alt="" />
            </div>
            <img src={header_main} alt="" />
        </>
    );
}