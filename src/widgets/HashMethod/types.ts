import {HashMethod} from '#/utils/crypto';

export type State = {
  currentMethod: HashMethod,
  methods: readonly HashMethod[],
};

