import { expect } from '@open-wc/testing';
import { VscodeRadio } from '../vscode-radio';

describe('vscode-radio', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-radio');
    expect(el).to.instanceOf(VscodeRadio);
  });
});
