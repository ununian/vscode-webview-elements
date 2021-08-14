import { expect } from '@open-wc/testing';
import { VscodeCollapsible } from '../vscode-collapsible';

describe('vscode-collapsible', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-collapsible');
    expect(el).to.instanceOf(VscodeCollapsible);
  });
});
