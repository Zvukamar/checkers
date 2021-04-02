import { Provider } from 'react-redux';

import MainPage from './pages/main';
import store from './store';
import styles from './App.module.css';
import ErrorSnackbar from './components/ErrorSnackbar';

const App = (props) => {
    return (
        <Provider store={store}>
            <div className={styles.container}>
                <ErrorSnackbar />
                <MainPage />
            </div>
        </Provider>
    )
}

export default App;