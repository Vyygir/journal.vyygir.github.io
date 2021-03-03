import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './scss/variables.scss';
import './scss/core.scss';

import { getRandomTitle } from './scripts/TitleRandomiser';

import Header from './components/Header';
import Wrapper from './components/Wrapper';
import PostList from './components/PostList';
import PostView from './components/PostView';
import EmptyView from './components/EmptyView';

const pageTitle = getRandomTitle();

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet>
                <title>{ pageTitle }</title>
            </Helmet>

            <Router basename={ process.env.PUBLIC_URL }>
                <Header title={ pageTitle } />

                <div className='container'>
                    <Wrapper class='page-content'>
                        <Switch>
                            <Route path='/not-found' component={ EmptyView } />
                            <Route path='/post/:slug' component={ PostView } />
                            <Route exact path='/' component={ PostList } />
                            <Route component={ EmptyView } />
                        </Switch>
                    </Wrapper>
                </div>
            </Router>
        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
