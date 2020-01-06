import React from 'react';
import styled, {use} from 'reshadow';

import {MasterPassword} from '#/widgets/MasterPassword/types';
import {DomainName} from '#/widgets/DomainName/types';
import {OptionalSalt} from '#/widgets/OptionalSalt/types';

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
  masterPassword: MasterPassword,
  domainName: DomainName,
  optionalSalt: OptionalSalt,
};

export default function EmojiBarComponent ({
  masterPassword,
  domainName,
  optionalSalt,
}: Props) {
  return styled`
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
}
