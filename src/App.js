import './App.css';
import TopLine from "./components/TopLine/TopLine";
import ChoiceFlat from "./components/ChoiceFlat/ChoiceFlat";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import showBigFlatItem from "./components/showBigFlatItem/ShowBigFlatItem";
import Login from "./components/Login/Login";
import Page404 from "./components/Page404/Page404";

function App() {
    return (
        <HashRouter>
        <div className="App">
            <TopLine />
            <Switch>
                <Route exact path="/" component={ChoiceFlat}/>
                <Route exact path="/flat/:flatId" component={showBigFlatItem}/>
                <Route exact path="/login" component={Login}/>
                <Route path="*" component={Page404}/>
            </Switch>
        </div>
        </HashRouter>
    );
}

export default App;
