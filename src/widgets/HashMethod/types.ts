import {HashMethod} from '#/utils/crypto';

export type State = {
  chosenMethod: HashMethod,
  methods: readonly HashMethod[],
};

