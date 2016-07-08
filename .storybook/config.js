import { configure } from '@kadira/storybook';
import '../client/matPlanlegger.css'
import '../client/cropper.css'
import '../public/css/yeti-bootstrap.min.css'
import '../public/css/fonts.css'
import '../public/css/font-awesome.min.css'
import { disable } from 'react-komposer';

disable();

function loadStories() {
  require('../imports/ui/app/components/.stories/');
}

configure(loadStories, module);
