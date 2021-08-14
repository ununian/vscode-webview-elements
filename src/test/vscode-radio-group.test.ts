import { expect } from '@open-wc/testing';
import { VscodeRadioGroup } from '../vscode-radio-group';

describe('vscode-radio-group', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-radio-group');
    expect(el).to.instanceOf(VscodeRadioGroup);
  });
});
