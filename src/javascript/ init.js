import {registry} from '@jahia/ui-extender';
import register from './Acme/register';
 
export default function () {
    registry.add('callback', 'acme', {
        targets: ['jahiaApp-init:5'],
        callback: register
    });
}
 
