import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Governance from './pages/governance/Governance';
import More from './pages/more/More';
import Pools from './pages/pools/Pools';
import Swap from './pages/swap/Swap';
import SwapDetails from './pages/swap/Swap_Details';
import ConnectWallet from './pages/connectWallet/ConnectWallet';
import GovernanceInfo from "./pages/governance/GovernanceInfo";
import PoolAddLiquidity from "./pages/pools/Pools_Add_Liquidity";
import PoolRemoveLiquidity from "./pages/pools/Pools_Remove_Liquidity";
import PoolSwap from "./pages/pools/Pools_Swap";
import PoolLocking from "./pages/pools/Pools_Looking";


function App() {
  return (
    <Router>
     <Switch>
       <Route path="/" component={Swap} exact />
       <Route path="/swap/details" component={SwapDetails} exact />
       <Route path="/pools" component={Pools} exact />
       <Route path="/pools/add-liquidity" component={PoolAddLiquidity} exact />
       <Route path="/pools/remove-liquidity" component={PoolRemoveLiquidity} exact />
       <Route path="/pools/swap" component={PoolSwap} exact />
       <Route path="/pools/locking" component={PoolLocking} exact />
       <Route path="/governance" component={Governance} exact />
       <Route path="/governance-info" component={GovernanceInfo} exact />
       <Route path="/more" component={More} exact />
       <Route path="/connect-wallet" component={ConnectWallet} exact />
     </Switch>
    </Router>
  );
}

export default App;
