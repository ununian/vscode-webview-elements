import { expect } from '@open-wc/testing';
import { VscodeInputbox } from '../vscode-inputbox';

describe('vscode-inputbox', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-inputbox');
    expect(el).to.instanceOf(VscodeInputbox);
  });
});
