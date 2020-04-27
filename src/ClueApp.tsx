import React, {useState} from 'react';
import styled, {use} from 'reshadow';

import Grid, {Column} from '#/pitaya/components/Grid';
import Input from '#/pitaya/components/Input';


export const ClueApp: React.FC = () => {

  const [password, changePassword] = useState('');
  const [salt, changeSalt] = useState('');
  const [domainName, changeDomainName] = useState('');

  return styled`
    |block {
      width: 340px;
    }
  `(
    <use.block>
      <Grid>
        <Column>
          <Input
            value={password}
            label='Master Password'
            autoFocus={true}
            type='password'
            onChange={(value) => {changePassword(value);}}
          />
          <Input
            value={salt}
            label='Salt'
            type='password'
            onChange={(value) => {changeSalt(value);}}
          />
          <Input
            value={domainName}
            label='URL'
            addiction='https://'
            onChange={(value) => {changeDomainName(value);}}
            buttonOnClick={() => {console.log('CLICK!');}}
          />
        </Column>
      </Grid>
    </use.block>
  );
};
