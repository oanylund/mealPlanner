import { configure } from '@kadira/storybook';
import '../matPlanlegger.css'
import '../public/css/yeti-bootstrap.min.css'
import '../public/css/fonts.css'
import '../public/css/font-awesome.min.css'

function loadStories() {
  require('../client/app/components/.stories/');
}

configure(loadStories, module);
