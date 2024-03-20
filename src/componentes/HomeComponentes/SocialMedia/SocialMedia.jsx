import '../SocialMedia/SocialMedia.css';

export default function SocialMedia() {
    return (
        <div className="social">
            <div className="social-media">
                <a className="whatsapp" href="https://wa.me/+5521983163267" rel='noopener noreferrer' target="_blank">
                    <i class='bx bxl-whatsapp'></i>
                </a>
                <a className="instagram" href="https://www.instagram.com/accsj_/" rel='noopener noreferrer' target="_blank">
                    <i class='bx bxl-instagram'></i>
                </a>
                <a className="github" href="https://github.com/accsj" rel='noopener noreferrer' target="_blank">
                    <i class='bx bxl-github'></i>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/antonio-carlos-cabral-7b287b188/" rel='noopener noreferrer' target="_blank">
                    <i class='bx bxl-linkedin'></i>       
                </a>
            </div>
        </div>
    )
}