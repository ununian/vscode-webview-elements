import { expect } from '@open-wc/testing';
import { VscodeScrollable } from '../vscode-scrollable';

describe('vscode-scrollable', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-scrollable');
    expect(el).to.instanceOf(VscodeScrollable);
  });
});
