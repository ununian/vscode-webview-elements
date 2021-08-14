import { expect } from '@open-wc/testing';
import { VscodeIcon } from '../vscode-icon';

describe('vscode-icon', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-icon');
    expect(el).to.instanceOf(VscodeIcon);
  });
});
