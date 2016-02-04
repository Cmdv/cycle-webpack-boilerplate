import Home       from '../../pages/home/home-index';
import Page1      from '../../pages/page1/page1-index';
import Page2      from '../../pages/page2/page2-index';
import Page404    from '../../pages/page404/page404-index';

const routes = {
  '/': Home,
  '/page1': Page1,
  '/page2': Page2,
  '*': Page404,
};

export default routes
