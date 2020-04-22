import React, {useState} from 'react';
import styled, {use} from 'reshadow';

import Grid, {Column} from '#/components/Pitaya/Grid';
import MasterPassword from '#/components/Pitaya/MasterPassword';
import Salt from '#/components/Pitaya/Salt';
import DomainName from '#/components/Pitaya/DomainName';

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
          <MasterPassword
            value={password}
            onChange={(value) => {changePassword(value);}}
          />
          <Salt
            value={salt}
            onChange={(value) => {changeSalt(value);}}
          />
          <DomainName
            value={domainName}
            onChange={(value) => {changeDomainName(value);}}
            buttonOnClick={() => {console.log('CLICK!');}}
          />
        </Column>
      </Grid>
    </use.block>
  );
};
