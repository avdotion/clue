import React, {useState, useEffect} from 'react';
import styled, {use, css} from 'reshadow';

import MasterPassword from '#/widgets/MasterPassword';
import DomainName from '#/widgets/DomainName';
import OptionalSalt from '#/widgets/OptionalSalt';
import HashMethod from '#/widgets/HashMethod';
import AutoCopy from '#/widgets/AutoCopy';
import EmojiBar from '#/widgets/EmojiBar';
import SaltedPassword from '#/widgets/SaltedPassword';

import Section from '#/components/Section';

import {activateIndents} from '#/entities/indents';
import {activatePalette} from '#/entities/palette';

export const ClueApp: React.FC = () => {
  const colorScheme = useDayLightTheme();
  activatePalette(colorScheme);
  activateIndents();

  return styled`
    :global(body) {
      margin: 0;
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 12px;
      background-color: var(--background-color);
    }
    |meta {
      text-align: center;
      color: var(--copyright-meta-text-color);
      margin: var(--indent5) 0;
    }
    |meta a {
      color: var(--copyright-meta-text-color);
      text-decoration: none;
    }
    |fullFrameLayout {
      min-height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    |container {
      flex-wrap: wrap;
      width: 100%;
    }
    @media only screen and (min-width: 440px)  {
      |container {
        max-width: 340px;
      }
    }
    |mainframe {
      width: 100%;
      background-color: var(--mainframe-color);
      padding: var(--indent5);
      box-sizing: border-box;
    }
    @media only screen and (min-width: 440px)  {
      |mainframe {
        border-radius: 4px;
      }
    }
  `(
    <use.fullFrameLayout>
      <use.container>
        <use.meta>
          <p>Clue Password Manager  |  <a
            href='http://github.com/avdotion/clue'
            target='_blank'
            rel='noopener noreferrer'
          >Source</a></p>
        </use.meta>
        <use.mainframe>
          <Section title='Master Password'>
            <MasterPassword />
          </Section>
          <Section title='Domain Name'>
            <DomainName />
          </Section>
          <Section title='Salt (optional)'>
            <OptionalSalt />
          </Section>
          <Section>
            <HashMethod />
            <AutoCopy />
          </Section>
          <Section>
            <EmojiBar />
          </Section>
          <Section
            title='Salted Password'
            style={css`
              section {
                margin-bottom: 0;
              }
            `}
          >
            <SaltedPassword />
          </Section>
        </use.mainframe>
      </use.container>
    </use.fullFrameLayout>
  );
};

const useDayLightTheme = () => {
  const isNightTime = matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState<'dark' | 'light'>(
    isNightTime ? 'dark' : 'light'
  );

  useEffect(() => {
    matchMedia('(prefers-color-scheme: dark)').addListener(
      e => e.matches && setTheme('dark')
    );

    matchMedia('(prefers-color-scheme: light)').addListener(
      e => e.matches && setTheme('light')
    );
  });

  return theme;
};
