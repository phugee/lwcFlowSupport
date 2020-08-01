import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent, FlowNavigationPauseEvent, FlowNavigationBackEvent, FlowNavigationFinishEvent } from 'lightning/flowSupport';

export default class LwcFlowSupport extends LightningElement {
    @api
    availableActions = [];

    @api
    lwcProperty;

    handleAction(event) {
        const actionClicked = event.target.label;
        let navigationEvent;
        switch (actionClicked) {
            case 'NEXT':
                navigationEvent = new FlowNavigationNextEvent();
                break;
            case 'BACK':
                navigationEvent = new FlowNavigationBackEvent();
                break;
            case 'FINISH':
                navigationEvent = new FlowNavigationFinishEvent();
                break;
            case 'PAUSE':
                navigationEvent = new FlowNavigationPauseEvent();
                break;
            default:
        }

        this.dispatchEvent(navigationEvent);
    }
}