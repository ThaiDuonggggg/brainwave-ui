import ButtonGradient from './assets/svg/ButtonGradient';

import './App.css';
import Button from './components/Button';

function App() {
    return (
        <>
            <h1 className="">Hello Word</h1>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Button className="mt-10" href="#login">
                    some thing
                </Button>
            </div>
            <ButtonGradient />
        </>
    );
}

export default App;
