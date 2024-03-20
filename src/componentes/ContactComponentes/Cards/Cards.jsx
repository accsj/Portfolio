import '../Cards/Cards.css';

export default function Cards() {

    return (
        <>
            <div className="cards-contact">
                <a href="https://wa.me/+5521983163267" target="__blank">
                    <i id="whatsapp" className='bx bxl-whatsapp'></i>
                </a>
            </div>
            <div className="cards-contact">
                <a href="https://www.instagram.com/accsj_/" target="__blank">
                    <i id="instagram" className='bx bxl-instagram'></i>
                </a>
            </div>
            <div className="cards-contact">
                <a href="https://www.linkedin.com/in/antonio-carlos-cabral-7b287b188/" target="__blank">
                    <i id="linkedin" className='bx bxl-linkedin'></i>
                </a>
            </div>
        </>
    );
}
