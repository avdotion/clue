import React, {useState} from 'react';
// @ts-ignore
import styled, {use} from 'reshadow/macro';

import {SecretData} from './entities/secretData';
import {
  Input as OptionalSaltInput,
  DomainNameInput,
  MasterPasswordInput,
} from './widgets/input';
import {Slider, Trigger} from './widgets/switch';
import {DataVisualizationBar} from './widgets/protection-bar';
import {SaltedPassword} from './widgets/salted-password';

import {useIndents} from './entities/indents';
import {activatePalette} from './entities/palette';
import {HASH_FUNCTIONS, DEFAULT_HASH_FUNCTION} from './utils/crypto';

const activateDarkMode = activatePalette('dark');
const activateLightMode = activatePalette('light');
const HASH_METHODS = Object.keys(HASH_FUNCTIONS);

const App: React.FC = () => {
  const [secretData, patchSecretData] = useState<SecretData>({
    masterPassword: '',
    domainName: '',
    optionalSalt: '',
  });

  const handleInput = (field: string) => (newValue: string) => {
    patchSecretData({
      ...secretData,
      [field]: newValue,
    });
  };

  const [hashMethod, setHashMethod] = useState<string>(
    window.localStorage.getItem('hashMethod') || DEFAULT_HASH_FUNCTION
  );
  const handleSlider = (newHashMethod: string) => {
    window.localStorage.setItem('hashMethod', newHashMethod);
    setHashMethod(newHashMethod);
  };

  const [isAutoCopyEnabled, triggerAutoCopy] = useState<boolean>(
    window.localStorage.getItem('isAutoCopyEnabled') === 'enabled' || false
  );
  const handleTrigger = () => {
    window.localStorage.setItem(
      'isAutoCopyEnabled',
      !isAutoCopyEnabled ? 'enabled' : 'disabled'
    );
    triggerAutoCopy(!isAutoCopyEnabled);
    console.log(typeof isAutoCopyEnabled);
  };

  useIndents();
  const isDarkMode = window
    .matchMedia('(prefers-color-scheme: dark)')
    .matches;
  const isLightMode = window
    .matchMedia('(prefers-color-scheme: light)')
    .matches;

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener(e => e.matches && activateDarkMode());
  window
    .matchMedia('(prefers-color-scheme: light)')
    .addListener(e => e.matches && activateLightMode());

  if (isDarkMode) {
    activateDarkMode();
  }
  if (isLightMode) {
    activateLightMode();
  }

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

    |field {
      margin-bottom: var(--indent5);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    |field:last-child {
      margin: 0;
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
          <use.field>
            <MasterPasswordInput
              label='Master Password'
              value={secretData.masterPassword}
              onChange={handleInput('masterPassword')}
            />
          </use.field>
          <use.field>
            <DomainNameInput
              label='Domain Name'
              value={secretData.domainName}
              onChange={handleInput('domainName')}
              />
          </use.field>
          <use.field>
            <OptionalSaltInput
              label='Salt (optional)'
              value={secretData.optionalSalt}
              onChange={handleInput('optionalSalt')}
            />
          </use.field>
          <use.field>
            <Slider
              options={HASH_METHODS}
              value={hashMethod}
              onSlide={handleSlider}
            />
            <Trigger
              label={'autocopy'}
              disabled={Boolean(!navigator.clipboard)}
              disabledAlert={'AutoCopy isn\'t supported by this browser'}
              active={isAutoCopyEnabled}
              // @ts-ignore
              onTrigger={handleTrigger}
            />
          </use.field>
          <use.field>
            <DataVisualizationBar
              secretData={secretData}
            />
          </use.field>
          <use.field>
            <SaltedPassword
              secretData={secretData}
              hashMethodName={hashMethod}
              isAutoCopyEnabled={isAutoCopyEnabled}
            />
          </use.field>
        </use.mainframe>
      </use.container>
    </use.fullFrameLayout>
  );
};

export default App;
