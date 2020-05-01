import React from 'react';
import Root from '#/pitaya/components/Root';
import Grid, {Cell} from '#/pitaya/components/Grid';
import {space} from '#/pitaya/helpers/units';
import {css} from '#/pitaya/helpers/reshadow';

const ROOT_GAP = space(2);

const contentStyles = css(`
  section {
    max-width: ${space(32)};
    padding: ${space(4)};
  }
`);

const View = () => (
  <Root>
    <Grid gap={ROOT_GAP} size={1} styles={contentStyles} wrap>
      <Cell>
        content
      </Cell>
      <Cell>
        content
      </Cell>
    </Grid>
  </Root>
);

export default View;
