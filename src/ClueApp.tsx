import React, {useState} from 'react';
import styled, {use} from 'reshadow';

import Grid, {Column} from '#/pitaya/components/Grid';
import MasterPassword from '#/pitaya/components/Inputs/MasterPassword';
import Salt from '#/pitaya/components/Inputs/Salt';
import DomainName from '#/pitaya/components/Inputs/DomainName';

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
