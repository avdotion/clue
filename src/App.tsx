import React, {useState, useEffect} from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

import {
  Input as OptionalSaltInput,
  DomainNameInput,
  MasterPasswordInput,
  SaltedPassword,
} from './widgets/textboxes';
import {Slider, Trigger} from './widgets/switch';
import {DataVisualizationBar} from './widgets/protection-bar';
import {Section} from './widgets/layout';

import {activateIndents} from './entities/indents';
import {activatePalette} from './entities/palette';

import {HASH_FUNCTIONS, DEFAULT_HASH_FUNCTION} from './utils/crypto';
const HASH_METHODS = Object.keys(HASH_FUNCTIONS);

export const App: React.FC = () => {
  const [masterPassword, setMasterPassword] = useState<string>('');
  const [domainName, setDomainName] = useState<string>('');
  const [optionalSalt, setOptionalSalt] = useState<string>('');

  const [hashMethod, setHashMethod] = useState<string>(
    localStorage.getItem('hashMethod') || DEFAULT_HASH_FUNCTION
  );
  useEffect(() => { localStorage.setItem('hashMethod', hashMethod); });

  const [DISABLED, ENABLED] = ['DISABLED', 'ENABLED'];
  const toStorable = (flag: boolean): string => flag ? ENABLED : DISABLED;
  const [isAutoCopyEnabled, setAutoCopy] = useState<boolean>(
    localStorage.getItem('autoCopy') === ENABLED || false
  );
  useEffect(() => {
    localStorage.setItem('autoCopy', toStorable(isAutoCopyEnabled));
  });

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
            <MasterPasswordInput
              value={masterPassword}
              onChange={(newValue: string) => { setMasterPassword(newValue); }}
            />
          </Section>
          <Section title='Domain Name'>
            <DomainNameInput
              value={domainName}
              onChange={(newValue: string) => { setDomainName(newValue); }}
            />
          </Section>
          <Section title='Salt (optional)'>
            <OptionalSaltInput
              value={optionalSalt}
              onChange={(newValue: string) => { setOptionalSalt(newValue); }}
            />
          </Section>
          <Section>
            <Slider
              options={HASH_METHODS}
              value={hashMethod}
              onSlide={(newValue: string) => { setHashMethod(newValue); }}
            />
            <Trigger
              label={'autocopy'}
              disabled={Boolean(!navigator.clipboard)}
              disabledAlert={'AutoCopy isn\'t supported by this browser'}
              active={isAutoCopyEnabled}
              onTrigger={(newValue) => { setAutoCopy(newValue); }}
            />
          </Section>
          <Section>
            <DataVisualizationBar
              secretData={{masterPassword, domainName, optionalSalt}}
            />
          </Section>
          <Section
            title='Salted Password'
            style={css`
              section {
                margin-bottom: 0;
              }
            `}
          >
            <SaltedPassword
              secretData={{masterPassword, domainName, optionalSalt}}
              hashMethodName={hashMethod}
              isAutoCopyEnabled={isAutoCopyEnabled}
            />
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
