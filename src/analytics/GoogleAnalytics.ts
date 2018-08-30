import ReactGA, {InitializeOptions} from 'react-ga';
import Analytics from './Analytics';
import EventModel from './EventModel';

export default abstract class GoogleAnalytics extends Analytics {
  static setup(trackingId: string, options?: InitializeOptions): void {
    ReactGA.initialize(trackingId, options);
  }

  static track = (event: EventModel): void => {
    ReactGA.event(event);
  };
}
