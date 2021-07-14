import {Route} from  'react-router-dom';

import MainPage from './page/MainPage';
import PCFL from './page/contents/PCFL';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/pcfl" component={PCFL} />
        </div>
    );
}
export default App;