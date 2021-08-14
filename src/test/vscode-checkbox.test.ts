import { expect } from '@open-wc/testing';
import { VscodeCheckbox } from '../vscode-checkbox';

describe('vscode-checkbox', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-checkbox');
    expect(el).to.instanceOf(VscodeCheckbox);
  });
});
