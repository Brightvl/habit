import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (isLoggedIn) {
            navigate('/dashboard');
        } else {
            navigate('/auth');
        }
    };

    return (
        <header className="app-header">
            <h1>Мой бюджет</h1>
            <div>
                <p>Возьмите под контроль свои финансы.</p>
                <p>С легкостью отслеживайте свои доходы, расходы и сбережения.</p>
            </div>
            <button className="get-started-button" onClick={handleGetStarted}>
                Get Started
            </button>
        </header>
    );
}

export { Welcome };
