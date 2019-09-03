import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Btn from './button';

storiesOf('Btn', module).add("default", () => <Btn name="marrk" {...action}/> ).add("second", () => <Btn name='Joey' {...action}/>);