import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorizationPage } from './pages/AuthorizationPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { StartPage } from './pages/dashboard/StartPage';
import { ProfilePage } from './pages/dashboard/ProfilePage';
import { AdsPage } from './pages/dashboard/AdsPage';
import { TestPage } from './pages/TestPage';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" 
                    element={   <PrivateRoute>
                                    <UserInfoPage />
                                </PrivateRoute>
                } />
                
                <Route path="/sign-in" 
                    element={<AuthorizationPage authComponent={'sign-in'} /> } />

                <Route path="/sign-up"
                    element={<AuthorizationPage authComponent={'sign-up'} />} />

                <Route path="/dashboard" element={<DashboardPage />} >
                    <Route path="" element={<StartPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="ads" element={<AdsPage />} />
                </Route>
            </Routes>
        </Router>
    );
}
