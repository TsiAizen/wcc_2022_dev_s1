import { FunctionComponent } from 'react';

import './Home.scss';

interface HomeProps {};

const Home : FunctionComponent<HomeProps> = ({} : HomeProps) :JSX.Element => (
    <div className="home">
        <p className='expire-text'>Time Expired !</p>
    </div>
);

export default Home;