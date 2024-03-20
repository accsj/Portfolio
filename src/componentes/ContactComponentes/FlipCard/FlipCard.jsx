import { useState } from 'react';
import { toast } from 'react-toastify';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import 'react-toastify/dist/ReactToastify.css';
import '../FlipCard/FlipCard.css';

export default function FlipCard() {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(true);
    };

    const leave = () => {
        setIsFlipped(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        try {
            const response = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(formObject),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            toast.success('Email enviado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                onClose: () => {
                    window.location.href = '/'; 
                }
            });
        } catch (error) {
            toast.error('Ocorreu um erro ao enviar o email!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    };

    return (
        <div className="flipcards" onMouseEnter={flipCard} onMouseLeave={leave}>
            <div className={`cards-contact ${isFlipped ? 'flipped' : ''}`} id="email">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <i className='bx bx-envelope' id="mail"></i>
                    </div>
                    <div className="flip-card-back">
                        <form className="form" onSubmit={handleSubmit}>
                            <input type="hidden" name="accessKey" value="e6bfc40f-b92b-4e82-9bd2-cc7331e06174" /> 
                            <input type="text" name="name" placeholder="Nome completo" autoComplete="off" required />
                            <input type="email" name="email" placeholder="Endereço de email" autoComplete="off" required />
                            <textarea className="textarea" name="message" placeholder="Sua mensagem" autoComplete="off" rows="4" required></textarea>
                            <ButtonSubmit />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}




