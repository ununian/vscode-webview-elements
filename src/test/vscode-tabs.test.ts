import { expect } from '@open-wc/testing';
import { VscodeTabs } from '../vscode-tabs';

describe('vscode-tabs', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-tabs');
    expect(el).to.instanceOf(VscodeTabs);
  });
});
