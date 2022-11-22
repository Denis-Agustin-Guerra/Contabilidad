import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import login from '../actions/auth'
import AppScreen from '../pages/AppScreen'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'
import { firebase } from '../firebase/config_firebase'
import PublicRouter from './PublicRouter'
import { loadData } from '../helpers/loadData'
import { leerRegistros } from '../actions/nomina'


const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);

        const ragistroData= await loadData(user.uid);
        dispatch(leerRegistros(ragistroData))

      } else
        setLog(false);
    }
    )
  }, [dispatch])


  return (
    <div className=' grey darken-2 white-text'>
      <Router>
        <Switch>
          {/* <AppScreen /> */}
          <PublicRouter path="/auth" component={AuthRouter} log={log} />
          <PrivateRouter exact path="/" component={AppScreen} log={log} />
        </Switch>
      </Router>
    </div>
  )
}

export default AppRouter
