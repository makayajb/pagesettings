import {registry} from '@jahia/ui-extender';
import React from 'react';
 
export default () => {
    registry.add('primary-nav-item', 'acmeGroupItem', {
        targets: ['nav-root-tasks:1'],
        render: () => <AcmeGroup/>
    });

    window.jahia.uiExtender.registry.add('adminRoute', 'test', {
        targets: ['administration-sites:10'],
        // label: 'ns:label.title',
        label: 'JBM',
        // icon: <DefaultEntry/>,
        isSelectable: true,
        render: <AcmeGroup/>
    });
};
