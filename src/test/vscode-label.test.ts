import { expect } from '@open-wc/testing';
import { VscodeLabel } from '../vscode-label';

describe('vscode-label', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-label');
    expect(el).to.instanceOf(VscodeLabel);
  });
});
