import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <div className="App">
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/" exact={true}>
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/products" exact={true}>
                        <Products />
                    </Route>
                    <Route path="/products/:productId">
                        <ProductDetail />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
