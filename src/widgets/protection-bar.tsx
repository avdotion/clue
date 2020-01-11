import React from 'react';
// @ts-ignore
import styled, {use} from 'reshadow/macro';
import {SecretData} from './../entities/secretData';

// eslint-disable-next-line max-len
const EMOJI_LIST = ['😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🦝','🐵','🐒','🦍','🐶','🐕','🐩','🐺','🦊','🐱','🐈','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🦙','🐃','🐄','🐷','🦛','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦒','🐘','🦏','🐭','🐁','🐀','🦘','🐹','🦡','🐰','🐇','🐿','🦔','🦇','🐻','🐨','🐼','🐾','🦃','🐔','🦢','🐓','🐣','🐤','🦚','🐥','🐦','🦜','🐧','🕊','🦅','🦆','🦉','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟','🐠','🐡','🦈','🐙','🐚','🦀','🦟','🦐','🦠','🦑','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷','🕸', '🦂','🦞','🌸','💮','🏵','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🌾','🌿','☘','🍀','🍁','🍂','🍃','🍄','💅','👓','🕶','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','👙','👚','👛','👜','👝','🛍','🎒','👞','👟','👠','👡','👢','👑','👒','🎩','🎓','🧢','⛑','📿','💄','🌂','☂','🎽','🥽','🥼','🥾','🥿','🧺','🚂','🚃','🚄','🚅','🚆','🚇','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍','🚎','🚐','🚑','🚒','🚓','🚔','🚕','🚖','🚗','🚘','🚙','🚚','🚛','🚜','🚲','🛴','🛵','🚏','🛣','🛤','⛵','🛶','🚤','🛳','⛴','🛥','🚢','✈','🛩','🛫','🛬','🚁','🚟','🚠','🚡','🛰','🚀','🛸','🌍','🌎','🌏','🌐','🗺','🗾','🏔','⛰','🗻','🏕','🏖','🏜','🏝','🏞','🏟','🏛','🏗','🏘','🏚','🏠','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭','🏯','🏰','🗼','🗽','⛪','🕌','🕍','⛩','🕋','⛲','⛺','🏙','🎠','🎡','🎢','🎪','⛳','🗿','💦','🌋','🌁','🌃','🌄','🌅','🌆','🌇','🌉','🌌','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌙','🌚','🌛','🌜','🌡','☀','🌝','🌞','🌟','🌠','⛅','⛈','🌤','🌥','🌦','🌧','🌨','🌩','🌪','🌫','🌬','🌀','🌈','⛄','💧','🌊','🎑'];
const DEFAULT_EMOJI = '🔒';

const emoji = (value: string): string => {
  const lettersWeightedSum = value.split('').reduce(
    (acc, cur, index) =>
      acc + cur.charCodeAt(0) * index, 0);
  return EMOJI_LIST[lettersWeightedSum % EMOJI_LIST.length];
};

type Props = {
  secretData: SecretData,
};

export const DataVisualizationBar: React.FC<Props> = ({
  secretData: {
    masterPassword,
    domainName,
    optionalSalt,
  },
}: Props) => styled`
  |wrapper {
    line-height: 2.6em;
    font-size: 3.4em;
    letter-spacing: 0.35em;
    text-align: center;
    width: 100%;
  }
`(
  <use.wrapper>{
    masterPassword === ''
    ? new Array(3).fill(DEFAULT_EMOJI)
    : domainName === ''
      ? [
        emoji(masterPassword),
        DEFAULT_EMOJI,
        DEFAULT_EMOJI,
      ]
      : [
          emoji(masterPassword),
          emoji(domainName + optionalSalt),
          emoji(optionalSalt + domainName + 'shift'),
        ]
  }</use.wrapper>
);

