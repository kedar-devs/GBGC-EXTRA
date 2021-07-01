import React from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Display from '../Component/Display/Display'
import Form from '../Component/Form/Forms.js'
import Home from '../Component/Home/Home'
function AppRoutes() {
    return (
        <div>
            <Router>
                <Route path='/' exact component={Home}/>
                <Route path='/form' exact component={Form} />
                <Route path='/view' exact component={Display} />
            </Router>
        </div>
    )
}

export default AppRoutes
