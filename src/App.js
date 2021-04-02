import { Provider } from 'react-redux';

import MainPage from './pages/main';
import store from './store';
import styles from './App.module.css';

const App = (props) => {
    return (
        <Provider store={store}>
            <div className={styles.container}>
                <MainPage />
            </div>
        </Provider>
    )
}

export default App;