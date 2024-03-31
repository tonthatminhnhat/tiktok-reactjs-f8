import config from '~/config';
//Layouts
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: '/following', component: Following },
   { path: '/:nickname', component: Profile },
   { path: '/upload', component: Upload, layout: HeaderOnly },
   { path: '/search', component: Search, layout: null },
   { path: config.routes.live, component: Live },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
